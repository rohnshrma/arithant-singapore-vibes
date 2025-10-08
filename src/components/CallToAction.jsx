import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  useTheme,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import heroGardens from "@/assets/hero-gardens.jpg";

export const CallToAction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 12, md: 16 },
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        image={heroGardens}
        alt="Visit Singapore"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.9) 0%, rgba(5, 150, 105, 0.9) 100%)',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" spacing={4} sx={{ textAlign: 'center', color: 'white' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 900,
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Start Your Singapore Adventure
          </Typography>
          
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              maxWidth: '800px',
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Plan your perfect trip with our comprehensive travel guides, tips, and insider recommendations
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3}
            sx={{ pt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.125rem',
                backgroundColor: 'white',
                color: 'primary.main',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'grey.50',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Plan Your Trip
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.125rem',
                color: 'white',
                borderColor: 'white',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Download Guide
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
