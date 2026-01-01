import React from 'react';
import { Box, Stack, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';

const FeaturedTours = () => {
	const featuredTours = [
		{
			id: 1,
			title: 'Bali Adventure Package',
			location: 'Bali, Indonesia',
			duration: '7 Days',
			rating: 4.8,
			price: '$1,299',
			image: '/img/tours/tour-1.jpg',
			description: 'Explore the beautiful beaches and cultural sites of Bali.'
		},
		{
			id: 2,
			title: 'Tokyo City Tour',
			location: 'Tokyo, Japan',
			duration: '5 Days',
			rating: 4.9,
			price: '$1,899',
			image: '/img/tours/tour-2.jpg',
			description: 'Experience the vibrant culture and modern attractions of Tokyo.'
		},
		{
			id: 3,
			title: 'Swiss Alps Hiking',
			location: 'Switzerland',
			duration: '6 Days',
			rating: 4.7,
			price: '$2,199',
			image: '/img/tours/tour-3.jpg',
			description: 'Hike through stunning mountain landscapes in Switzerland.'
		}
	];

	return (
		<section className="featured-tours">
			<Box className="featured-tours__container">
				<Typography variant="h2" className="featured-tours__title">
					Featured Tours & Packages
				</Typography>
				<Typography variant="body1" className="featured-tours__subtitle">
					Discover our handpicked selection of premium travel experiences
				</Typography>

				<Grid container spacing={3} className="featured-tours__grid">
					{featuredTours.map((tour) => (
						<Grid item xs={12} md={4} key={tour.id}>
							<Card className="featured-tours__card">
								<Box className="featured-tours__image">
									<img
										src={tour.image}
										alt={tour.title}
										onError={(e) => {
											e.currentTarget.style.display = 'none';
											const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
											if (placeholder) placeholder.style.display = 'flex';
										}}
									/>
									<Box
										className="featured-tours__imagePlaceholder"
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
											fontSize: '18px',
											fontWeight: 'bold',
											textAlign: 'center',
											padding: '20px'
										}}
									>
										{tour.title}
									</Box>
									<Box className="featured-tours__overlay">
										<Button variant="contained" className="featured-tours__bookBtn">
											Book Now
										</Button>
									</Box>
								</Box>
								<CardContent className="featured-tours__content">
									<Typography variant="h6" className="featured-tours__tourTitle">
										{tour.title}
									</Typography>
									<Stack direction="row" alignItems="center" spacing={1} className="featured-tours__location">
										<LocationOnIcon fontSize="small" />
										<Typography variant="body2">{tour.location}</Typography>
									</Stack>
									<Stack direction="row" alignItems="center" spacing={1} className="featured-tours__duration">
										<CalendarMonthIcon fontSize="small" />
										<Typography variant="body2">{tour.duration}</Typography>
									</Stack>
									<Stack direction="row" alignItems="center" justifyContent="space-between" className="featured-tours__footer">
										<Stack direction="row" alignItems="center" spacing={0.5}>
											<StarIcon className="featured-tours__star" />
											<Typography variant="body2" className="featured-tours__rating">
												{tour.rating}
											</Typography>
										</Stack>
										<Typography variant="h6" className="featured-tours__price">
											{tour.price}
										</Typography>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>

				<Box className="featured-tours__cta">
					<Button variant="outlined" className="featured-tours__viewAllBtn">
						View All Tours
					</Button>
				</Box>
			</Box>
		</section>
	);
};

export default FeaturedTours;
