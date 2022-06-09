const changeCssVariable = theme => {
  const root = document.querySelector(':root')

  root.style.setProperty('--theme-default', `--theme-${theme}`)
}