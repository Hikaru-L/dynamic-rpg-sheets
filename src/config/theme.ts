import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontWeight: 400,
      fontSize: 34,
      lineHeight: "40px",
    },
    h2: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "32px",
      letterSpacing: 0.18,
    },
    h3: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "24px",
    },
    h4: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "28px",
      letterSpacing: 0.15,
    },
    h5: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "24px",
    },
    h6: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      letterSpacing: 0.1,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: 0.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: 0.25,
    },
    button: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "16px",
      letterSpacing: 1.25,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: 0.4,
    },
    overline: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: 1.4,
    },
  },
  palette: {
    primary: {
      main: '#315c4a',
    }
  }
});
