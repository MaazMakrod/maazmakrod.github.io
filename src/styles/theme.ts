import { BREAKPOINTS } from "./helpers";

export const COLORS = {
    white: '#fff',
    black: '#000',
    primary: '#2d3250',
    secondary: '#424769',
    tertiary: '#859dff',
    quaternary: '#7077a1',
    quinary: '#a0afff',
    accent: '#f6b17a',
    background: '#546e9d',
}

export const NAVIGATION_HEIGHT = '75px';
export const FOOTER_HEIGHT = '55px';
export const CONTENT_WIDTH = 'min(95vw, 1600px)';
export const CONTENT_HEIGHT = `calc(100vh - ${FOOTER_HEIGHT} - ${NAVIGATION_HEIGHT})`;

export const FONT = `"Raleway", "sans-serif"`;

export const FONT_TYPES = {
    h1: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "2rem",
        [BREAKPOINTS.MEDIUM]: "2.5rem",
        [BREAKPOINTS.LARGE]: "3rem",
      },
    },
    h2: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "1.5625rem",
        [BREAKPOINTS.MEDIUM]: "1.75rem",
        [BREAKPOINTS.LARGE]: "2rem",
      },
    },
    h3: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "1.25rem",
        [BREAKPOINTS.MEDIUM]: "1.375rem",
        [BREAKPOINTS.LARGE]: "1.5625rem",
      },
    },
    h4: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "1rem",
        [BREAKPOINTS.MEDIUM]: "1.125rem",
        [BREAKPOINTS.LARGE]: "1.25rem",
      },
    },
    h5: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "0.75rem",
        [BREAKPOINTS.MEDIUM]: "0.825rem",
        [BREAKPOINTS.LARGE]: "1rem",
      },
    },
    h6: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "0.5rem",
        [BREAKPOINTS.MEDIUM]: "0.625rem",
        [BREAKPOINTS.LARGE]: "0.75rem",
      },
    },
    p: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "0.875rem",
        [BREAKPOINTS.LARGE]: "1rem",
      },
    },
    pLarge: {
      "font-size": {
        [BREAKPOINTS.DEFAULT]: "1rem",
        [BREAKPOINTS.LARGE]: "1.25rem",
      },
    },
    thin: {
      "font-weight": {
        [BREAKPOINTS.DEFAULT]: "100",
      },
    },
    regular: {
      "font-weight": {
        [BREAKPOINTS.DEFAULT]: "300",
      },
    },
    medium: {
      "font-weight": {
        [BREAKPOINTS.DEFAULT]: "500",
      },
    },
    bold: {
      "font-weight": {
        [BREAKPOINTS.DEFAULT]: "700",
      },
    },
};