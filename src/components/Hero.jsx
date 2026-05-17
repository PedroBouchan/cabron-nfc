import { useLanguage } from "../context/LanguageContext";
import { scrollToSection } from "../utils/scrollTo";

export default function Hero({ onBuy }) {
  const { texts } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center justify-center px-6 overflow-hidden"
    >

      {/* ⭐ PARTÍCULAS DIGITALES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(90)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-nfcblue/60 rounded-full animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 🔥 HOLOGRAMA DERECHO */}
      <div className="absolute top-10 right-10 w-40 h-40 md:w-56 md:h-56 pointer-events-none opacity-70 animate-fadeIn">
        <div className="absolute inset-0 rounded-full border-2 border-nfcblue/40 animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border border-nfcblue/20 animate-spin-reverse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,nfcblue_90deg,transparent_180deg)] animate-rotate-rays opacity-40"></div>
        <div className="absolute inset-0 rounded-full bg-nfcblue/10 animate-holo-pulse"></div>
      </div>

      {/* 🔥 HOLOGRAMA IZQUIERDO */}
      <div className="absolute bottom-10 left-10 w-32 h-32 md:w-48 md:h-48 pointer-events-none opacity-60 animate-fadeIn">
        <div className="absolute inset-0 rounded-full border-2 border-nfcblue/30 animate-spin-slow"></div>
        <div className="absolute inset-5 rounded-full border border-nfcblue/20 animate-spin-reverse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,nfcblue_60deg,transparent_180deg)] animate-rotate-rays opacity-30"></div>
        <div className="absolute inset-0 rounded-full bg-nfcblue/10 animate-holo-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div className="space-y-6 animate-fadeIn relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            {texts.hero_title_1}<br />
            {texts.hero_title_2} <span className="text-nfcblue">CABRÓN NFC</span>
          </h1>

          <p className="text-lg text-white/70 max-w-md">
            {texts.hero_subtitle}
          </p>

          {/* BOTONES */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={onBuy}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-nfcblue hover:text-white transition"
            >
              {texts.hero_button_buy}
            </button>

            <button
              onClick={() => scrollToSection("product")}
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-nfcblue hover:text-nfcblue transition"
            >
              {texts.hero_button_view}
            </button>
          </div>
        </div>

        {/* IMAGEN CON EFECTO TECNOLÓGICO */}
        <div
          className="flex justify-center animate-fadeIn relative group"
          style={{ perspective: "1200px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[450px] h-[450px] bg-nfcblue/40 blur-[150px] rounded-full"></div>
          </div>

          <div
            className="relative transition-transform duration-300 group-hover:rotate-[10deg] group-hover:-rotate-x-6 group-hover:scale-[1.05]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-nfcblue/40 via-transparent to-nfcblue/40 animate-scan-strong"></div>
            </div>

            <div className="absolute inset-0 rounded-3xl border-2 border-nfcblue/60 opacity-0 group-hover:opacity-100 blur-[2px] transition duration-300 pointer-events-none"></div>

            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.15)_2%,transparent_4%)] bg-[length:100%_8px] opacity-20 group-hover:opacity-40 transition duration-300 pointer-events-none"></div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-40 transition duration-300 pointer-events-none"></div>

            <img
              src="/hero.png"
              alt="CABRÓN NFC"
              className="w-64 h-80 md:w-[420px] md:h-[520px] object-cover rounded-3xl border border-white/10 shadow-xl relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
