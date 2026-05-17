import Stripe from "stripe";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY" });

    const stripe = new Stripe(stripeKey);

    // ⭐ AHORA RECIBIMOS ENVÍO
    const { name, price, shipping } = req.body;

    // ⭐ DEFINIR COSTO DE ENVÍO
    let shippingCost = 0;
    let shippingName = "";

    if (shipping === "standard") {
      shippingCost = 4.99;
      shippingName = "Envío estándar (3-5 días)";
    }

    if (shipping === "express") {
      shippingCost = 9.99;
      shippingName = "Envío express (1-2 días)";
    }

    // ⭐ CREAR SESIÓN DE CHECKOUT
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        // PRODUCTO
        {
          price_data: {
            currency: "usd",
            product_data: { name },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },

        // ENVÍO (solo si shippingCost > 0)
        ...(shippingCost > 0
          ? [
              {
                price_data: {
                  currency: "usd",
                  product_data: { name: shippingName },
                  unit_amount: Math.round(shippingCost * 100),
                },
                quantity: 1,
              },
            ]
          : []),
      ],
      success_url: "https://cabron-nfc.vercel.app/success",
      cancel_url: "https://cabron-nfc.vercel.app/cancel",
    });

    return res.status(200).json({ url: session.url });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
