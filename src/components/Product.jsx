import { useLanguage } from "../context/LanguageContext";

export default function Product({ onBuy, onDetails }) {
  const { texts } = useLanguage();

  return (
    <section id="product" className="w-full py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGEN DEL PRODUCTO */}
        <div className="flex justify-center animate-fadeIn relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[350px] h-[350px] bg-nfcblue/20 blur-[100px] rounded-full"></div>
          </div>

          <img
            src="/product.png"
            alt="CABRÓN NFC"
            className="w-80 h-52 object-cover rounded-2xl border border-white/10 shadow-xl"
          />
        </div>

        {/* TEXTO */}
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {texts.product_title_1}<br />
            <span className="text-nfcblue">{texts.product_title_2}</span>
          </h2>

          <p className="text-lg text-white/70 max-w-md">
            {texts.product_desc}
          </p>

          <ul className="space-y-3 text-white/70">
            <li>• {texts.product_bullet_1}</li>
            <li>• {texts.product_bullet_2}</li>
            <li>• {texts.product_bullet_3}</li>
            <li>• {texts.product_bullet_4}</li>
          </ul>

          <div className="flex gap-4 pt-4">

            {/* COMPRAR AHORA → abre modal de compra */}
            <button
              onClick={onBuy}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-nfcblue hover:text-white transition"
            >
              {texts.product_buy}
            </button>

            {/* VER DETALLES → abre modal de detalles */}
            <button
              onClick={onDetails}
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-nfcblue hover:text-nfcblue transition"
            >
              {texts.product_details}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
