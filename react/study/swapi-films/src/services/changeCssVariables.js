export const changeCssVariable = theme => {
  const root = document.querySelector(':root')

  // root.style.setProperty('--theme-default-elem', `var(--theme-${theme}-elem)`)
  // root.style.setProperty('--theme-default-bg', `var(--theme-${theme}-bg)`)

  const cssVariables = ['elem', 'bg']

  cssVariables.forEach(element => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    )
  })
}