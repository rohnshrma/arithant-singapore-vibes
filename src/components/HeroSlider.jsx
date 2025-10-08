import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Play } from "lucide-react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Container,
  Fade,
  keyframes,
} from "@mui/material";
import heroMarina from "@/assets/hero-marina-bay.jpg";
import heroGardens from "@/assets/hero-gardens.jpg";
import heroChinatown from "@/assets/hero-chinatown.jpg";

const slides = [
  {
    title: "MARINA BAY SANDS",
    subtitle: "Iconic Skyline",
    description: "Experience Singapore's most iconic waterfront destination.",
    videoUrl: "https://videos.pexels.com/video-files/14372137/14372137-uhd_2560_1440_25fps.mp4",
    backupVideoUrl: "https://videos.pexels.com/video-files/14372137/14372137-uhd_2560_1440_25fps.mp4",
    highlights: ["SkyPark", "Shopping", "Dining"],
  },
  {
    title: "DOWNTOWN SINGAPORE",
    subtitle: "Urban Marvel",
    description: "Discover the stunning architecture of Singapore's downtown.",
    videoUrl: "https://videos.pexels.com/video-files/14372139/14372139-uhd_2560_1440_25fps.mp4",
    backupVideoUrl: "https://videos.pexels.com/video-files/14372139/14372139-uhd_2560_1440_25fps.mp4",
    highlights: ["Skyline", "Architecture", "City Life"],
  },
  {
    title: "SINGAPORE SKYLINE",
    subtitle: "Modern Metropolis",
    description: "Explore Singapore's impressive tall buildings and urban landscape.",
    videoUrl: "https://videos.pexels.com/video-files/14371863/14371863-uhd_2560_1440_25fps.mp4",
    backupVideoUrl: "https://videos.pexels.com/video-files/14371863/14371863-uhd_2560_1440_25fps.mp4",
    highlights: ["Tall Buildings", "Urban Views", "Modern City"],
  },
];

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToAttractions = () => {
    document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const playVideo = (videoUrl) => {
    // Open Pexels video in new tab
    window.open(videoUrl, '_blank');
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <Fade key={index} in={index === currentSlide} timeout={1000}>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            {/* Video Background */}
            <Box
              component="video"
              autoPlay
              muted
              loop
              playsInline
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '177.77777778vh', // 16:9 aspect ratio
                height: '56.25vw', // 16:9 aspect ratio
                minWidth: '100%',
                minHeight: '100%',
                transform: 'translate(-50%, -50%)',
                objectFit: 'cover',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            >
              <source src={slide.videoUrl} type="video/mp4" />
              <source src={slide.backupVideoUrl} type="video/mp4" />
            </Box>
            
            {/* Fallback Image (for browsers that don't support video) */}
            <Box
              component="img"
              src={index === 0 ? heroMarina : index === 1 ? heroGardens : heroChinatown}
              alt={slide.title}
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
              }}
            />
            
            {/* Enhanced Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)',
                zIndex: 2,
              }}
            />
            
            <Container maxWidth="lg" sx={{ position: 'relative', height: '100%', zIndex: 3 }}>
              <Stack
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                spacing={4}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  color: 'white',
                  px: 2,
                  py: 8,
                }}
              >
                {/* Subtitle */}
                <Typography
                  variant="h6"
                  sx={{
                    color: 'secondary.light',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    textShadow: '0 3px 12px rgba(0,0,0,0.8)',
                    animation: `${fadeInUp} 0.8s ease-out`,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                  }}
                >
                  {slide.subtitle}
                </Typography>
                
                {/* Main Title */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem', lg: '7.5rem' },
                    fontWeight: 900,
                    lineHeight: 0.85,
                    letterSpacing: '-0.02em',
                    color: 'white',
                    textShadow: '0 6px 20px rgba(0,0,0,0.9)',
                    animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
                  }}
                >
                  {slide.title}
                </Typography>
                
                {/* Description */}
                <Typography
                  variant="h6"
                  sx={{
                    maxWidth: { xs: '90%', md: '600px' },
                    lineHeight: 1.6,
                    color: 'white',
                    textShadow: '0 3px 12px rgba(0,0,0,0.8)',
                    animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
                    fontSize: { xs: '1.125rem', md: '1.375rem' },
                    fontWeight: 500,
                  }}
                >
                  {slide.description}
                </Typography>

                {/* Highlights */}
                <Stack 
                  direction="row" 
                  spacing={2} 
                  sx={{ 
                    animation: `${fadeInUp} 0.8s ease-out 0.5s both`,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 1.5,
                  }}
                >
                  {slide.highlights.map((highlight, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        px: 3,
                        py: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        borderRadius: 3,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                        '&:hover': {
                          backgroundColor: 'rgba(225, 29, 72, 0.9)',
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {highlight}
                    </Box>
                  ))}
                </Stack>
                
                {/* Action Buttons */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3} 
                  sx={{ 
                    animation: `${fadeInUp} 0.8s ease-out 0.6s both`,
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 6,
                      py: 2.5,
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      backgroundColor: 'primary.main',
                      borderRadius: 4,
                      textTransform: 'none',
                      color: 'white',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.4)',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Explore
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Play size={20} />}
                    onClick={() => playVideo(slide.videoUrl)}
                    sx={{
                      px: 6,
                      py: 2.5,
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'white',
                      borderColor: 'white',
                      borderRadius: 4,
                      textTransform: 'none',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      borderWidth: '2px',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.4)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Watch
                  </Button>
                </Stack>
              </Stack>
            </Container>

            <IconButton
              onClick={scrollToAttractions}
              sx={{
                position: 'absolute',
                bottom: 32,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                animation: `${bounce} 2s infinite`,
              }}
            >
              <ChevronDown size={32} />
            </IconButton>
          </Box>
        </Fade>
      ))}

      {/* Navigation Arrows */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          position: 'absolute',
          inset: 0,
          px: 2,
          pointerEvents: 'none',
        }}
      >
        <IconButton
          onClick={prevSlide}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)',
            },
            pointerEvents: 'auto',
            width: 48,
            height: 48,
          }}
        >
          <ChevronLeft size={24} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)',
            },
            pointerEvents: 'auto',
            width: 48,
            height: 48,
          }}
        >
          <ChevronRight size={24} />
        </IconButton>
      </Stack>

      {/* Dots Indicator */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              minWidth: index === currentSlide ? 32 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
              transition: 'all 0.3s ease',
              p: 0,
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};
