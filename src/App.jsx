import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Product from "./components/Product";
import ProductsList from "./components/ProductsList";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BuyModal from "./components/BuyModal";
import ProductDetailsModal from "./components/ProductDetailsModal";

export default function App() {
  const [buyOpen, setBuyOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ⭐ FUNCIÓN FINAL PARA PROCEDER AL PAGO (STRIPE EN VERCEL)
  const handleCheckout = async () => {
    console.log("✅ handleCheckout llamado");

    try {
      const response = await fetch("/.netlify/functions/checkout", {
  method: "POST",
});


      console.log("✅ respuesta de /api/checkout:", response.status);

      const data = await response.json();
      console.log("✅ data de Stripe:", data);

      if (data.url) {
        console.log("✅ redirigiendo a:", data.url);
        window.location.href = data.url;
      } else {
        console.error("❌ No se recibió URL de Stripe:", data);
      }
    } catch (error) {
      console.error("❌ Error en checkout:", error);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white pt-24">

      <Navbar onBuy={() => setBuyOpen(true)} />
      <Hero onBuy={() => setBuyOpen(true)} />
      <Benefits />

      {/* Producto principal */}
      <Product
        onBuy={() => setBuyOpen(true)}
        onDetails={() => {
          setSelectedProduct({
            name: "Tarjeta NFC CABRÓN",
            image: "/product.png",
            description: "Tarjeta NFC premium para compartir tu información con un toque."
          });
          setDetailsOpen(true);
        }}
      />

      {/* Lista de productos */}
      <ProductsList
        onDetails={(p) => {
          setSelectedProduct(p);
          setDetailsOpen(true);
        }}
      />

      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />

      {/* ⭐ MODAL DE COMPRA CON CHECKOUT */}
      <BuyModal 
        open={buyOpen} 
        onClose={() => setBuyOpen(false)}
        onCheckout={handleCheckout}
      />

      <ProductDetailsModal
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        product={selectedProduct}
      />

    </div>
  );
}
