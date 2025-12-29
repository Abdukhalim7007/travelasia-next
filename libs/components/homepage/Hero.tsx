import React, { useState, useEffect } from 'react';
import {
	Box,
	Stack,
	Typography,
	Button,
	Grid,
	Dialog,
	DialogContent,
	Avatar,
	Card,
	CardContent,
	IconButton,
	Divider
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExploreIcon from '@mui/icons-material/Explore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

const Hero = () => {
	const [videoModalOpen, setVideoModalOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const heroTags = ['adventure', 'Explore', 'Travel', 'Wonderlust', 'Vacation', 'Journey', 'Gateaway', 'Escape', 'Discover'];

	return (
		<>
			<Box className="hero">
				{/* Background Layer (Priority: Video > Fallback Image) */}
				<Box className="hero__bg">
					{isMounted && (
						<video
							className="hero__video"
							autoPlay
							muted
							loop
							playsInline
							poster="/img/hero-poster.jpg"
							onError={(e) => {
								// Fallback handling if video fails
								const target = e.target as HTMLVideoElement;
								target.style.display = 'none';
							}}
						>
							<source src="/video/hero.mp4" type="video/mp4" />
						</video>
					)}
					<Box className="hero__fallback-img" sx={{ backgroundImage: 'url(/img/hero-bg.jpg)' }} />
				</Box>

				{/* Overlay Gradient */}
				<Box className="hero__overlay" />

				<Box className="hero__container">
					<Grid container sx={{ height: '100%' }}>
						{/* Left Column */}
						<Grid item xs={12} md={7} className="hero__left-col">
							<Stack spacing={4} sx={{ width: '100%' }}>
								<Box>
									<Typography variant="h1" className="hero__title">
										Discover the World <br /> with TravelAsia.
									</Typography>
									<Typography variant="body1" className="hero__subtitle">
										Plan your next adventure with TravelAsia. Discover top-rated destinations, exclusive tour
										packages, and seamless booking experiences.
									</Typography>
								</Box>

								<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="hero__actions">
									<Button
										variant="contained"
										className="hero__explore-btn"
										endIcon={
											<Box className="hero__btn-icon">
												<ArrowForwardIcon />
											</Box>
										}
									>
										Explore Now
									</Button>
									<Button
										variant="outlined"
										className="hero__video-btn"
										startIcon={
											<Box className="hero__play-icon-small">
												<PlayArrowIcon />
											</Box>
										}
										onClick={() => setVideoModalOpen(true)}
									>
										Watch Video
									</Button>
								</Stack>

								{/* Segmented Search Bar (Static UI) */}
								<Box className="hero__search">
									<Card className="hero__search-card">
										<Stack
											direction={{ xs: 'column', sm: 'row' }}
											divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />}
											spacing={0}
											alignItems="center"
										>
											<Stack className="hero__search-item" direction="row" spacing={1.5} alignItems="center">
												<LocationOnIcon className="hero__search-icon" />
												<Box>
													<Typography variant="caption">Destination</Typography>
													<Typography variant="body2">Where to go?</Typography>
												</Box>
											</Stack>
											<Stack className="hero__search-item" direction="row" spacing={1.5} alignItems="center">
												<ExploreIcon className="hero__search-icon" />
												<Box>
													<Typography variant="caption">Activity</Typography>
													<Typography variant="body2">What to do?</Typography>
												</Box>
											</Stack>
											<Stack className="hero__search-item" direction="row" spacing={1.5} alignItems="center">
												<CalendarTodayIcon className="hero__search-icon" />
												<Box>
													<Typography variant="caption">Date</Typography>
													<Typography variant="body2">Select Date</Typography>
												</Box>
											</Stack>
											<Stack className="hero__search-item" direction="row" spacing={1.5} alignItems="center">
												<PersonIcon className="hero__search-icon" />
												<Box>
													<Typography variant="caption">Guests</Typography>
													<Typography variant="body2">Add Guests</Typography>
												</Box>
											</Stack>
											<Button className="hero__search-btn" variant="contained">
												Search
											</Button>
										</Stack>
									</Card>
								</Box>

								{/* Tags Grid Cluster - Bottom Left */}
								<Box className="hero__chips">
									<Grid container spacing={1.5} sx={{ maxWidth: '400px' }}>
										{heroTags.map((tag) => (
											<Grid item xs={4} key={tag}>
												<Box className="hero__chip-item">{tag}</Box>
											</Grid>
										))}
									</Grid>
								</Box>
							</Stack>
						</Grid>

						{/* Right Column */}
						<Grid item xs={12} md={5} className="hero__right-col">
							<Card className="hero__partner-card">
								<CardContent sx={{ p: 4 }}>
									<Typography variant="h5" className="hero__card-title">
										Your Trusted Travel Partner!
									</Typography>
									<Typography variant="body2" className="hero__card-desc">
										Plan your next adventure with TravelAsia. Discover top-rated destinations, exclusive tour
										packages, and seamless booking experiences.
									</Typography>

									<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 3 }}>
										<Box className="hero__stat-pill">
											<Stack direction="row" spacing={-1.5} sx={{ mr: 2 }}>
												{[1, 2, 3].map((i) => (
													<Avatar key={i} src={`/img/avatar-${i}.jpg`} className="hero__avatar" />
												))}
											</Stack>
											<Box>
												<Typography className="hero__stat-count">200k +</Typography>
												<Typography className="hero__stat-label">Happy Client</Typography>
											</Box>
										</Box>

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

			<Dialog
				open={videoModalOpen}
				onClose={() => setVideoModalOpen(false)}
				maxWidth="md"
				fullWidth
				PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none' } }}
			>
				<DialogContent sx={{ p: 0, position: 'relative' }}>
					<IconButton onClick={() => setVideoModalOpen(false)} sx={{ position: 'absolute', top: -40, right: 0, color: '#fff' }}>
						<Typography sx={{ fontWeight: 800 }}>CLOSE</Typography>
					</IconButton>
					<Box sx={{ position: 'relative', pt: '56.25%', bgcolor: '#000', borderRadius: '20px', overflow: 'hidden' }}>
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
