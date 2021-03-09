import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: '#141518',
      appContentBg: '#141518',
      barBg: '#141518'
    },
    // Override the default light theme
    light: { ...themes.normal }
  }
};
