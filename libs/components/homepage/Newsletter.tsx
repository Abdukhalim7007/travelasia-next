import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			// Simulate API call
			setTimeout(() => {
				setIsSubscribed(true);
				setEmail('');
			}, 1000);
		}
	};

	const benefits = [
		'Exclusive travel deals & discounts',
		'Travel tips & destination guides',
		'Latest travel news & updates',
		'Personalized recommendations'
	];

	return (
		<section className="newsletter">
			<Box className="newsletter__container">
				<Grid container spacing={4} alignItems="center">
					{/* Left Column - Content */}
					<Grid item xs={12} md={6} className="newsletter__left">
						<Box className="newsletter__content">
							<Typography variant="h2" className="newsletter__title">
								Stay Updated with TravelAsia
							</Typography>
							<Typography variant="body1" className="newsletter__description">
								Subscribe to our newsletter and be the first to know about exclusive deals,
								travel tips, and amazing destinations waiting to be explored.
							</Typography>

							{!isSubscribed ? (
								<Box component="form" onSubmit={handleSubscribe} className="newsletter__form">
									<TextField
										fullWidth
										type="email"
										placeholder="Enter your email address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="newsletter__input"
										required
										InputProps={{
											startAdornment: <EmailIcon className="newsletter__input-icon" />,
										}}
									/>
									<Button
										type="submit"
										variant="contained"
										className="newsletter__submit-btn"
										endIcon={<SendIcon />}
									>
										Subscribe
									</Button>
								</Box>
							) : (
								<Box className="newsletter__success">
									<CheckCircleIcon className="newsletter__success-icon" />
									<Typography variant="h5" className="newsletter__success-title">
										Thank you for subscribing!
									</Typography>
									<Typography variant="body1" className="newsletter__success-message">
										You'll receive our latest travel updates and exclusive offers.
									</Typography>
								</Box>
							)}

							<Box className="newsletter__benefits">
								<Typography variant="h6" className="newsletter__benefits-title">
									What you'll get:
								</Typography>
								{benefits.map((benefit, index) => (
									<Box key={index} className="newsletter__benefit-item">
										<CheckCircleIcon className="newsletter__benefit-icon" />
										<Typography variant="body2">{benefit}</Typography>
									</Box>
								))}
							</Box>
						</Box>
					</Grid>

					{/* Right Column - Visual */}
					<Grid item xs={12} md={6} className="newsletter__right">
						<Card className="newsletter__card">
							<CardContent className="newsletter__card-content">
								<Typography variant="h4" className="newsletter__card-title">
									🌍 Travel More, Worry Less
								</Typography>
								<Typography variant="body1" className="newsletter__card-text">
									Join thousands of happy travelers who trust TravelAsia for their dream vacations.
								</Typography>
								<Box className="newsletter__stats">
									<Box className="newsletter__stat">
										<Typography variant="h3" className="newsletter__stat-number">50K+</Typography>
										<Typography variant="body2" className="newsletter__stat-label">Subscribers</Typography>
									</Box>
									<Box className="newsletter__stat">
										<Typography variant="h3" className="newsletter__stat-number">25+</Typography>
										<Typography variant="body2" className="newsletter__stat-label">Countries</Typography>
									</Box>
									<Box className="newsletter__stat">
										<Typography variant="h3" className="newsletter__stat-number">4.9★</Typography>
										<Typography variant="body2" className="newsletter__stat-label">Rating</Typography>
									</Box>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</section>
	);
};

export default Newsletter;
