export const changeCssVariable = theme => {
  const root = document.querySelector(':root')

  const cssVariables = ['text', 'bg', 'home', 'button', 'page', 'search', 'post', 'time', 'hover', 'slider', 'info']

  cssVariables.forEach(element => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    )
  })
}