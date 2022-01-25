module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      karla: ["karla", "sans-serif"],
    },
    extend: {
      animation: {
        fadeInDown: 'fadeInDown 1s ease',
        fadeInUp: 'fadeInUp 1s ease',
        fadeIn: 'fadeIn 1.5s ease',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: "translate3d(0, -20px, 0)" },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: "translate3d(0, 20px, 0)" },
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
