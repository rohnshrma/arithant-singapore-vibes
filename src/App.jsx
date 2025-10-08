import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Index from "./pages/Index";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { 
      main: "#e11d48", 
      light: "#f43f5e", 
      dark: "#be123c" 
    },
    secondary: { 
      main: "#059669", 
      light: "#10b981", 
      dark: "#047857" 
    },
    background: { 
      default: "#ffffff",
      paper: "#fafafa"
    },
    text: { 
      primary: "#1f2937", 
      secondary: "#6b7280" 
    },
    grey: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4.5rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
        },
        sizeLarge: {
          padding: '12px 32px',
          fontSize: '1.125rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 20px 60px -15px rgba(225, 29, 72, 0.3)',
          },
        },
      },
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Index />
  </ThemeProvider>
);

export default App;
