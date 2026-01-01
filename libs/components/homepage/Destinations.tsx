import React from 'react';
import { Box, Stack, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const Destinations = () => {
	const destinations = [
		{
			id: 1,
			name: 'Bali, Indonesia',
			country: 'Indonesia',
			rating: 4.8,
			price: 'From $899',
			image: '/img/destinations/bali.jpg',
			description: 'Tropical paradise with stunning beaches and rich culture.',
			tours: '25+ Tours'
		},
		{
			id: 2,
			name: 'Tokyo, Japan',
			country: 'Japan',
			rating: 4.9,
			price: 'From $1,299',
			image: '/img/destinations/tokyo.jpg',
			description: 'Modern metropolis blending tradition with cutting-edge technology.',
			tours: '18+ Tours'
		},
		{
			id: 3,
			name: 'Paris, France',
			country: 'France',
			rating: 4.7,
			price: 'From $1,099',
			image: '/img/destinations/paris.jpg',
			description: 'The City of Light, romance, and world-class cuisine.',
			tours: '32+ Tours'
		},
		{
			id: 4,
			name: 'Santorini, Greece',
			country: 'Greece',
			rating: 4.6,
			price: 'From $949',
			image: '/img/destinations/santorini.jpg',
			description: 'Breathtaking sunsets and iconic white-washed architecture.',
			tours: '15+ Tours'
		},
		{
			id: 5,
			name: 'Dubai, UAE',
			country: 'UAE',
			rating: 4.5,
			price: 'From $1,199',
			image: '/img/destinations/dubai.jpg',
			description: 'Luxury shopping, desert adventures, and modern marvels.',
			tours: '22+ Tours'
		},
		{
			id: 6,
			name: 'Swiss Alps',
			country: 'Switzerland',
			rating: 4.8,
			price: 'From $1,399',
			image: '/img/destinations/swiss-alps.jpg',
			description: 'Stunning mountain landscapes and charming alpine villages.',
			tours: '12+ Tours'
		}
	];

	return (
		<section className="destinations">
			<Box className="destinations__container">
				<Box className="destinations__header">
					<Typography variant="h2" className="destinations__title">
						Popular Destinations
					</Typography>
					<Typography variant="body1" className="destinations__subtitle">
						Explore our most sought-after travel destinations around the world
					</Typography>
				</Box>

				<Grid container spacing={3} className="destinations__grid">
					{destinations.map((destination) => (
						<Grid item xs={12} sm={6} lg={4} key={destination.id}>
							<Card className="destinations__card">
								<Box className="destinations__image">
									<img
										src={destination.image}
										alt={destination.name}
										onError={(e) => {
											e.currentTarget.style.display = 'none';
											const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
											if (placeholder) placeholder.style.display = 'flex';
										}}
									/>
									<Box
										className="destinations__imagePlaceholder"
										sx={{
											display: 'none',
											position: 'absolute',
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
											background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
											alignItems: 'center',
											justifyContent: 'center',
											color: 'white',
											fontSize: '20px',
											fontWeight: 'bold',
											textAlign: 'center',
											padding: '20px'
										}}
									>
										{destination.name}
									</Box>
									<Box className="destinations__overlay">
										<Button variant="contained" className="destinations__exploreBtn">
											Explore Tours
										</Button>
									</Box>
								</Box>
								<CardContent className="destinations__content">
									<Stack direction="row" justifyContent="space-between" alignItems="flex-start" className="destinations__header-row">
										<Box>
											<Typography variant="h6" className="destinations__name">
												{destination.name}
											</Typography>
											<Stack direction="row" alignItems="center" spacing={0.5} className="destinations__location">
												<LocationOnIcon fontSize="small" />
												<Typography variant="body2">{destination.country}</Typography>
											</Stack>
										</Box>
										<Stack direction="row" alignItems="center" spacing={0.5} className="destinations__rating">
											<StarIcon className="destinations__star" />
											<Typography variant="body2" className="destinations__rating-text">
												{destination.rating}
											</Typography>
										</Stack>
									</Stack>

									<Typography variant="body2" className="destinations__description">
										{destination.description}
									</Typography>

									<Stack direction="row" justifyContent="space-between" alignItems="center" className="destinations__footer">
										<Typography variant="h6" className="destinations__price">
											{destination.price}
										</Typography>
										<Typography variant="body2" className="destinations__tours">
											{destination.tours}
										</Typography>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>

				<Box className="destinations__cta">
					<Button variant="outlined" className="destinations__viewAllBtn">
						View All Destinations
					</Button>
				</Box>
			</Box>
		</section>
	);
};

export default Destinations;
