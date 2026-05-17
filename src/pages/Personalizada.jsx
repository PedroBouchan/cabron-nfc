import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Personalizada() {
  return (
    <div className="w-full min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <div className="pt-24"> 
        {/* HERO */}
        <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-nfcblue/20 blur-[120px] rounded-full -z-10"></div>

          {/* Tarjeta flotante */}
          <div
            className="w-[320px] h-[200px] bg-neutral-900 rounded-xl shadow-2xl mb-10
                       border border-neutral-700 animate-float"
          ></div>

          <h1 className="text-4xl font-bold mb-4">
            Tarjeta NFC Personalizada Premium
          </h1>

          <p className="text-neutral-300 max-w-xl mb-8">
            Diseñada especialmente para tu marca, negocio o profesión.
          </p>

          <a
            href="#form"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition"
          >
            Crear mi tarjeta personalizada
          </a>
        </section>

        {/* BENEFICIOS */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Beneficios</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-lg">
            <li>• Diseño editorial premium</li>
            <li>• Tu logo, tus colores, tu estilo</li>
            <li>• Impresión profesional</li>
            <li>• NFC + QR integrado</li>
            <li>• Programación incluida</li>
            <li>• Entrega en 3–5 días</li>
          </ul>
        </section>

        {/* EJEMPLOS */}
        <section className="py-20 px-6 bg-neutral-950">
          <h2 className="text-3xl font-bold mb-10 text-center">Ejemplos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full h-48 bg-neutral-800 rounded-xl"></div>
            <div className="w-full h-48 bg-neutral-800 rounded-xl"></div>
            <div className="w-full h-48 bg-neutral-800 rounded-xl"></div>
          </div>

          <p className="text-center text-neutral-500 mt-6">
            (Aquí agregaremos los mockups reales después)
          </p>
        </section>

        {/* FORMULARIO */}
        <section id="form" className="py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Personaliza tu tarjeta
          </h2>

          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Nombre o negocio"
              className="p-3 rounded bg-neutral-900 border border-neutral-700"
            />

            <input
              type="text"
              placeholder="Redes sociales o link"
              className="p-3 rounded bg-neutral-900 border border-neutral-700"
            />

            <input
              type="text"
              placeholder="Colores preferidos"
              className="p-3 rounded bg-neutral-900 border border-neutral-700"
            />

            <input
              type="file"
              className="p-3 rounded bg-neutral-900 border border-neutral-700"
            />

            <button
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition"
            >
              Enviar solicitud
            </button>
          </form>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
