import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Link from 'next/link';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<Box className="footer">
			<Stack className="footer__inner" sx={{ py: 6, px: { xs: 2, md: 4 }, bgcolor: '#f5f5f5' }}>
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between">
					{/* Column 1: Logo & Description */}
					<Box className="footer__col" sx={{ flex: 1 }}>
						<Typography className="footer__title" variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#212121' }}>
							TravelAsia
						</Typography>
						<Typography sx={{ color: '#616161', fontSize: '0.9rem', lineHeight: 1.6, mb: 2 }}>
							Your trusted travel partner for unforgettable journeys across Asia and beyond.
						</Typography>
						<Stack direction="row" spacing={2}>
							<FacebookOutlinedIcon sx={{ color: '#616161', fontSize: '1.5rem', cursor: 'pointer' }} />
							<InstagramIcon sx={{ color: '#616161', fontSize: '1.5rem', cursor: 'pointer' }} />
							<TwitterIcon sx={{ color: '#616161', fontSize: '1.5rem', cursor: 'pointer' }} />
							<YouTubeIcon sx={{ color: '#616161', fontSize: '1.5rem', cursor: 'pointer' }} />
						</Stack>
					</Box>

					{/* Column 2: Quick Links */}
					<Box className="footer__col" sx={{ flex: 1 }}>
						<Typography className="footer__title" variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#212121' }}>
							Quick Links
						</Typography>
						<Stack spacing={1}>
							<Link href="/about" className="footer__link">
								<Typography sx={{ color: '#616161', fontSize: '0.9rem' }}>About Us</Typography>
							</Link>
							<Link href="/tours" className="footer__link">
								<Typography sx={{ color: '#616161', fontSize: '0.9rem' }}>Tours</Typography>
							</Link>
							<Link href="/contact" className="footer__link">
								<Typography sx={{ color: '#616161', fontSize: '0.9rem' }}>Contact</Typography>
							</Link>
						</Stack>
					</Box>

					{/* Column 3: Contact Info */}
					<Box className="footer__col" sx={{ flex: 1 }}>
						<Typography className="footer__title" variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#212121' }}>
							Contact
						</Typography>
						<Stack spacing={1}>
							<Typography sx={{ color: '#616161', fontSize: '0.9rem' }}>+1 (234) 567-8900</Typography>
							<Typography sx={{ color: '#616161', fontSize: '0.9rem' }}>info@travelasia.com</Typography>
							<Typography sx={{ color: '#616161', fontSize: '0.9rem' }}>123 Travel Street, Asia City</Typography>
						</Stack>
					</Box>
				</Stack>

				{/* Footer Bottom */}
				<Box className="footer__bottom" sx={{ mt: 4, pt: 4, borderTop: '1px solid #eee', textAlign: 'center' }}>
					<Typography sx={{ color: '#616161', fontSize: '0.85rem' }}>
						© 2025 TravelAsia. All rights reserved.
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
};

export default Footer;
