import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const BrandsStrip = () => {
	const brandLogos = [
		{ src: '/img/brands/brand-1.png', alt: 'GRIFFIN', name: 'GRIFFIN' },
		{ src: '/img/brands/brand-2.png', alt: 'AURELIA', name: 'AURELIA' },
		{ src: '/img/brands/brand-3.png', alt: 'Aora-Roots', name: 'Aora-Roots' },
		{ src: '/img/brands/brand-4.png', alt: 'ORBIT INC.', name: 'ORBIT INC.' },
		{ src: '/img/brands/brand-5.png', alt: 'Brand 5', name: 'Brand 5' },
		{ src: '/img/brands/brand-6.png', alt: 'Brand 6', name: 'Brand 6' }
	];

	// Duplicate logos for infinite scroll
	const duplicatedLogos = [...brandLogos, ...brandLogos];

	return (
		<section className="brands-strip">
			<Box className="brands-strip__container">
				<Box className="brands-strip__bar">
					{/* Left side: Text */}
					<Box className="brands-strip__text">
						<Typography className="brands-strip__line1">
							Trusted by <strong>World-Class</strong>
						</Typography>
						<Typography className="brands-strip__line2">
							Travel <strong>Brands</strong>
						</Typography>
					</Box>

					{/* Right side: Logos */}
					<Box className="brands-strip__logosWrapper">
						<Stack className="brands-strip__logos" direction="row">
							{duplicatedLogos.map((logo, index) => (
								<Box key={`${logo.alt}-${index}`} className="brands-strip__logoItem">
									<img
										src={logo.src}
										alt={logo.alt}
										className="brands-strip__logoImg"
										loading="lazy"
										onError={(e) => {
											const target = e.currentTarget;
											if (target.src && !target.src.includes('placehold.co')) {
												target.onerror = null; // Prevent infinite loop
												target.src = 'https://placehold.co/140x60?text=' + encodeURIComponent(logo.name);
											}
										}}
									/>
								</Box>
							))}
						</Stack>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default BrandsStrip;

