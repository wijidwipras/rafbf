/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  theme: {

    extend: {
      backgroundImage: {
        'ornamentBox': "url('/src/assets/Ornament Box.svg')",
        'ornamentBox2': "url('/src/assets/Ornamen-Box-2.svg')",
        'ornamentLine': "url('/src/assets/Ornament-line.svg')",
        'bannerHero': "url('/src/assets/Banner-hero.svg')",
        'Sec1SuaraBerisik': "url('/src/assets/suara-berisik.jpg')",
        'mainGrad': "linear-gradient(280deg, #00796D 0%, #38C682 100%)",
        'secondGrad': "linear-gradient(280deg, rgba(0, 121, 109, 0.10) 0%, rgba(56, 198, 130, 0.10) 100%)",
        'whiteGrad': "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      colors: {
        primaryColor: '#0C111F',
      },
    }
  },

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  }
}

