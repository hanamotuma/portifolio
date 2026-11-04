/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#101114',
        surface: '#191B20',
        accent: '#D82035',
        text: '#F2F0ED',
        muted: '#8A8D94',
        border: '#26292F'
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      maxWidth: { content: '1400px' },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem'
      },
      transitionDuration: { DEFAULT: '200ms' }
    }
  },
  plugins: []
}