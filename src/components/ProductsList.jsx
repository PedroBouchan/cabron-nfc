import { useLanguage } from "../context/LanguageContext";

export default function ProductsList({ onDetails }) {
  const { texts } = useLanguage();

  const products = [
    {
      id: 1,
      name: texts.product_1_name,
      image: "/tarjeta.png",
      price: texts.product_1_price,
      description: texts.product_1_desc
    },
    {
      id: 2,
      name: texts.product_2_name,
      image: "/pulsera.png",
      price: texts.product_2_price,
      description: texts.product_2_desc
    },
    {
      id: 3,
      name: texts.product_3_name,
      image: "/sticker.png",
      price: texts.product_3_price,
      description: texts.product_3_desc
    },
    {
      id: 4,
      name: texts.product_4_name,
      image: "/llavero.png",
      price: texts.product_4_price,
      description: texts.product_4_desc
    }
  ];

  return (
    <section id="products" className="w-full py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* ⭐ TÍTULO CENTRADO */}
        <h2 className="text-4xl font-bold mb-10 text-center">
          {texts.products_list_title}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-nfcblue transition cursor-pointer"
              onClick={() => onDetails(p)}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-white/60">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
