export function toggleTheme() {
  if (localStorage.theme === 'dark') {
    lightTheme()
  } else {
    darkTheme()
  }
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