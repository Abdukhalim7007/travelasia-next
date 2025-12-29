import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Top = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Box className={`top ${scrolled ? 'top--scrolled' : ''}`}>
				<Stack className="top__inner" direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2, px: { xs: 2, md: 4 } }}>
					{/* Logo */}
					<Box className="top__logo">
						<Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
							<TravelExploreIcon sx={{ fontSize: '2.5rem', color: '#fff' }} className="top__logo-icon" />
							<Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
								<Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', fontSize: '1.8rem', letterSpacing: '0.5px' }}>
									TravelAsia
								</Typography>
								<Typography variant="caption" sx={{ color: '#fff', fontWeight: 600, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>
									Travel & Tours Agency
								</Typography>
							</Box>
						</Link>
					</Box>

					{/* Navigation - Desktop (Centered) */}
					<Stack className="top__nav" direction="row" spacing={{ xs: 2, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
						<Link href="/" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>Home</Typography>
						</Link>
						<Link href="/about" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>About Us</Typography>
						</Link>
						<Link href="/tours" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
								Tours <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>+</span>
							</Typography>
						</Link>
						<Link href="/pages" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
								Pages <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>+</span>
							</Typography>
						</Link>
						<Link href="/contact" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>Contact Us</Typography>
						</Link>
					</Stack>

					{/* CTA Button + Mobile Menu */}
					<Stack direction="row" alignItems="center" spacing={1}>
						<Button
							className="top__cta"
							variant="contained"
							sx={{
								backgroundColor: '#fff',
								color: '#212121',
								pl: 4,
								pr: 1.5,
								py: 1.5,
								borderRadius: '50px',
								textTransform: 'none',
								fontWeight: 800,
								fontSize: '0.95rem',
								display: { xs: 'none', sm: 'inline-flex' },
								gap: '12px',
								'&:hover': {
									backgroundColor: '#f5f5f5',
								}
							}}
						>
							Book Now
							<Box sx={{ 
								backgroundColor: '#212121', 
								borderRadius: '50%', 
								width: '32px', 
								height: '32px', 
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'center' 
							}}>
								<ArrowForwardIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
							</Box>
						</Button>

						{/* Mobile Menu Button */}
						<IconButton
							sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
							onClick={() => setMobileMenuOpen(true)}
						>
							<MenuIcon />
						</IconButton>
					</Stack>
				</Stack>
			</Box>

			{/* Mobile Menu Drawer */}
			<Drawer
				anchor="right"
				open={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
			>
				<Box sx={{ width: 280, pt: 3, px: 2 }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: 4, px: 1 }}>
						<TravelExploreIcon sx={{ fontSize: '2rem', color: '#E92C28' }} />
						<Typography variant="h6" sx={{ fontWeight: 800 }}>
							TravelAsia
						</Typography>
					</Box>
					<List>
						<ListItem component={Link} href="/" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 500 }} />
						</ListItem>
						<ListItem component={Link} href="/about" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="About Us" primaryTypographyProps={{ fontWeight: 500 }} />
						</ListItem>
						<ListItem component={Link} href="/tours" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="Tours" primaryTypographyProps={{ fontWeight: 500 }} />
						</ListItem>
						<ListItem component={Link} href="/contact" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="Contact Us" primaryTypographyProps={{ fontWeight: 500 }} />
						</ListItem>
						<ListItem sx={{ mt: 3 }}>
							<Button
								variant="contained"
								fullWidth
								endIcon={<ArrowForwardIcon />}
								sx={{
									backgroundColor: '#E92C28',
									color: '#fff',
									textTransform: 'none',
									fontWeight: 700,
									borderRadius: '50px',
									py: 1.2
								}}
							>
								Book Now
							</Button>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default Top;
