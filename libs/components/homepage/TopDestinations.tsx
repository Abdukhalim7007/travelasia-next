import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopDestinations = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const destinations = [
		{
			id: 1,
			name: 'Indonesia',
			tours: '250 Tours',
			image: '/img/destinations/indonesia.jpg'
		},
		{
			id: 2,
			name: 'Switzerland',
			tours: '180 Tours',
			image: '/img/destinations/switzerland.jpg'
		},
		{
			id: 3,
			name: 'Japan',
			tours: '220 Tours',
			image: '/img/destinations/japan.jpg'
		},
		{
			id: 4,
			name: 'France',
			tours: '190 Tours',
			image: '/img/destinations/france.jpg'
		},
		{
			id: 5,
			name: 'Italy',
			tours: '210 Tours',
			image: '/img/destinations/italy.jpg'
		},
		{
			id: 6,
			name: 'United States',
			tours: '160 Tours',
			image: '/img/destinations/usa.jpg'
		},
		{
			id: 7,
			name: 'Maldives',
			tours: '130 Tours',
			image: '/img/destinations/maldives.jpg'
		},
		{
			id: 8,
			name: 'Uni Emirat Arab',
			tours: '140 Tours',
			image: '/img/destinations/uae.jpg'
		},
		{
			id: 9,
			name: 'Egypt',
			tours: '120 Tours',
			image: '/img/destinations/egypt.jpg'
		},
		{
			id: 10,
			name: 'Thailand',
			tours: '200 Tours',
			image: '/img/destinations/thailand.jpg'
		}
	];

	// Duplicate destinations for infinite scroll
	const duplicatedDestinations = [...destinations, ...destinations];

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: -300,
				behavior: 'smooth'
			});
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: 300,
				behavior: 'smooth'
			});
		}
	};

	return (
		<section className="top-destinations">
			<Box className="top-destinations__container">
				<Typography variant="h3" className="top-destinations__title">
					Top Destinations for you
				</Typography>

				<Box className="top-destinations__carousel">
					<IconButton
						className="top-destinations__navBtn top-destinations__navBtn--left"
						onClick={scrollLeft}
						aria-label="Previous destinations"
					>
						<ArrowBackIosIcon />
					</IconButton>

					<Box className="top-destinations__scrollWrapper">
						<Box className="top-destinations__scrollContainer" ref={scrollContainerRef}>
							{duplicatedDestinations.map((destination, index) => (
								<Box key={`${destination.id}-${index}`} className="top-destinations__card">
									<Box className="top-destinations__imageWrapper">
										<img
											className="top-destinations__image"
											src={destination.image}
											alt={destination.name}
											loading="lazy"
											onError={(e) => {
												const target = e.currentTarget;
												if (target.src && !target.src.includes('placehold.co')) {
													target.onerror = null;
													target.src = 'https://placehold.co/180x180?text=' + encodeURIComponent(destination.name);
												}
											}}
										/>
									</Box>
									<Typography className="top-destinations__name">
										{destination.name}
									</Typography>
									<Typography className="top-destinations__tours">
										{destination.tours}
									</Typography>
								</Box>
							))}
						</Box>
					</Box>

					<IconButton
						className="top-destinations__navBtn top-destinations__navBtn--right"
						onClick={scrollRight}
						aria-label="Next destinations"
					>
						<ArrowForwardIosIcon />
					</IconButton>
				</Box>
			</Box>
		</section>
	);
};

export default TopDestinations;

