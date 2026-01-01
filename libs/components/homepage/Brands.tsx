import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Brands = () => {
	const brandLogos = [
		{ src: '/img/brands/brand-1.png', alt: 'Travel Partner 1' },
		{ src: '/img/brands/brand-2.png', alt: 'Travel Partner 2' },
		{ src: '/img/brands/brand-3.png', alt: 'Travel Partner 3' },
		{ src: '/img/brands/brand-4.png', alt: 'Travel Partner 4' },
		{ src: '/img/brands/brand-5.png', alt: 'Travel Partner 5' },
		{ src: '/img/brands/brand-6.png', alt: 'Travel Partner 6' },
	];

	return (
		<section className="brands">
			<Box className="brands__container">
				<Typography variant="h4" className="brands__title">
					Trusted by World-Class Travel Brands
				</Typography>
				<Stack className="brands__logos" direction="row">
					{brandLogos.map((logo, index) => (
						<Box key={index} className="brands__logoItem">
							<img
								src={logo.src}
								alt={logo.alt}
								className="brands__logoImg"
								loading="lazy"
								onError={(e) => {
									const target = e.currentTarget;
									if (target.src && !target.src.includes('placehold.co')) {
										target.onerror = null; // Prevent infinite loop
										target.src = 'https://placehold.co/160x60?text=Brand';
									}
								}}
							/>
						</Box>
					))}
				</Stack>
			</Box>
		</section>
	);
};

export default Brands;

