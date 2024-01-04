/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'public/*.html',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#101010',
      'secondary': '#fff',
    },
    fontFamily: {
      'sans': ['"Nohemi"'],
      'mono': ['IBM Plex Mono, monospace'],
    },
    fontSize: {
      bsm: ['11px', '16px'],
      bmd: ['12px', '16px'],
      blg: ['16px', '28px'],
      lsm: ['11px', '16px'],
      lmd: ['12px', '16px'],
      llg: ['14px', '20px'],
      tsm: ['14px', '20px'],
      tmd: ['16px', '24px'],
      tlg: ['22px', '28px'],
      hsm: ['24px', '32px'],
      hmd: ['28px', '36px'],
      hlg: ['32px', '40px'],
      dsm: ['64px', '64px'],
      dmd: ['96px', '96px'],
      dlg: ['124px', '124px'],
      fsm: ['19vw', '18vw'],
      fmd: ['15vw', '14vw'],
      flg: ['16.5vw', '15vw'],
      xxl: [''],
    },
    extend: {

    },
  },
  plugins: [],
}

