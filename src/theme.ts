import { createTheme } from "@mui/material";

export default createTheme({
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: {
      fontFamily: "'Libre Baskerville', serif"
    },
    h2: {
      fontFamily: "'Libre Baskerville', serif"
    },
    h3: {
      fontFamily: "'Libre Baskerville', serif"
    },
    h4: {
      fontFamily: "'Libre Baskerville', serif"
    },
    h5: {
      fontFamily: "'Libre Baskerville', serif"
    },
    h6: {
      fontFamily: "'Libre Baskerville', serif"
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 300
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: 'h3',
          subtitle2: 'h4',
        },
      },
    },
  },
  shape: {
    borderRadius: 8
  }
})