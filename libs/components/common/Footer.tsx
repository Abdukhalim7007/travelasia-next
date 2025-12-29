import React from 'react';
import { Stack, Box, Typography, Link, Divider, IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Footer = () => {
	return (
		<footer className="footer">
			<Box className="footer__container">
				<Stack className="footer__top" direction={{ xs: 'column', md: 'row' }} spacing={5}>
					{/* Column 1: Logo & Description */}
					<Box className="footer__col footer__col--logo">
						<Box className="footer__logo">
							<TravelExploreIcon sx={{ color: '#fff', fontSize: '2rem' }} />
							<Typography variant="h5">TravelAsia</Typography>
						</Box>
						<Typography className="footer__subtitle">
							TRAVEL & TOURS AGENCY
						</Typography>
						<Typography className="footer__desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis tortor at scelerisque luct nullam
							eu mi nibh eleifend turpis dapibus.
						</Typography>
						<div className="footer__social">
							<div className="footer__social-icon">
								<FacebookOutlinedIcon />
							</div>
							<div className="footer__social-icon">
								<InstagramIcon />
							</div>
							<div className="footer__social-icon">
								<TwitterIcon />
							</div>
							<div className="footer__social-icon">
								<YouTubeIcon />
							</div>
							<div className="footer__social-icon">
								<LinkedInIcon />
							</div>
						</div>
					</Box>

					{/* Column 2: Company Links */}
					<Box className="footer__col">
						<Typography className="footer__title">Company</Typography>
						<Stack className="footer__links" spacing={1.5}>
							<Link href="#" className="footer__link">About Us</Link>
							<Link href="#" className="footer__link">Our Services</Link>
							<Link href="#" className="footer__link">Why Choose Us</Link>
							<Link href="#" className="footer__link">Testimonials</Link>
							<Link href="#" className="footer__link">Careers</Link>
							<Link href="#" className="footer__link">Blog</Link>
						</Stack>
					</Box>

					{/* Column 3: Explore Links */}
					<Box className="footer__col">
						<Typography className="footer__title">Explore</Typography>
						<Stack className="footer__links" spacing={1.5}>
							<Link href="#" className="footer__link">Destinations</Link>
							<Link href="#" className="footer__link">Travel Packages</Link>
							<Link href="#" className="footer__link">Special Offers</Link>
							<Link href="#" className="footer__link">Travel Tips</Link>
							<Link href="#" className="footer__link">FAQ</Link>
							<Link href="#" className="footer__link">Contact Us</Link>
						</Stack>
					</Box>

					{/* Column 4: Contact Information */}
					<Box className="footer__col footer__col--contact">
						<Typography className="footer__title">Contact Information</Typography>
						<div className="footer__contact-row">
							<PhoneInTalkIcon />
							<div>
								<span className="footer__contact-label">PHONE NUMBER</span>
								<span className="footer__contact-value">+82 10-1234-5678</span>
							</div>
						</div>
						<div className="footer__contact-row">
							<EmailIcon />
							<div>
								<span className="footer__contact-label">EMAIL ADDRESS</span>
								<span className="footer__contact-value">hello@travelasia.com</span>
							</div>
						</div>
						<div className="footer__contact-row">
							<LocationOnIcon />
							<div>
								<span className="footer__contact-label">ADDRESS</span>
								<span className="footer__contact-value">Busan, South Korea</span>
							</div>
						</div>
					</Box>
				</Stack>

				<Divider className="footer__divider" />

				<Stack className="footer__bottom" direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
					<Typography className="footer__bottom-left">
						Copyright © 2025 Krakenbox. All Rights Reserved.
					</Typography>
					<Stack className="footer__bottom-right" direction="row" spacing={4}>
						<Link href="#">Privacy Policy</Link>
						<Link href="#">Terms & Condition</Link>
					</Stack>
				</Stack>
			</Box>
		</footer>
	);
};

export default Footer;
