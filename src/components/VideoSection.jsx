import { Play, ExternalLink } from "lucide-react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Grid,
  Chip,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const videoData = [
  {
    id: "singapore-tourism-2024",
    title: "Singapore Tourism 2024",
    description: "Experience the beauty and diversity of Singapore in this stunning tourism video",
    thumbnail: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual tourism video
    duration: "3:45",
    views: "2.5M",
  },
  {
    id: "marina-bay-experience",
    title: "Marina Bay Experience",
    description: "Discover the iconic Marina Bay and its world-class attractions",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "4:12",
    views: "1.8M",
  },
  {
    id: "singapore-food-culture",
    title: "Singapore Food Culture",
    description: "Explore the rich culinary heritage and hawker center culture",
    thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "5:30",
    views: "3.2M",
  },
];

export const VideoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleVideoPlay = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Stack alignItems="center" spacing={3} sx={{ mb: 8, textAlign: 'center' }}>
          <Chip
            label="WATCH & EXPLORE"
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
            Discover Singapore
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: '600px',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            Watch our curated collection of videos showcasing Singapore's beauty, culture, and attractions
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {videoData.map((video, index) => (
            <Grid item xs={12} md={4} key={video.id}>
              <Card
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 3,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px -8px rgba(225, 29, 72, 0.2)',
                    '& .video-thumbnail': {
                      transform: 'scale(1.02)',
                    },
                    '& .play-button': {
                      transform: 'translate(-50%, -50%) scale(1.05)',
                      backgroundColor: 'primary.dark',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 250, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
                      transition: 'all 0.3s ease',
                    }}
                    className="video-overlay"
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(225, 29, 72, 0.1)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '.MuiCard-root:hover &': {
                        opacity: 1,
                      },
                    }}
                  />
                  
                  {/* Play Button */}
                  <IconButton
                    className="play-button"
                    onClick={() => handleVideoPlay(video.videoUrl)}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: 'rgba(225, 29, 72, 0.9)',
                      color: 'white',
                      width: 80,
                      height: 80,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        transform: 'translate(-50%, -50%) scale(1.05)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                      },
                      '&:active': {
                        transform: 'translate(-50%, -50%) scale(0.98)',
                      },
                    }}
                  >
                    <Play size={36} fill="currentColor" />
                  </IconButton>

                  {/* Video Duration */}
                  <Chip
                    label={video.duration}
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      right: 12,
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {video.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {video.description}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {video.views} views
                      </Typography>
                      <Button
                        variant="text"
                        size="small"
                        endIcon={<ExternalLink size={16} />}
                        onClick={() => handleVideoPlay(video.videoUrl)}
                        sx={{
                          color: 'primary.main',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      >
                        Watch Now
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ExternalLink size={20} />}
            href="https://www.youtube.com/c/VisitSingapore"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.125rem',
              borderColor: 'primary.main',
              color: 'primary.main',
              fontWeight: 600,
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'translateY(-2px)',
              },
            }}
          >
            View All Videos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
