export function toggleTheme() {
  const css = document.createElement('style')
  css.type = 'text/css'
  css.appendChild(
      document.createTextNode(
          `* {
       -webkit-transition: none !important;
       -moz-transition: none !important;
       -o-transition: none !important;
       -ms-transition: none !important;
       transition: none !important;
    }`
      )
  )
  document.head.appendChild(css)
  if (localStorage.theme === 'dark') {
    lightTheme()
  } else {
    darkTheme()
  }
  const _ = window.getComputedStyle(css).opacity
  document.head.removeChild(css)
}

export function lightTheme() {
  document.documentElement.classList.remove('theme-dark')
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
}

export function darkTheme() {
  document.documentElement.classList.add('theme-dark')
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
}