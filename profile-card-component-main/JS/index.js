const inputContainer = document.querySelector('input');

const rootElement = document.documentElement;

const lightMode = {
  "--dark-cyan": "hsl(185, 75%, 39%)",
  "--card-background": "#fff",
  "--text-color": "#000000",
}

const darkMode = {
  "--dark-cyan": "#1C1C1C",
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
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value)
}
