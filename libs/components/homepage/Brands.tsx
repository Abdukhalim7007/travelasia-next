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
								onError={(e) => {
									e.currentTarget.style.display = 'none';
									e.currentTarget.nextElementSibling!.style.display = 'flex';
								}}
							/>
							<Box className="brands__logoPlaceholder" sx={{
								display: 'none',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
								height: '100%',
								background: '#f8f9fa',
								border: '2px dashed #ddd',
								borderRadius: '8px',
								color: '#999',
								fontSize: '12px',
								textAlign: 'center'
							}}>
								{logo.alt}
							</Box>
						</Box>
					))}
				</Stack>
			</Box>
		</section>
	);
};

export default Brands;

