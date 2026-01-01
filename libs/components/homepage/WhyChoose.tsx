import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const WhyChoose = () => {
  const features = [
    {
      title: 'Expert Local Guides',
      description: 'Our experienced local guides provide authentic insights and ensure you experience the real culture.'
    },
    {
      title: 'Customized Itineraries',
      description: 'Tailored travel plans designed specifically for your interests, budget, and schedule.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our dedicated travel coordinators throughout your journey.'
    },
    {
      title: 'Sustainable Tourism',
      description: 'Committed to responsible travel that preserves local communities and environments.'
    }
  ];

  return (
    <Box className="why-choose" sx={{ py: 8, px: 2 }}>
      <Box className="why-choose__container">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid item xs={12} md={6} className="why-choose__left">
            <Box className="why-choose__content">
              <Typography
                variant="h2"
                className="why-choose__title"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  color: '#212121'
                }}
              >
                Why Choose TravelAsia?
              </Typography>

              <Typography
                variant="h5"
                className="why-choose__subtitle"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  color: '#616161',
                  lineHeight: 1.6
                }}
              >
                Discover the world with confidence. We combine local expertise with personalized service to create unforgettable travel experiences.
              </Typography>

              <Box className="why-choose__features">
                {features.map((feature, index) => (
                  <Box key={index} className="why-choose__feature-item" sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <CheckCircleIcon
                      className="why-choose__feature-icon"
                      sx={{ color: '#E92C28', mr: 2, mt: 0.5, fontSize: '1.5rem' }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        className="why-choose__feature-title"
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          mb: 1,
                          color: '#212121'
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="why-choose__feature-description"
                        sx={{
                          fontSize: '0.95rem',
                          color: '#616161',
                          lineHeight: 1.6
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Visual Content */}
          <Grid item xs={12} md={6} className="why-choose__right">
            <Box className="why-choose__visual">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card className="why-choose__card why-choose__card--1" sx={{ height: 200, borderRadius: 2 }}>
                    <CardContent sx={{ p: 0, height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                      <Box sx={{ p: 2, color: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>500+</Typography>
                        <Typography variant="body2">Happy Travelers</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className="why-choose__card why-choose__card--2" sx={{ height: 200, borderRadius: 2 }}>
                    <CardContent sx={{ p: 0, height: '100%', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                      <Box sx={{ p: 2, color: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>25+</Typography>
                        <Typography variant="body2">Countries Served</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card className="why-choose__card why-choose__card--3" sx={{ height: 150, borderRadius: 2 }}>
                    <CardContent sx={{ p: 0, height: '100%', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                      <Box sx={{ p: 3, color: 'white', height: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Award Winning</Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            Recognized for excellence in travel services
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChoose;






