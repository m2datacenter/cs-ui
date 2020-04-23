export const COLORS = {
  default: {
    dark: '#0E0E0F',
    light: '#E2E2E2',
    main: '#5c677d',
  },
  error: {
    dark: '#d32f2f',
    light: '#e57373',
    main: '#f44336',
  },
  info: {
    dark: '#1976d2',
    light: '#64b5f6',
    main: '#2196f3',
  },
  primary: {
    dark: '#054A91',
    light: '#79A6DC',
    main: '#0069B7',
  },
  secundary: {
    dark: '#9a0036',
    light: '#e33371',
    main: '#C61313',
  },
  success: {
    dark: '#388e3c',
    light: '#81c784',
    main: '#00C95E',
  },
  warning: {
    dark: '#f57c00',
    light: '#ffb74d',
    main: '#ff9800',
  },
};

export const HTML = {
  backGroundColor: '#ffffff',
};

function createTheme({ colors = COLORS, html = HTML }) {
  return {
    palette: colors,
    html: {
      backGroundColor: html.backGroundColor,
    },
    input: {
      color: colors.default.main,
      assistiveText: {
        errorColor: colors.error.dark,
        infoColor: colors.info.dark,
        size: '11px',
      },
      border: {
        color: 'rgba(0,0,0,0.1)',
        highlight: colors.primary.dark,
      },
      size: '16px',
    },
    label: {
      color: colors.default.main,
      highlight: colors.primary.dark,
      size: '14px',
    },
  };
}

export default createTheme;
