import React, { useState, useEffect } from 'react';
import {
	Box,
	Stack,
	Typography,
	Button,
	Grid,
	Dialog,
	DialogContent,
	Chip,
	Avatar,
	Card,
	CardContent,
	TextField,
	IconButton
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Hero = () => {
	const [videoModalOpen, setVideoModalOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleVideoClick = () => {
		setVideoModalOpen(true);
	};

	const heroTags = [
		'adventure', 'explore', 'travel', 'wonderlust', 'vacation',
		'discovery', 'journey', 'escape', 'paradise', 'wander'
	];

	return (
		<>
			<Box className="hero" sx={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: { xs: '70vh', md: '90vh' } }}>
				{/* Video Background */}
				<Box className="hero__video" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
					{isMounted && (
						<video
							autoPlay
							muted
							loop
							playsInline
							poster="/img/hero-poster.jpg"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
						>
							<source src="/video/hero.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					)}
				</Box>

				{/* Fallback Background Image */}
				<Box
					className="hero__bg-fallback"
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundImage: 'url(/img/hero-bg.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						zIndex: 0,
					}}
				/>

				{/* Overlay Gradient */}
				<Box
					className="hero__overlay"
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%)',
						zIndex: 1,
					}}
				/>

				{/* Hero Tags/Chips */}
				<Box className="hero__tags" sx={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
					<Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
						{heroTags.slice(0, 6).map((tag, index) => (
							<Chip
								key={tag}
								label={tag}
								sx={{
									backgroundColor: 'rgba(255,255,255,0.2)',
									color: '#fff',
									border: '1px solid rgba(255,255,255,0.3)',
									borderRadius: '20px',
									fontSize: '0.8rem',
									fontWeight: 500,
									textTransform: 'capitalize',
									backdropFilter: 'blur(10px)',
									animation: `float 3s ease-in-out ${index * 0.2}s infinite`,
									'@keyframes float': {
										'0%, 100%': { transform: 'translateY(0px)' },
										'50%': { transform: 'translateY(-5px)' }
									}
								}}
							/>
						))}
					</Stack>
				</Box>

				{/* Content */}
				<Box className="hero__container" sx={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', pt: { xs: 12, md: 8 } }}>
					<Grid container sx={{ height: '100%', alignItems: 'center' }}>
						{/* Left Column - Main Content */}
						<Grid item xs={12} md={7} sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 6 } }}>
							<Stack className="hero__content" spacing={4}>
								<Typography
									className="hero__title"
									variant="h1"
									sx={{
										fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
										fontWeight: 800,
										color: '#fff',
										lineHeight: 1.1,
										mb: 2,
										textShadow: '0 4px 20px rgba(0,0,0,0.5)',
									}}
								>
									Discover the World with TravelAsia
								</Typography>

								<Typography
									className="hero__subtitle"
									variant="h5"
									sx={{
										fontSize: { xs: '1.1rem', md: '1.4rem' },
										fontWeight: 400,
										color: 'rgba(255,255,255,0.9)',
										lineHeight: 1.6,
										maxWidth: '600px',
									}}
								>
									Explore breathtaking destinations, experience unique cultures, and create unforgettable memories with our expertly crafted travel experiences.
								</Typography>

								<Stack className="hero__actions" direction={{ xs: 'column', sm: 'row' }} spacing={2}>
									<Button
										variant="contained"
										size="large"
										sx={{
											backgroundColor: '#E92C28',
											color: '#fff',
											px: 4,
											py: 1.5,
											fontSize: '1.1rem',
											fontWeight: 600,
											borderRadius: 3,
											textTransform: 'none',
											boxShadow: '0 4px 15px rgba(233, 44, 40, 0.3)',
											'&:hover': {
												backgroundColor: '#c91f1b',
												boxShadow: '0 6px 20px rgba(233, 44, 40, 0.4)',
											},
										}}
									>
										Explore Now
									</Button>
									<Button
										variant="outlined"
										size="large"
										startIcon={<PlayArrowIcon />}
										onClick={handleVideoClick}
										sx={{
											borderColor: '#fff',
											color: '#fff',
											px: 4,
											py: 1.5,
											fontSize: '1.1rem',
											fontWeight: 600,
											borderRadius: 3,
											textTransform: 'none',
											borderWidth: 2,
											backdropFilter: 'blur(10px)',
											backgroundColor: 'rgba(255,255,255,0.1)',
											'&:hover': {
												borderColor: '#fff',
												backgroundColor: 'rgba(255,255,255,0.2)',
												borderWidth: 2,
											},
										}}
									>
										Watch Video
									</Button>
								</Stack>

								{/* Search Bar */}
								<Box className="hero__search" sx={{ maxWidth: '600px', width: '100%' }}>
									<Card sx={{
										backgroundColor: 'rgba(255,255,255,0.95)',
										backdropFilter: 'blur(20px)',
										borderRadius: 3,
										boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
										p: 0
									}}>
										<CardContent sx={{ p: 0 }}>
											<Grid container>
												<Grid item xs={12} sm={4}>
													<Box sx={{ p: 2, borderRight: { sm: '1px solid rgba(0,0,0,0.1)' }, borderBottom: { xs: '1px solid rgba(0,0,0,0.1)', sm: 'none' } }}>
														<Stack direction="row" alignItems="center" spacing={1}>
															<LocationOnIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
															<Box>
																<Typography variant="caption" sx={{ color: '#666', fontSize: '0.8rem', display: 'block' }}>
																	Destination
																</Typography>
																<Typography variant="body2" sx={{ fontWeight: 500 }}>
																	Where to go?
																</Typography>
															</Box>
														</Stack>
													</Box>
												</Grid>
												<Grid item xs={12} sm={3}>
													<Box sx={{ p: 2, borderRight: { sm: '1px solid rgba(0,0,0,0.1)' }, borderBottom: { xs: '1px solid rgba(0,0,0,0.1)', sm: 'none' } }}>
														<Stack direction="row" alignItems="center" spacing={1}>
															<CalendarTodayIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
															<Box>
																<Typography variant="caption" sx={{ color: '#666', fontSize: '0.8rem', display: 'block' }}>
																	Date
																</Typography>
																<Typography variant="body2" sx={{ fontWeight: 500 }}>
																	Select date
																</Typography>
															</Box>
														</Stack>
													</Box>
												</Grid>
												<Grid item xs={12} sm={3}>
													<Box sx={{ p: 2, borderRight: { sm: '1px solid rgba(0,0,0,0.1)' }, borderBottom: { xs: '1px solid rgba(0,0,0,0.1)', sm: 'none' } }}>
														<Stack direction="row" alignItems="center" spacing={1}>
															<PersonIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
															<Box>
																<Typography variant="caption" sx={{ color: '#666', fontSize: '0.8rem', display: 'block' }}>
																	Guests
																</Typography>
																<Typography variant="body2" sx={{ fontWeight: 500 }}>
																	2 Adults
																</Typography>
															</Box>
														</Stack>
													</Box>
												</Grid>
												<Grid item xs={12} sm={2}>
													<Box sx={{ p: 0 }}>
														<IconButton
															sx={{
																width: '100%',
																height: '100%',
																backgroundColor: '#E92C28',
																color: '#fff',
																borderRadius: 0,
																borderTopRightRadius: { xs: 0, sm: 8 },
																borderBottomRightRadius: { xs: 8, sm: 8 },
																borderBottomLeftRadius: { xs: 8, sm: 0 },
																'&:hover': {
																	backgroundColor: '#c91f1b',
																},
															}}
														>
															<SearchIcon />
														</IconButton>
													</Box>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Box>
							</Stack>
						</Grid>

						{/* Right Column - Partner Card */}
						<Grid item xs={12} md={5} sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 6 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<Card className="hero__partner-card" sx={{
								backgroundColor: 'rgba(255,255,255,0.1)',
								backdropFilter: 'blur(20px)',
								borderRadius: 4,
								border: '1px solid rgba(255,255,255,0.2)',
								maxWidth: '400px',
								width: '100%',
								boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
								position: 'relative'
							}}>
								<CardContent sx={{ p: 4, textAlign: 'center' }}>
									<Typography
										variant="h5"
										sx={{
											color: '#fff',
											fontWeight: 700,
											mb: 2,
											fontSize: '1.5rem'
										}}
									>
										Your Trusted Travel Partner!
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: 'rgba(255,255,255,0.9)',
											lineHeight: 1.6,
											mb: 3
										}}
									>
										With over a decade of experience, we connect you with the world's most incredible destinations, ensuring every journey becomes an unforgettable story.
									</Typography>

									{/* Avatars and Stats */}
									<Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
										<Stack direction="row" spacing={-1}>
											{[1, 2, 3].map((i) => (
												<Avatar
													key={i}
													src={`/img/avatar-${i}.jpg`}
													sx={{
														width: 40,
														height: 40,
														border: '2px solid rgba(255,255,255,0.8)',
														backgroundColor: '#E92C28'
													}}
												>
													{i}
												</Avatar>
											))}
										</Stack>
										<Box>
											<Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>
												200k+
											</Typography>
											<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>
												Happy Clients
											</Typography>
										</Box>
									</Stack>
								</CardContent>

								{/* Decorative Play Button */}
								<Box sx={{
									position: 'absolute',
									top: -20,
									right: -20,
									width: 60,
									height: 60,
									borderRadius: '50%',
									backgroundColor: '#E92C28',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									boxShadow: '0 4px 20px rgba(233, 44, 40, 0.4)',
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									'&:hover': {
										transform: 'scale(1.1)',
										boxShadow: '0 6px 25px rgba(233, 44, 40, 0.5)',
									}
								}}>
									<PlayArrowIcon sx={{ color: '#fff', fontSize: '1.5rem' }} />
								</Box>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Box>

			{/* Video Modal */}
			<Dialog
				open={videoModalOpen}
				onClose={() => setVideoModalOpen(false)}
				maxWidth="md"
				fullWidth
				sx={{
					'& .MuiDialog-paper': {
						backgroundColor: 'transparent',
						boxShadow: 'none',
					}
				}}
			>
				<DialogContent sx={{ p: 0, position: 'relative' }}>
					<Box sx={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#000' }}>
						<iframe
							src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
							title="Travel Video"
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								border: 0,
								borderRadius: 8
							}}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</Box>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Hero;
