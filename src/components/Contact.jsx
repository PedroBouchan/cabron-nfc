import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { texts } = useLanguage();

  return (
    <section id="contact" className="w-full py-28 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {texts.contact_title}
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto">
          {texts.contact_desc}
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* INFO */}
          <div className="space-y-4 text-left">
            <p className="text-white/80 text-lg">
              📍 {texts.contact_location}
            </p>
            <p className="text-white/80 text-lg">
              ✉️ {texts.contact_email}
            </p>
          </div>

          {/* FORMULARIO */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder={texts.contact_name}
              className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white"
            />
            <input
              type="email"
              placeholder={texts.contact_email_placeholder}
              className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white"
            />
            <textarea
              placeholder={texts.contact_message}
              rows="4"
              className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white"
            ></textarea>

            <button className="w-full px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-nfcblue hover:text-white transition">
              {texts.contact_send}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
