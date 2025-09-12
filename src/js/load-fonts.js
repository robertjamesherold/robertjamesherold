/*          js/load-fonts.js                */
function loadFonts () {
  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded')
    return 
  } 

  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('1em Mystery Quest'),
      document.fonts.load('1em Yrsa'),
      document.fonts.load('700 1em Yrsa'),
      document.fonts.load('500 1em Yrsa'),
      document.fonts.load('600 1em Yrsa'),
      document.fonts.load('800 1em Yrsa'),
    ]).then(() => {
      document.documentElement.classList.add('fonts-loaded')
      sessionStorage.fontsLoaded = true
    })
  }
}

loadFonts()