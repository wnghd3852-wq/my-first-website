import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1E5A6E',
      light: '#2A7A8E',
      dark: '#0D3A4A',
    },
    secondary: {
      main: '#7EC8D4',
      light: '#9DD8E4',
      dark: '#5AB4C2',
    },
    background: {
      default: '#0D3A4A',
      paper: '#1E5A6E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8D4DC',
      disabled: '#8AACB8',
    },
  },
  typography: {
    fontFamily: "'Pretendard', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      color: '#B8D4DC',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#8AACB8',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
        },
        contained: {
          backgroundColor: '#7EC8D4',
          color: '#0D2A34',
          '&:hover': {
            backgroundColor: '#5AB4C2',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(13, 58, 74, 0.3)',
          },
        },
        outlined: {
          borderColor: '#7EC8D4',
          color: '#7EC8D4',
          '&:hover': {
            borderColor: '#9DD8E4',
            backgroundColor: 'rgba(126, 200, 212, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E5A6E',
          borderRadius: 12,
          border: '1px solid #1A4A5A',
          boxShadow: '0 8px 32px rgba(13, 58, 74, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0D3A4A',
          boxShadow: '0 2px 8px rgba(13, 58, 74, 0.5)',
        },
      },
    },
  },
});

export default theme;
