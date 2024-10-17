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
        'he0': ['6.250rem',{
          lineHeight:'1.120rem',
          letterSpacing:'0.063rem'
        }],
        'he1': ['4.750rem',{
          lineHeight:'1.105rem',
          letterSpacing:'0.048rem'
        }],
        'he2': ['4.000rem',{
          lineHeight:'1.125rem',
          letterSpacing:'0.040rem'
        }],
        'h1': ['3.125rem',{
          lineHeight:'1.120rem',
          letterSpacing:'0.031rem'
        }],
        'h2': ['2.500rem',{
          lineHeight:'1.100rem',
          letterSpacing:'0.025rem'
        }],
        'h3': ['2.000rem',{
          lineHeight:'1.125rem',
          letterSpacing:'0.000rem'
        }],
        'h4': ['1.375rem',{
          lineHeight:'1.182rem',
          letterSpacing:'0.000rem'
        }],
        'h6': ['1.250rem',{
          lineHeight:'1.200rem',
          letterSpacing:'0.000rem'
        }],
        'te1': ['1.125rem',{
          lineHeight:'1.333rem',
          letterSpacing:'0.000rem'
        }],
        'te2': ['1.125rem',{
          lineHeight:'1.333rem',
          letterSpacing:'0.000rem'
        }],
         'te3': ['0.875rem',{
          lineHeight:'1.286rem',
          letterSpacing:'0.000rem'
        }],
        'te4': ['0.750rem',{
          lineHeight:'1.333rem',
          letterSpacing:'0.000rem'
        }],
        't1': ['1.125rem',{
          lineHeight:'1.333rem',
          letterSpacing:'0.000rem'
        }],
        't2': ['1.000rem',{
          lineHeight:'1.250rem',
          letterSpacing:'0.000rem'
        }],
        't3': ['0.875rem',{
          lineHeight:'1.286rem',
          letterSpacing:'0.000rem'
        }],
        't4': ['0.750rem',{
          lineHeight:'1.333rem',
          letterSpacing:'0.000rem'
        }],
        'b1': ['1.250rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.000rem'
        }],
        'b2': ['1.125rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.000rem'
        }],
        'b3': ['1.000rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.000rem'
        }],
        'b4': ['1.000rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.000rem'
        }],
        'l1': ['0.875rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.088rem'
        }],
        'l2': ['0.750rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.075rem'
        }],
        'l3': ['0.500rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.050rem'
        }],
        'c1': ['1.125rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.000rem'
        }],
        'c2': ['1.125rem',{
          lineHeight:'1.000rem',
          letterSpacing:'0.000rem'
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