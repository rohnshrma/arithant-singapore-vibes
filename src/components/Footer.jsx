import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const planTripLinks = [
  { label: "Things To Do", path: "#", key: "things-to-do" },
  { label: "Where To Stay", path: "#", key: "where-to-stay" },
  { label: "Getting Around", path: "#", key: "getting-around" },
  { label: "Travel Tips", path: "#", key: "travel-tips" },
];

const exploreLinks = [
  { label: "Neighbourhoods", path: "#", key: "neighbourhoods" },
  { label: "Food & Drink", path: "#", key: "food-drink" },
  { label: "Shopping", path: "#", key: "shopping" },
  { label: "Events", path: "#", key: "events" },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={3}>
            <Stack spacing={3}>
              <a 
                href="/" 
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12 
                }}
              >
                <Avatar 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    backgroundColor: 'primary.main',
                    fontWeight: 'bold',
                    fontSize: '1.25rem'
                  }}
                >
                  SG
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  Visit Singapore
                </Typography>
              </a>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                Your gateway to discovering the Lion City's wonders
              </Typography>
            </Stack>
          </Grid>

          {/* Plan Your Trip */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Plan Your Trip
              </Typography>
              {planTripLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Typography>
                </a>
              ))}
            </Stack>
          </Grid>

          {/* Explore */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Explore
              </Typography>
              {exploreLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Typography>
                </a>
              ))}
            </Stack>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Stack spacing={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Connect With Us
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        backgroundColor: 'grey.100',
                        color: 'text.secondary',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Icon size={20} />
                    </IconButton>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 4 }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            &copy; 2025 Visit Singapore. Passion Made Possible.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
