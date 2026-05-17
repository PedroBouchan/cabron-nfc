import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar({ onBuy }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, setLang, texts } = useLanguage();

  // Scroll suave a secciones
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // cerrar menú mobile
  };

  // Detectar scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1
          className="text-xl font-bold tracking-widest cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          CABRÓN NFC
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">

          <ul className="flex gap-10">
            <li
              className="hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("hero")}
            >
              {texts.nav_home}
            </li>

            <li
              className="hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("product")}
            >
              {texts.nav_product}
            </li>

            <li
              className="hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("benefits")}
            >
              {texts.nav_benefits}
            </li>

            <li
              className="hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("contact")}
            >
              {texts.nav_contact}
            </li>
          </ul>

          {/* SELECTOR DE IDIOMA */}
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setLang("ES")}
              className={`text-sm ${
                lang === "ES" ? "text-nfcblue font-bold" : "text-white/60"
              }`}
            >
              ES
            </button>
            <span className="text-white/40">|</span>
            <button
              onClick={() => setLang("EN")}
              className={`text-sm ${
                lang === "EN" ? "text-nfcblue font-bold" : "text-white/60"
              }`}
            >
              EN
            </button>
          </div>

          {/* BOTÓN COMPRAR AHORA */}
          <button
            onClick={onBuy}
            className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-nfcblue hover:text-white transition"
          >
            {texts.nav_buy}
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <ul className="flex flex-col text-center py-4 text-lg">

            <li
              className="py-3 hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("hero")}
            >
              {texts.nav_home}
            </li>

            <li
              className="py-3 hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("product")}
            >
              {texts.nav_product}
            </li>

            <li
              className="py-3 hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("benefits")}
            >
              {texts.nav_benefits}
            </li>

            <li
              className="py-3 hover:text-nfcblue transition cursor-pointer"
              onClick={() => handleScroll("contact")}
            >
              {texts.nav_contact}
            </li>
          </ul>

          {/* SELECTOR DE IDIOMA MOBILE */}
          <div className="flex justify-center gap-4 py-3">
            <button
              onClick={() => setLang("ES")}
              className={`text-sm ${
                lang === "ES" ? "text-nfcblue font-bold" : "text-white/60"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`text-sm ${
                lang === "EN" ? "text-nfcblue font-bold" : "text-white/60"
              }`}
            >
              EN
            </button>
          </div>

          {/* BOTÓN COMPRAR AHORA MOBILE */}
          <div className="pb-4 flex justify-center">
            <button
              onClick={onBuy}
              className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-nfcblue hover:text-white transition"
            >
              {texts.nav_buy}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
