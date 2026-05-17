import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { texts, lang, setLang } = useLanguage();

  return (
    <footer className="w-full mt-32 border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* COLUMNA 1 — MARCA */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold tracking-widest">CABRÓN NFC</h3>
          <p className="text-white/50 text-sm max-w-xs">
            Tecnología premium para profesionales que quieren causar una impresión inmediata.
          </p>
        </div>

        {/* COLUMNA 2 — ENLACES */}
        <div className="space-y-3">
          <h4 className="text-white/70 font-semibold tracking-wide">{texts.footer_nav}</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li className="hover:text-nfcblue transition cursor-pointer">{texts.nav_home}</li>
            <li className="hover:text-nfcblue transition cursor-pointer">{texts.nav_product}</li>
            <li className="hover:text-nfcblue transition cursor-pointer">{texts.nav_benefits}</li>
            <li className="hover:text-nfcblue transition cursor-pointer">{texts.nav_contact}</li>
          </ul>
        </div>

        {/* COLUMNA 3 — LEGALES + IDIOMA */}
        <div className="space-y-3">
          <h4 className="text-white/70 font-semibold tracking-wide">{texts.footer_legal}</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li className="hover:text-nfcblue transition cursor-pointer">{texts.footer_terms}</li>
            <li className="hover:text-nfcblue transition cursor-pointer">{texts.footer_privacy}</li>
            <li className="hover:text-nfcblue transition cursor-pointer">{texts.footer_cookies}</li>
          </ul>

          {/* SELECTOR DE IDIOMA */}
          <div className="pt-4">
            <p className="text-white/70 font-semibold tracking-wide mb-2">{texts.footer_language}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setLang("ES")}
                className={`text-sm ${lang === "ES" ? "text-nfcblue font-bold" : "text-white/60"}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`text-sm ${lang === "EN" ? "text-nfcblue font-bold" : "text-white/60"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} CABRÓN NFC — {texts.footer_rights}
      </div>
    </footer>
  );
}
