/** @type {import('tailwindcss').Config} */
module.exports = {
   plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/typography"),
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-out forwards', // Adding forwards ensures it stays in the final state
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          80: '#0D8585',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        theme: {blue: 'rgb(2 6 23)'},
      },
      backgroundColor: {
        'rgb-2-6-23': 'rgb(2 6 23)',
        'theme-color': 'rgb(2 6 23)',
      },
      backgroundImage: {
        'bg_img_blogPage': "url('/left_globe.jpg')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'about-us-header': "url('/about_us/about_us_header.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      fontFamily: {
        Merriweather : ['Merriweather'],
        playfair_display : ['var(--font-playfair_display)'],
      },
    },
  },
};