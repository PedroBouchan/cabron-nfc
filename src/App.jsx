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

  // ⭐ ABRIR MODAL DE COMPRA CON PRODUCTO
  const openBuyModal = (product) => {
    setSelectedProduct(product);
    setBuyOpen(true);
  };

  return (
    <div className="bg-black min-h-screen text-white pt-24">

      {/* NAVBAR */}
      <Navbar onBuy={() => openBuyModal({
        name: "Tarjeta NFC CABRÓN",
        price: 39.99,
        image: "/tarjeta.png"
      })} />

      {/* HERO */}
      <Hero onBuy={() => openBuyModal({
        name: "Tarjeta NFC CABRÓN",
        price: 39.99,
        image: "/tarjeta.png"
      })} />

      <Benefits />

      {/* PRODUCTO PRINCIPAL */}
      <Product
        onBuy={() => openBuyModal({
          name: "Tarjeta NFC CABRÓN",
          price: 39.99,
          image: "/tarjeta.png"
        })}
        onDetails={() => {
          setSelectedProduct({
            name: "Tarjeta NFC CABRÓN",
            image: "/product.png",
            description: "Tarjeta NFC premium para compartir tu información con un toque."
          });
          setDetailsOpen(true);
        }}
      />

      {/* LISTA DE PRODUCTOS */}
      <ProductsList
        onBuy={(p) => openBuyModal(p)}
        onDetails={(p) => {
          setSelectedProduct(p);
          setDetailsOpen(true);
        }}
      />

      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />

      {/* ⭐ MODAL DE COMPRA DINÁMICO */}
      <BuyModal 
        open={buyOpen} 
        onClose={() => setBuyOpen(false)}
        product={selectedProduct}
      />

      {/* MODAL DE DETALLES */}
      <ProductDetailsModal
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        product={selectedProduct}
        onBuy={(p) => openBuyModal(p)}
      />


    </div>
  );
}
