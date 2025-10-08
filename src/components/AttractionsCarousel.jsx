import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Stack,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import merlion from "@/assets/merlion.jpg";
import sentosaBeach from "@/assets/sentosa-beach.jpg";
import botanicGardens from "@/assets/botanic-gardens.jpg";
import littleIndia from "@/assets/little-india.jpg";

const attractions = [
  {
    image: merlion,
    title: "Merlion Park",
    category: "Iconic Landmark",
    description: "Singapore's most famous symbol and must-visit destination",
    location: "Marina Bay",
  },
  {
    image: sentosaBeach,
    title: "Sentosa Island",
    category: "Beach Paradise",
    description: "Tropical escape with pristine beaches and entertainment",
    location: "Sentosa",
  },
  {
    image: botanicGardens,
    title: "Botanic Gardens",
    category: "Nature & Wellness",
    description: "UNESCO World Heritage Site with stunning flora",
    location: "Bukit Timah",
  },
  {
    image: littleIndia,
    title: "Little India",
    category: "Cultural District",
    description: "Vibrant neighborhood rich in culture and tradition",
    location: "Central Singapore",
  },
];

export const AttractionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const nextAttraction = () => {
    setCurrentIndex((prev) => (prev + 1) % attractions.length);
  };

  const prevAttraction = () => {
    setCurrentIndex((prev) => (prev - 1 + attractions.length) % attractions.length);
  };

  const itemsPerView = isMobile ? 1 : 3;

  return (
    <Box 
      id="attractions" 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: 'grey.50',
      }}
    >
      <Container maxWidth="xl">
        <Stack alignItems="center" spacing={3} sx={{ mb: 8, textAlign: 'center' }}>
          <Chip
            label="DISCOVER"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              fontWeight: 'bold',
              px: 2,
              py: 0.5,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Top Attractions
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: '600px',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            Explore Singapore's most beloved destinations and create unforgettable memories
          </Typography>
        </Stack>

        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {attractions.slice(currentIndex, currentIndex + itemsPerView).map((attraction, index) => (
              <Grid item xs={12} md={4} key={currentIndex + index}>
                <Card
                  sx={{
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 60px -15px rgba(225, 29, 72, 0.3)',
                      '& .attraction-image': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: 320, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={attraction.image}
                      alt={attraction.title}
                      className="attraction-image"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                      }}
                    />
                    
                    <CardContent
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        color: 'white',
                        p: 3,
                      }}
                    >
                      <Stack spacing={2}>
                        <Chip
                          label={attraction.category}
                          size="small"
                          sx={{
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            fontWeight: 'bold',
                            width: 'fit-content',
                          }}
                        />
                        <Typography variant="h4" sx={{ fontWeight: 900 }}>
                          {attraction.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {attraction.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            color: 'white',
                            borderColor: 'white',
                            width: 'fit-content',
                            '&:hover': {
                              borderColor: 'white',
                              backgroundColor: 'rgba(255,255,255,0.1)',
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Stack>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Navigation Buttons - Moved inside container with proper positioning */}
          {!isMobile && (
            <>
              <IconButton
                onClick={prevAttraction}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  zIndex: 2,
                  '&:hover': {
                    backgroundColor: 'grey.50',
                  },
                }}
              >
                <ChevronLeft size={24} />
              </IconButton>
              <IconButton
                onClick={nextAttraction}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  zIndex: 2,
                  '&:hover': {
                    backgroundColor: 'grey.50',
                  },
                }}
              >
                <ChevronRight size={24} />
              </IconButton>
            </>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <IconButton
                onClick={prevAttraction}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ChevronLeft size={20} />
              </IconButton>
              <IconButton
                onClick={nextAttraction}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ChevronRight size={20} />
              </IconButton>
            </Stack>
          )}
        </Box>

        {/* Dots Indicator */}
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 4 }}>
          {Array.from({ length: Math.ceil(attractions.length / itemsPerView) }).map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              sx={{
                minWidth: index === Math.floor(currentIndex / itemsPerView) ? 32 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: index === Math.floor(currentIndex / itemsPerView) ? 'primary.main' : 'grey.300',
                transition: 'all 0.3s ease',
                p: 0,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
