import React from 'react';
import { Box, Stack, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: 'Sarah Johnson',
			location: 'New York, USA',
			rating: 5,
			avatar: '/img/avatars/avatar-1.jpg',
			review: 'TravelAsia made our family vacation to Bali unforgettable. The attention to detail and personalized service exceeded our expectations. Highly recommend!',
			trip: 'Bali Family Adventure'
		},
		{
			id: 2,
			name: 'Michael Chen',
			location: 'Toronto, Canada',
			rating: 5,
			avatar: '/img/avatars/avatar-2.jpg',
			review: 'Outstanding experience in Japan! The local guides were knowledgeable and the itinerary was perfectly planned. Will definitely book with TravelAsia again.',
			trip: 'Tokyo Cultural Tour'
		},
		{
			id: 3,
			name: 'Emma Rodriguez',
			location: 'Barcelona, Spain',
			rating: 5,
			avatar: '/img/avatars/avatar-3.jpg',
			review: 'The Swiss Alps hiking tour was incredible. Professional guides, stunning scenery, and well-organized logistics. Thank you TravelAsia for an amazing adventure!',
			trip: 'Swiss Alps Hiking'
		},
		{
			id: 4,
			name: 'David Thompson',
			location: 'London, UK',
			rating: 5,
			avatar: '/img/avatars/avatar-4.jpg',
			review: 'Dubai was spectacular! TravelAsia handled everything perfectly from luxury accommodations to desert safaris. Exceptional service throughout.',
			trip: 'Dubai Luxury Experience'
		},
		{
			id: 5,
			name: 'Lisa Wang',
			location: 'Singapore',
			rating: 5,
			avatar: '/img/avatars/avatar-5.jpg',
			review: 'Our honeymoon in Santorini was magical, thanks to TravelAsia. Every detail was taken care of, making it truly special. Highly recommend their services!',
			trip: 'Santorini Honeymoon'
		},
		{
			id: 6,
			name: 'Robert Kim',
			location: 'Seoul, South Korea',
			rating: 5,
			avatar: '/img/avatars/avatar-6.jpg',
			review: 'Paris never felt so romantic! TravelAsia arranged everything perfectly - from Eiffel Tower reservations to Seine River cruises. Simply outstanding.',
			trip: 'Paris Romantic Getaway'
		}
	];

	return (
		<section className="testimonials">
			<Box className="testimonials__container">
				<Box className="testimonials__header">
					<Typography variant="h2" className="testimonials__title">
						What Our Travelers Say
					</Typography>
					<Typography variant="body1" className="testimonials__subtitle">
						Read genuine reviews from our satisfied customers around the world
					</Typography>
				</Box>

				<Grid container spacing={3} className="testimonials__grid">
					{testimonials.map((testimonial) => (
						<Grid item xs={12} md={6} lg={4} key={testimonial.id}>
							<Card className="testimonials__card">
								<CardContent className="testimonials__content">
									<Box className="testimonials__quote-icon">
										<FormatQuoteIcon />
									</Box>

									<Stack direction="row" spacing={0.5} className="testimonials__rating">
										{[...Array(testimonial.rating)].map((_, i) => (
											<StarIcon key={i} className="testimonials__star" />
										))}
									</Stack>

									<Typography variant="body1" className="testimonials__review">
										"{testimonial.review}"
									</Typography>

									<Box className="testimonials__author">
										<Avatar
											src={testimonial.avatar}
											alt={testimonial.name}
											className="testimonials__avatar"
										/>
										<Box className="testimonials__author-info">
											<Typography variant="h6" className="testimonials__name">
												{testimonial.name}
											</Typography>
											<Typography variant="body2" className="testimonials__location">
												{testimonial.location}
											</Typography>
											<Typography variant="caption" className="testimonials__trip">
												{testimonial.trip}
											</Typography>
										</Box>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</section>
	);
};

export default Testimonials;
