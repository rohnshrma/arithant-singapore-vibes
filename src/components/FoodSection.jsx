import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import foodHawker from "@/assets/food-hawker.jpg";

const foodFeatures = [
  {
    color: "primary.main",
    text: "UNESCO-recognized hawker culture",
  },
  {
    color: "secondary.main",
    text: "Over 50 Michelin-starred establishments",
  },
  {
    color: "#f59e0b",
    text: "Diverse Asian and international cuisines",
  },
];

export const FoodSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Stack spacing={4}>
              <Chip
                label="CULINARY JOURNEY"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 'bold',
                  width: 'fit-content',
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
                A Food Paradise
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                From Michelin-starred restaurants to vibrant hawker centers, Singapore offers 
                an incredible diversity of flavors. Experience authentic local dishes like 
                Hainanese chicken rice, laksa, and satay, or explore international cuisines 
                from around the world.
              </Typography>
              
              <Stack spacing={2}>
                {foodFeatures.map((feature, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: feature.color,
                      }}
                    />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {feature.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ pt: 2 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.125rem',
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Explore Food Guide
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.125rem',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  Hawker Centers
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  '& .food-image': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                image={foodHawker}
                alt="Singapore Food"
                className="food-image"
                sx={{
                  width: '100%',
                  height: 500,
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
