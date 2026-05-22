import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#071a35', aqua: '#11c5d9', cobalt: '#2459ff' }
    }
  },
  plugins: []
};
export default config;
