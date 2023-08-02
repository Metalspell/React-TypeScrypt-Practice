/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navbar-color1": "rgba(51, 51, 51, 1)",
        "navbar-color2": "rgba(51, 51, 51, 0.5)",
        "main-color1": "rgba(255, 255, 255, 1)",
        "main-red": "rgba(255, 66, 0, 1)",
        "main-green": "rgba(139, 179, 125, 0.8)",
        "main-dark": "rgba(77, 77, 77, 1)",
        "preview-text-bg": "rgba(139, 179, 125, 0.8)",
      },
      backgroundImage: (theme) => (
        {
          'my-preview-image': "url('../public/assets/Rectangle.png')",
          'my-main-image': "url('../public/assets/Crack.png')"
        }
      ),
    },
    screens: {
      xs: "480px",
      sm: "768px",
      lg: "1024px",
      xl: "1280px",
      xll: "1536px"
    },
  },
  plugins: [

  ],
};
