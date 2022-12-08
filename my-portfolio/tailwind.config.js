/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx", "./components/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      inter: ["сatamaran"],
      diplomata: ["diplomata", "SC"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '400': '400%',
      '600/100': '600% 100%',
      '16': '4rem',
      '1000': '1000px',
      '3000': '3000px'
    },
    backgroundImage: {
      'light-theme': "linear-gradient(-45deg, #ee7752, #29539B, #23a6d5, #23d5ab)",
      'light-theme-v2': "linear-gradient(45deg, #F17C58, #E94584, #24AADB , #27DBB1, #FFDC18, #FF3706)",
      'dark-theme': "none",
      'clear-sky': "url(https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80)",
      'stars': "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)",
      'clouds': "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png)",
      'light-clouds': "url(https://img.freepik.com/premium-photo/light-blue-sky-clouds-background_128659-492.jpg?w=1380)"
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
        briem: {
          gold: "rgba(234, 203, 124, 1)",
        }
      },
      width: {
        '10000': '10000%',
      },
      height: {
        '150': '100vh',
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        gradientV2: 'gradientV2 16s linear infinite',
        cloudsMove: 'cloudsMove 150s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientV2: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        cloudsMove: {
          'from': { transform: 'translate3d(-1000px, 0px, 0px)' },
          'to': { transform: 'translate3d(0px, 0px, 0px)' },
        }
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
