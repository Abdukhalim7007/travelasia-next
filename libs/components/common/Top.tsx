import React from 'react';
import { Stack, Box, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

const Top = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	return (
		<>
			<Box className="top">
				<Stack className="top__inner" direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2, px: { xs: 2, md: 4 } }}>
					{/* Logo */}
					<Box className="top__logo">
						<Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
							<Typography variant="h5" sx={{ fontWeight: 700, color: '#fff' }}>
								TravelAsia
							</Typography>
						</Link>
					</Box>

					{/* Navigation - Desktop */}
					<Stack className="top__nav" direction="row" spacing={{ xs: 2, md: 4 }} sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Link href="/" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '0.95rem', fontWeight: 400 }}>Home</Typography>
						</Link>
						<Link href="/about" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '0.95rem', fontWeight: 400 }}>About</Typography>
						</Link>
						<Link href="/tours" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '0.95rem', fontWeight: 400 }}>Tours</Typography>
						</Link>
						<Link href="/contact" className="top__link">
							<Typography sx={{ color: '#fff', fontSize: '0.95rem', fontWeight: 400 }}>Contact</Typography>
						</Link>
					</Stack>

					{/* CTA Button + Mobile Menu */}
					<Stack direction="row" alignItems="center" spacing={1}>
						<Button
							className="top__cta"
							variant="contained"
							sx={{
								backgroundColor: '#E92C28',
								color: '#fff',
								px: 3,
								py: 1,
								borderRadius: 2,
								textTransform: 'none',
								fontWeight: 500,
								display: { xs: 'none', sm: 'inline-flex' }
							}}
						>
							Book Now
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
				<Box sx={{ width: 250, pt: 2 }}>
					<List>
						<ListItem component={Link} href="/" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="Home" />
						</ListItem>
						<ListItem component={Link} href="/about" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="About" />
						</ListItem>
						<ListItem component={Link} href="/tours" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="Tours" />
						</ListItem>
						<ListItem component={Link} href="/contact" onClick={() => setMobileMenuOpen(false)}>
							<ListItemText primary="Contact" />
						</ListItem>
						<ListItem sx={{ mt: 2 }}>
							<Button
								variant="contained"
								fullWidth
								sx={{
									backgroundColor: '#E92C28',
									color: '#fff',
									textTransform: 'none',
									fontWeight: 500
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
