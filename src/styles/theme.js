import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1b66c9', 
      light: '#ffffff',     
      dark: '#202124',
      overlay: '#9dc0f9'   
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    common: {
      black: '#202020',
      gray: '#5f6368',
      blue: '#1a73e8'
    },
  },
  typography: {
    fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
    button: {
      fontSize: '0.9rem',
      letterSpacing: '0.0107142857em',
      fontWeight: 500,
      textTransform: 'none',
    }
  },
  
  shape: {
    borderRadius: 30,
    border: '1px solid #dadce0',
  },
  zIndex: {
    drawer: 100,
    backdrop: 99,
    barButton: 100
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px'
          }
        }
      }
    },
    MuiSelect: {
        styleOverrides: {
          root: {
            minWidth: 120,
            height: "40px",
            borderRadius: 0.3,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              backgroundColor: 'rgba(145, 158, 171, 0.15)'  // ${theme.palette.common.gray}15
            },
            '&.Mui-focused': {
              borderBottom: '2px solid #2065D1',  // ${theme.palette.primary.main}
              borderRadius: '8px 8px 0px 0px',
              backgroundColor: 'rgba(32, 101, 209, 0.1)'  // ${theme.palette.primary.main}20
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          }
        }
      }
  }
});