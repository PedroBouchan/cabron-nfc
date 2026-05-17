import { useLanguage } from "../context/LanguageContext";

export default function Benefits() {
  const { texts } = useLanguage();

  return (
    <section id="benefits" className="relative w-full py-24 px-6 bg-black">

      <div className="max-w-6xl mx-auto text-center space-y-16 relative">

        {/* ⭐ CONTENEDOR DEL TÍTULO CON GLOW */}
        <div className="relative flex justify-center items-center">

          {/* ⭐ GLOW DETRÁS DEL TÍTULO (VERSIÓN QUE SÍ SE VE) */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <div className="w-[500px] h-[500px] bg-nfcblue/40 blur-[150px] rounded-full opacity-80"></div>
          </div>

          {/* ⭐ DIVIDER HOLOGRÁFICO */}
          <div className="absolute -top-10 w-20 h-1 bg-nfcblue/60 rounded-full blur-sm"></div>

          {/* ⭐ TÍTULO */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative z-10">
            {texts.benefits_title_1}{" "}
            <span className="text-nfcblue">{texts.benefits_title_2}</span>
          </h2>
        </div>

        {/* ⭐ GRID DE BENEFICIOS */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* BENEFICIO 1 */}
          <div className="relative space-y-4 animate-fadeIn group p-6 rounded-xl">
            <div className="absolute inset-0 rounded-xl border border-nfcblue/0 group-hover:border-nfcblue/40 transition duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.05)_2%,transparent_4%)] bg-[length:100%_8px] opacity-10 pointer-events-none rounded-xl"></div>

            <div className="text-nfcblue text-5xl">⚡</div>
            <h3 className="text-xl font-semibold">{texts.benefit_1_title}</h3>
            <p className="text-white/60">{texts.benefit_1_desc}</p>
          </div>

          {/* BENEFICIO 2 */}
          <div className="relative space-y-4 animate-fadeIn group p-6 rounded-xl">
            <div className="absolute inset-0 rounded-xl border border-nfcblue/0 group-hover:border-nfcblue/40 transition duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.05)_2%,transparent_4%)] bg-[length:100%_8px] opacity-10 pointer-events-none rounded-xl"></div>

            <div className="text-nfcblue text-5xl">🔒</div>
            <h3 className="text-xl font-semibold">{texts.benefit_2_title}</h3>
            <p className="text-white/60">{texts.benefit_2_desc}</p>
          </div>

          {/* BENEFICIO 3 */}
          <div className="relative space-y-4 animate-fadeIn group p-6 rounded-xl">
            <div className="absolute inset-0 rounded-xl border border-nfcblue/0 group-hover:border-nfcblue/40 transition duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.05)_2%,transparent_4%)] bg-[length:100%_8px] opacity-10 pointer-events-none rounded-xl"></div>

            <div className="text-nfcblue text-5xl">🌐</div>
            <h3 className="text-xl font-semibold">{texts.benefit_3_title}</h3>
            <p className="text-white/60">{texts.benefit_3_desc}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
