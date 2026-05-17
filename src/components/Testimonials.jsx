import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { texts } = useLanguage();

  return (
    <section className="w-full py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
          {texts.testimonials_title}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* TESTIMONIO 1 */}
          <div className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm animate-fadeIn">
            <p className="text-white/80 text-lg leading-relaxed">
              “{texts.test_1_text}”
            </p>
            <div className="mt-6">
              <p className="font-semibold">{texts.test_1_name}</p>
              <p className="text-white/40 text-sm">{texts.test_1_role}</p>
            </div>
          </div>

          {/* TESTIMONIO 2 */}
          <div className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm animate-fadeIn">
            <p className="text-white/80 text-lg leading-relaxed">
              “{texts.test_2_text}”
            </p>
            <div className="mt-6">
              <p className="font-semibold">{texts.test_2_name}</p>
              <p className="text-white/40 text-sm">{texts.test_2_role}</p>
            </div>
          </div>

          {/* TESTIMONIO 3 */}
          <div className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm animate-fadeIn">
            <p className="text-white/80 text-lg leading-relaxed">
              “{texts.test_3_text}”
            </p>
            <div className="mt-6">
              <p className="font-semibold">{texts.test_3_name}</p>
              <p className="text-white/40 text-sm">{texts.test_3_role}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
