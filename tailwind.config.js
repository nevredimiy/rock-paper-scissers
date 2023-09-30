/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      rotate: {
        '150': '150deg',
        '270': '270deg',
      },
      colors: {
        'bg-gradient-from': 'hsl(214, 47%, 23%)',
        'bg-gradient-to': 'hsl(237, 49%, 15%)',
        'scissors-from': 'hsl(39, 89%, 49%)',
        'scissors-to': 'hsl(40, 84%, 53%)',
        'paper-from': 'hsl(230, 89%, 62%)',
        'paper-to': 'hsl(230, 89%, 65%)',
        'rock-from': 'hsl(349, 71%, 52%)',
        'rock-to': 'hsl(349, 70%, 56%)',
        'lizard-from': 'hsl(261, 73%, 60%)',
        'lizard-to': 'hsl(261, 72%, 63%)',
        'cyan-from': 'hsl(189, 59%, 53%)',
        'cyan-to': 'hsl(189, 58%, 57%)',
        'primary': 'hsl(229, 25%, 31%)',
        'score': 'hsl(229, 25%, 31%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'triangle': "url('./inc/images/bg-triangle.svg')",
      },
    },
  },
  plugins: [],
}

