export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        graphite: "#0D0D0D",
        titan: "#1A1A1A",
        silver: "#C8C8C8",
        nfcblue: "#007AFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      /* 🔥 ANIMACIONES PERSONALIZADAS 🔥 */
      animation: {
        fadeIn: "fadeIn 1.2s ease-out forwards",
        scan: "scan 3s linear infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        scan: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "50%": { opacity: 0.4 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },

        pulseSlow: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};
