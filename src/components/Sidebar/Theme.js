export const themes = {
  dark: {
    sidebarBackgroundDefault: '#202127',
    sidebarBackgroundHover: '#2D2E34',
    sidebarBackgroundActive: '#393A3F',
    textDefault: '#f0f2ff',
    textHover: '#f0f2ff',
    textActive: '#f0f2ff',
    textLogoDefault: '#3B82F6',
    buttonBackgroundDefault: '#202127',
    buttonBackgroundActive: '#4B5966'
  },

  light: {
    sidebarBackgroundDefault: '#fff',
    sidebarBackgroundHover: '#f0f2ff',
    sidebarBackgroundActive: '#f0f2ff',
    textDefault: '#97a5b9',
    textHover: '#091b31',
    textActive: '#0000b5',
    textLogoDefault: '#0000b5',
    buttonBackgroundDefault: '#fff',
    buttonBackgroundActive: '#e2e8f0'
  }
};


export const getTheme = (themeName) => {
  return themes[themeName] || themes.light;
};