import Stripe from "stripe";

export default async function handler(req, res) {
  // 🔥 CORS (OBLIGATORIO para localhost + producción)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 🔥 Preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // 🔥 Solo POST permitido
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 🔑 Stripe key desde Vercel
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    console.log("ENV CHECK:", stripeKey ? "OK" : "MISSING");

    // ❌ Si no existe la key
    if (!stripeKey) {
      return res.status(500).json({
        error: "Missing STRIPE_SECRET_KEY in Vercel",
      });
    }

    // Stripe init
    const stripe = new Stripe(stripeKey);

    // 🧾 Crear sesión de checkout
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Producto CABRÓN NFC",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      success_url: "https://cabron-nfc.vercel.app/success",
      cancel_url: "https://cabron-nfc.vercel.app/cancel",
    });

    console.log("SESSION CREATED:", session.id);

    // 🔥 IMPORTANTE: esto evita tu /undefined
    return res.status(200).json({
      url: session.url,
    });

  } catch (error) {
    console.error("STRIPE ERROR:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}