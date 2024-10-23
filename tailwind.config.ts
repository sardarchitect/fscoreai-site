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
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontSize: {
        'he0': ['6.250em',{
          lineHeight:'1.120em',
          letterSpacing:'0.000em'
        }],
        'he1': ['4.750em',{
          lineHeight:'1.105em',
          letterSpacing:'0.000em'
        }],
        'he2': ['4.000em',{
          lineHeight:'1.125em',
          letterSpacing:'0.000em'
        }],
        'he3': ['3.625em',{
          lineHeight:'1.125em',
          letterSpacing:'0.000em'
        }],
        'h1': ['3.125em',{
          lineHeight:'1.120em',
          letterSpacing:'0.000em'
        }],
        'h2': ['2.500em',{
          lineHeight:'1.100em',
          letterSpacing:'0.000em'
        }],
        'h3': ['2.000em',{
          lineHeight:'1.125em',
          letterSpacing:'0.000em'
        }],
        'h4': ['1.375em',{
          lineHeight:'1.182em',
          letterSpacing:'0.000em'
        }],
        'h6': ['1.250em',{
          lineHeight:'1.200em',
          letterSpacing:'0.000em'
        }],
        'te1': ['1.125em',{
          lineHeight:'1.333em',
          letterSpacing:'0.000em'
        }],
        'te2': ['1.125em',{
          lineHeight:'1.5em',
          letterSpacing:'0.000em'
        }],
         'te3': ['0.875em',{
          lineHeight:'1.286em',
          letterSpacing:'0.000em'
        }],
        'te4': ['0.750em',{
          lineHeight:'1.333em',
          letterSpacing:'0.000em'
        }],
        't1': ['1.125em',{
          lineHeight:'1.333em',
          letterSpacing:'0.000em'
        }],
        't2': ['1.000em',{
          lineHeight:'1.250em',
          letterSpacing:'0.000em'
        }],
        't3': ['0.875em',{
          lineHeight:'1.286em',
          letterSpacing:'0.000em'
        }],
        't4': ['0.750em',{
          lineHeight:'1.333em',
          letterSpacing:'0.000em'
        }],
        'b1': ['1.250em',{
          lineHeight:'1.000em',
          letterSpacing:'0.000em'
        }],
        'b2': ['1.125em',{
          lineHeight:'1.000em',
          letterSpacing:'0.000em'
        }],
        'b3': ['1.000em',{
          lineHeight:'1.000em',
          letterSpacing:'0.000em'
        }],
        'b4': ['1.000em',{
          lineHeight:'1.000em',
          letterSpacing:'0.000em'
        }],
        'l1': ['0.875em',{
          lineHeight:'1.000em',
          letterSpacing:'0.088em'
        }],
        'l2': ['0.750em',{
          lineHeight:'1.000em',
          letterSpacing:'0.075em'
        }],
        'l3': ['0.500em',{
          lineHeight:'1.000em',
          letterSpacing:'0.050em'
        }],
        'c1': ['1.125em',{
          lineHeight:'1.000em',
          letterSpacing:'0.000em'
        }],
        'c2': ['1.125em',{
          lineHeight:'1.000em',
          letterSpacing:'0.000em'
        }],
      },
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
          10: '#EEEEE',
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
        Neptune : {
          50: '#0166FF',
        },
        Earth : {
          50: '#008CFF',
        },
        Uranus : {
          50: '#25C2FF',
        },
        Mercury : {
          50: '#181824',
        },
        Charcoal:{
          10:'#F6F6FC',
          40:'#9C9CAE',
          60: '#676767',
          80: '#3F3F57',
        },
        Venus : {
          50: '#F9F7FC',
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
        "ab-bg": 'url("/about_us/bg-charcoal.svg")',
        "product": 'url("/home/BG.jpg")',
        "product-bg": 'url("/home/graph-up.png")',
        "pattern": "url('/pattern.png')",
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