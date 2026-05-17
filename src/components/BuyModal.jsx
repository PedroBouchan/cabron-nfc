export default function BuyModal({ open, onClose, product }) {
  if (!open || !product) return null;

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "https://cabron-nfc.vercel.app/api/checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: product.name,
            price: product.price,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Error en el servidor");
        return;
      }

      if (!data.url) {
        alert("No se recibió URL de Stripe");
        return;
      }

      window.location.href = data.url;

    } catch (error) {
      console.error("❌ Error en checkout:", error);
      alert("Hubo un problema al procesar el pago.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]">
      <div className="bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-md space-y-6 animate-fadeIn">

        <h2 className="text-2xl font-bold">Completa tu compra</h2>

        {/* PRODUCTO */}
        <div className="space-y-2">
          <label className="text-white/70 text-sm">Producto</label>
          <div className="w-full bg-black border border-white/20 rounded-lg p-3">
            {product.name} — ${product.price}
          </div>
        </div>

        {/* BOTONES */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full border border-white/20 text-white hover:border-nfcblue hover:text-nfcblue transition"
          >
            Cancelar
          </button>

          <button
            onClick={handleCheckout}
            className="w-full py-3 rounded-full bg-white text-black font-semibold hover:bg-nfcblue hover:text-white transition"
          >
            Proceder al pago
          </button>
        </div>

      </div>
    </div>
  );
}
