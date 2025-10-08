import { useState } from "react";
import { Menu, Search, Globe, X } from "lucide-react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Collapse,
  useTheme,
  useMediaQuery,
  Avatar,
  Container,
} from "@mui/material";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: "What's Happening", path: "#", key: "whats-happening" },
    { label: "Neighbourhoods", path: "#", key: "neighbourhoods" },
    { label: "Things To Do", path: "#", key: "things-to-do" },
    { label: "Food & Drink", path: "#", key: "food-drink" },
    { label: "Travel Tips", path: "#", key: "travel-tips" },
  ];

  return (
    <AppBar 
      position="absolute" 
      elevation={0}
      sx={{ 
        backgroundColor: 'transparent',
        zIndex: 1300,
        top: 0,
        left: 0,
        right: 0,
        py: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: 80, justifyContent: 'space-between', px: { xs: 3, md: 2 }, py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: { xs: 1, md: 0 } }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      backgroundColor: 'primary.main',
                      fontWeight: 'bold',
                      fontSize: '1.25rem'
                    }}
                  >
                    SG
                  </Avatar>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { xs: '1.125rem', sm: '1.25rem' },
                  display: { xs: 'none', sm: 'block' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Visit Singapore
              </Typography>
            </a>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack 
              direction="row" 
              spacing={4} 
              sx={{ 
                flex: 1, 
                justifyContent: 'center',
                maxWidth: 600
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.path}
                  style={{
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                    minWidth: 'auto',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {item.label}
                </a>
              ))}
            </Stack>
          )}

          {/* Right side actions */}
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {!isMobile && (
              <>
                <IconButton 
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Search size={22} />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Globe size={22} />
                </IconButton>
              </>
            )}
            {isMobile && (
              <IconButton
                onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  },
                }}
              >
                {open ? <X size={26} /> : <Menu size={26} />}
              </IconButton>
            )}
          </Stack>
        </Toolbar>

        {/* Mobile Navigation */}
        <Collapse in={open && isMobile}>
          <Box sx={{ 
            backgroundColor: 'transparent'
          }}>
            <Stack spacing={0} sx={{ p: 4 }}>
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  style={{
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    padding: '16px 24px',
                    justifyContent: 'flex-start',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    textDecoration: 'none',
                    display: 'block',
                    width: '100%',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </AppBar>
  );
};
