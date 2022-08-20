const inputContainer = document.querySelector('input');

const rootElement = document.documentElement;

window.onload = function () {
  getThemeFromLocalStorage()
}


const lightMode = {
  "--background-color": "hsl(185, 75%, 39%)",
  "--card-background": "#fff",
  "--text-color": "#000000",
}

const darkMode = {
  "--background-color": "#1C1C1C",
  "--card-background": "#4F4F4F",
  "--text-color": "#fff",
}

inputContainer.addEventListener('change', function() {
  const isChecked = inputContainer.checked
  if(isChecked) {
    changeTheme(darkMode)
  } else {
    changeTheme(lightMode)
  }
})

function changeTheme(theme) {
  for(let prop in theme) {
    changeProperty(prop, theme[prop])
  }
  saveThemeLocalStorage(theme)
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value)
}

function saveThemeLocalStorage(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
}

function getThemeFromLocalStorage() {
  const theme = JSON.parse(localStorage.getItem('theme'))//JSON.parse, converte para objeto
  if(isThemeEqual(theme, darkMode)) inputContainer.checked = true
  changeTheme(theme)
}

function isThemeEqual (firstTheme, secondTheme) {
  for(let prop in firstTheme) {
    if (firstTheme[prop] != secondTheme[prop]) return false 
  }
  return true
}


///////

const year = document.getElementById('current-year')

year.innerHTML = new Date().getFullYear()
