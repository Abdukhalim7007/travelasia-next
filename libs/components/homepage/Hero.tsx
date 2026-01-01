import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, Grid, Dialog, DialogContent, Avatar, Card, CardContent } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
	const [videoModalOpen, setVideoModalOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const heroTags = [
		'adventure', 'Explore', 'Travel',
		'Wonderlust', 'Vacation', 'Journey',
		'Gateaway', 'Escape', 'Discover'
	];

	return (
		<>
			<Box className="hero">
				{/* Video Background */}
				<Box className="hero__video">
					{isMounted && (
						<video
							autoPlay
							muted
							loop
							playsInline
							poster="/img/hero-poster.jpg"
							onError={(e) => {
								e.currentTarget.style.display = 'none';
								const fallback = e.currentTarget.parentElement?.querySelector('.hero__videoFallback') as HTMLElement;
								if (fallback) fallback.style.display = 'flex';
							}}
						>
							<source src="/video/hero.mp4" type="video/mp4" />
						</video>
					)}
					<Box
						className="hero__videoFallback"
						sx={{
							display: 'none',
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
							alignItems: 'center',
							justifyContent: 'center',
							color: 'white',
							fontSize: '24px',
							fontWeight: 'bold',
							textAlign: 'center',
							zIndex: -1
						}}
					>
						<Box>
							<Typography variant="h3" sx={{ mb: 2 }}>Discover the World</Typography>
							<Typography variant="h6">with TravelAsia</Typography>
						</Box>
					</Box>
				</Box>

				<Box className="hero__overlay" />

				<Box className="hero__container">
					<Grid container sx={{ height: '100%' }}>
						{/* Left Content */}
						<Grid item xs={12} md={7} className="hero__left-col">
							<Stack spacing={4}>
								<Typography variant="h1" className="hero__title">
									Discover the World <br /> with TravelAsia.
								</Typography>

								<Button
									variant="contained"
									className="hero__explore-btn"
									endIcon={<Box className="hero__btn-icon"><ArrowForwardIcon /></Box>}
								>
									Explore Now
								</Button>

								{/* Tags Grid at Bottom Left */}
								<Box className="hero__tags-grid">
									{heroTags.map((tag) => (
										<Box key={tag} className="hero__tag-item">
											{tag}
										</Box>
									))}
								</Box>
							</Stack>
						</Grid>

						{/* Right Card at Bottom Right */}
						<Grid item xs={12} md={5} className="hero__right-col">
							<Card className="hero__partner-card">
								<CardContent sx={{ p: 4 }}>
									<Typography variant="h5" className="hero__card-title">
										Your Trusted Travel Partner!
									</Typography>
									<Typography variant="body2" className="hero__card-desc">
										Plan your next adventure with TravelAsia. Discover top-rated destinations, 
										exclusive tour packages, and seamless booking experiences.
									</Typography>

									<Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 3 }}>
										{/* White Stat Pill */}
										<Box className="hero__stat-pill">
											<Stack direction="row" spacing={-1} sx={{ mr: 2 }}>
												{[1, 2, 3].map((i) => (
													<Avatar
														key={i}
														src={`/img/avatar-${i}.jpg`}
														className="hero__avatar"
														onError={(e) => {
															const target = e.currentTarget;
															if (target.src && !target.src.includes('placehold.co')) {
																target.onerror = null; // Prevent infinite loop
																target.src = 'https://placehold.co/80x80?text=User';
															}
														}}
													>
														{i}
													</Avatar>
												))}
											</Stack>
											<Box>
												<Typography className="hero__stat-count">200k +</Typography>
												<Typography className="hero__stat-label">Happy Client</Typography>
											</Box>
										</Box>

										{/* Play Button with Rings */}
										<Box className="hero__play-wrapper" onClick={() => setVideoModalOpen(true)}>
											<Box className="hero__play-btn">
												<PlayArrowIcon />
											</Box>
											<Box className="hero__play-ring" />
											<Box className="hero__play-ring-outer" />
										</Box>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Box>

			<Dialog open={videoModalOpen} onClose={() => setVideoModalOpen(false)} maxWidth="md" fullWidth>
				<DialogContent sx={{ p: 0, bgcolor: '#000' }}>
					<Box sx={{ position: 'relative', pt: '56.25%' }}>
						<iframe
							src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
							style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
							allowFullScreen
						/>
					</Box>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Hero;
