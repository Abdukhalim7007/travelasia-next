import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExploreIcon from '@mui/icons-material/Explore';

const Destinations = () => {
	const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

	const destinations = [
		{
			id: 1,
			location: 'Bali, Indonesia',
			title: 'The Island of Gods',
			image: '/img/destinations/bali.jpg'
		},
		{
			id: 2,
			location: 'Kyoto, Japan',
			title: 'Where Tradition Meet Serenity',
			image: '/img/destinations/kyoto.jpg'
		},
		{
			id: 3,
			location: 'Swiss Alps, Switzerland',
			title: 'A Winter Wonderland',
			image: '/img/destinations/swiss-alps.jpg'
		}
	];

	const handleImageError = (id: number) => {
		setImageErrors((prev) => ({ ...prev, [id]: true }));
	};

	return (
		<section className="destinations">
			<Box className="destinations__container">
				{/* Header */}
				<Box className="destinations__header">
					<Box className="destinations__headerContent">
						<Box className="destinations__headerIcon">
							<ExploreIcon />
						</Box>
						<Box className="destinations__headerText">
							<Typography className="destinations__title">
								<strong>Top Rated</strong> Destinations
							</Typography>
							<Typography className="destinations__subtitle">
								for Your Next Adventure.
							</Typography>
						</Box>
					</Box>
					<Button className="destinations__bookingBtn" variant="contained">
						Booking Now
						<ArrowForwardIcon className="destinations__bookingBtnIcon" />
					</Button>
				</Box>

				{/* Cards Grid */}
				<Box className="destinations__grid">
					{destinations.map((destination) => (
						<Box key={destination.id} className="destinations__card">
							<Box className="destinations__media">
								{!imageErrors[destination.id] && (
									<Image
										className="destinations__img"
										src={destination.image}
										alt={destination.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										style={{ objectFit: 'cover' }}
										onError={() => handleImageError(destination.id)}
									/>
								)}
								{imageErrors[destination.id] && (
									<Box className="destinations__imgFallback" />
								)}
								<Box className="destinations__overlay">
									<Stack direction="row" alignItems="center" spacing={0.5} className="destinations__location">
										<LocationOnIcon className="destinations__locationIcon" />
										<Typography className="destinations__locationText">
											{destination.location}
										</Typography>
									</Stack>
									<Typography className="destinations__titleText">
										{destination.title}
									</Typography>
								</Box>
							</Box>
						</Box>
					))}
				</Box>

				{/* Bottom CTA Text */}
				<Box className="destinations__footer">
					<Typography className="destinations__footerText">
						Where will your next journey take you? Find your dream destination with TravelAsia!{' '}
						<Box component="span" className="destinations__footerLink">
							Explore More Destinations
						</Box>
					</Typography>
				</Box>
			</Box>
		</section>
	);
};

export default Destinations;
