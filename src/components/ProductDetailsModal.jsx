import { useLanguage } from "../context/LanguageContext";

export default function ProductDetailsModal({ open, onClose, product, onBuy }) {
  const { texts } = useLanguage();

  if (!open || !product) return null;

  const bullets = {
    [texts.product_1_name]: [
      texts.modal_bullets_card_1,
      texts.modal_bullets_card_2,
      texts.modal_bullets_card_3,
      texts.modal_bullets_card_4,
      texts.modal_bullets_card_5
    ],
    [texts.product_2_name]: [
      texts.modal_bullets_band_1,
      texts.modal_bullets_band_2,
      texts.modal_bullets_band_3,
      texts.modal_bullets_band_4,
      texts.modal_bullets_band_5
    ],
    [texts.product_3_name]: [
      texts.modal_bullets_sticker_1,
      texts.modal_bullets_sticker_2,
      texts.modal_bullets_sticker_3,
      texts.modal_bullets_sticker_4,
      texts.modal_bullets_sticker_5
    ],
    [texts.product_4_name]: [
      texts.modal_bullets_keychain_1,
      texts.modal_bullets_keychain_2,
      texts.modal_bullets_keychain_3,
      texts.modal_bullets_keychain_4,
      texts.modal_bullets_keychain_5
    ]
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]">
      <div className="bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-2xl space-y-6 animate-fadeIn">

        <h2 className="text-3xl font-bold">{product.name}</h2>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-xl border border-white/10"
        />

        <p className="text-white/70 leading-relaxed">
          {product.description}
        </p>

        <ul className="space-y-2 text-white/70">
          {bullets[product.name]?.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <p className="text-xl font-semibold text-white">${product.price}</p>

        <div className="flex gap-4 pt-4">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full border border-white/20 text-white hover:border-nfcblue hover:text-nfcblue transition"
          >
            {texts.modal_close}
          </button>

          <button
            onClick={() => onBuy(product)}
            className="w-full py-3 rounded-full bg-white text-black font-semibold hover:bg-nfcblue hover:text-white transition"
          >
            {texts.modal_buy}
          </button>
        </div>

      </div>
    </div>
  );
}
