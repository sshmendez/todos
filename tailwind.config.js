module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "164": "41rem",
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [ 
    /-(leave|enter|appear)(|-(to|from|active))$/, 
    /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ],
    },
  },
}
