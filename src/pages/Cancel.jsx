export default function Cancel() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      {/* LOGO */}
      <img 
        src="/logo.png" 
        alt="AH CABRÓN!!!" 
        className="w-32 opacity-90 mb-6"
      />

      {/* TITULO */}
      <h1 className="text-4xl font-bold mb-4 tracking-wide">
        Pago cancelado ❌
      </h1>

      {/* MENSAJE */}
      <p className="text-gray-300 text-lg max-w-md text-center mb-8">
        Tu transacción no se completó. Puedes intentarlo nuevamente cuando estés listo.
      </p>

      {/* BOTÓN */}
      <a 
        href="/"
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
      >
        Volver al inicio
      </a>

    </div>
  );
}
