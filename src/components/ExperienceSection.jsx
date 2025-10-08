import { Sparkles, MapPin, Calendar, Heart } from "lucide-react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Container,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const experiences = [
  {
    icon: Sparkles,
    title: "Unique Experiences",
    description: "From rooftop bars to night safaris, discover activities you won't find anywhere else",
  },
  {
    icon: MapPin,
    title: "Diverse Neighborhoods",
    description: "Each district tells its own story - from colonial charm to modern innovation",
  },
  {
    icon: Calendar,
    title: "Year-Round Events",
    description: "Festivals, cultural celebrations, and world-class entertainment all year",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    description: "Experience the genuine warmth and friendliness of Singapore's multicultural society",
  },
];

export const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, backgroundColor: 'grey.50' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Stack alignItems="center" spacing={3} sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Chip
            label="WHY VISIT"
            sx={{
              backgroundColor: 'secondary.main',
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
            Unforgettable Singapore
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: '600px',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            A destination where East meets West, tradition meets innovation
          </Typography>
        </Stack>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ maxWidth: 1200, justifyContent: 'center', alignItems: 'stretch' }}>
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Grid item xs={12} sm={6} md={3} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                <Card
                  sx={{
                    height: '100%',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '400px', md: '100%' },
                    textAlign: 'center',
                    border: 2,
                    borderColor: 'transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 60px -15px rgba(225, 29, 72, 0.3)',
                      borderColor: 'primary.main',
                      '& .experience-icon': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ pt: 6, pb: 4, px: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Stack alignItems="center" spacing={3}>
                      <Box
                        className="experience-icon"
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          borderRadius: '50%',
                          transition: 'all 0.3s ease',
                          mb: 2,
                        }}
                      >
                        <Icon size={32} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
                        {experience.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                        {experience.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
