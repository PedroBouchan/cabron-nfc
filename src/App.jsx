import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

export default function App() {
  const [buyOpen, setBuyOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openBuyModal = (product) => {
    setSelectedProduct(product);
    setBuyOpen(true);
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* RUTA PRINCIPAL */}
        <Route
          path="/"
          element={
            <div className="bg-black min-h-screen text-white pt-24">
              <Navbar onBuy={() => openBuyModal({
                name: "Tarjeta NFC CABRÓN",
                price: 39.99,
                image: "/tarjeta.png"
              })} />

              <Hero onBuy={() => openBuyModal({
                name: "Tarjeta NFC CABRÓN",
                price: 39.99,
                image: "/tarjeta.png"
              })} />

              <Benefits />

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

              <BuyModal 
                open={buyOpen} 
                onClose={() => setBuyOpen(false)}
                product={selectedProduct}
              />

              <ProductDetailsModal
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)}
                product={selectedProduct}
                onBuy={(p) => openBuyModal(p)}
              />
            </div>
          }
        />

        {/* RUTAS DE STRIPE */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

      </Routes>
    </BrowserRouter>
  );
}
