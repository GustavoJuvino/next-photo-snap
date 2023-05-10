/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "xxl": ["40px", {
          lineHeight: "48px",
          letterSpacing: "0.25rem",
          fontWeight: "bold",
        }]
      },
      letterSpacing: {
        widest: ".22em"
      },
      colors: {
        "light-gray": "#DFDFDF",
        "custom-gradiant": "from-[#FEC393] via-[#BC7198] to-[#5A77FF]",
      },
      keyframes: {
        mobileMenu: {
          'from': { opacity: '0' },
          'to': { opacity: 'initial' },
        }
      }
    }
  },
  plugins: [],
}
