import { useLanguage } from "../context/LanguageContext";

export default function HowItWorks() {
  const { texts } = useLanguage();

  return (
    <section className="w-full py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center space-y-16">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {texts.how_title}
        </h2>

        {/* GRID DE PASOS */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* PASO 1 */}
          <div className="space-y-4 animate-fadeIn">
            <div className="text-nfcblue text-6xl">📲</div>
            <h3 className="text-xl font-semibold">{texts.how_1_title}</h3>
            <p className="text-white/60">{texts.how_1_desc}</p>
          </div>

          {/* PASO 2 */}
          <div className="space-y-4 animate-fadeIn">
            <div className="text-nfcblue text-6xl">🔗</div>
            <h3 className="text-xl font-semibold">{texts.how_2_title}</h3>
            <p className="text-white/60">{texts.how_2_desc}</p>
          </div>

          {/* PASO 3 */}
          <div className="space-y-4 animate-fadeIn">
            <div className="text-nfcblue text-6xl">⚡</div>
            <h3 className="text-xl font-semibold">{texts.how_3_title}</h3>
            <p className="text-white/60">{texts.how_3_desc}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
