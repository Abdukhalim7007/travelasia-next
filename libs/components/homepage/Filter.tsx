import React, { useState } from 'react';
import {
	Box,
	Stack,
	Typography,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Slider,
	Chip,
	Button,
	Grid,
	Card,
	CardContent,
	InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FilterListIcon from '@mui/icons-material/FilterList';

const Filter = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState([500, 2500]);
	const [duration, setDuration] = useState('');
	const [category, setCategory] = useState('');
	const [difficulty, setDifficulty] = useState('');

	const locations = [
		'All Locations',
		'Bali, Indonesia',
		'Tokyo, Japan',
		'Paris, France',
		'Santorini, Greece',
		'Dubai, UAE',
		'Swiss Alps, Switzerland',
		'Amsterdam, Netherlands',
		'Rome, Italy',
		'Barcelona, Spain'
	];

	const durations = [
		'Any Duration',
		'1-3 Days',
		'4-7 Days',
		'8-14 Days',
		'15+ Days'
	];

	const categories = [
		'All Categories',
		'Adventure',
		'Beach',
		'Culture',
		'City Break',
		'Nature',
		'Luxury',
		'Family',
		'Romance',
		'Backpacking'
	];

	const difficulties = [
		'All Levels',
		'Easy',
		'Moderate',
		'Challenging',
		'Extreme'
	];

	const handlePriceChange = (event: Event, newValue: number | number[]) => {
		setPriceRange(newValue as number[]);
	};

	const handleSearch = () => {
		// Handle search logic here
		console.log({
			searchTerm,
			location,
			priceRange,
			duration,
			category,
			difficulty
		});
	};

	const clearFilters = () => {
		setSearchTerm('');
		setLocation('');
		setPriceRange([500, 2500]);
		setDuration('');
		setCategory('');
		setDifficulty('');
	};

	const activeFiltersCount = [
		searchTerm,
		location && location !== 'All Locations',
		duration && duration !== 'Any Duration',
		category && category !== 'All Categories',
		difficulty && difficulty !== 'All Levels',
		priceRange[0] !== 500 || priceRange[1] !== 2500
	].filter(Boolean).length;

	return (
		<section className="filter">
			<Box className="filter__container">
				<Card className="filter__card">
					<CardContent className="filter__content">
						<Box className="filter__header">
							<Typography variant="h3" className="filter__title">
								<FilterListIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
								Find Your Perfect Trip
							</Typography>
							<Typography variant="body1" className="filter__subtitle">
								Discover amazing destinations with our advanced filters
							</Typography>
							{activeFiltersCount > 0 && (
								<Chip
									label={`${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} active`}
									color="primary"
									size="small"
									className="filter__activeCount"
								/>
							)}
						</Box>

						<Grid container spacing={3} className="filter__grid">
							{/* Search Input */}
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									label="Search destinations or tours"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SearchIcon />
											</InputAdornment>
										),
									}}
									className="filter__search"
								/>
							</Grid>

							{/* Location Select */}
							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel>Location</InputLabel>
									<Select
										value={location}
										label="Location"
										onChange={(e) => setLocation(e.target.value)}
										startAdornment={
											<InputAdornment position="start">
												<LocationOnIcon />
											</InputAdornment>
										}
									>
										{locations.map((loc) => (
											<MenuItem key={loc} value={loc}>
												{loc}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>

							{/* Price Range Slider */}
							<Grid item xs={12} md={6}>
								<Box className="filter__priceRange">
									<Typography gutterBottom className="filter__priceLabel">
										<AttachMoneyIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} />
										Price Range: ${priceRange[0]} - ${priceRange[1]}
									</Typography>
									<Slider
										value={priceRange}
										onChange={handlePriceChange}
										valueLabelDisplay="auto"
										min={100}
										max={5000}
										step={100}
										className="filter__slider"
									/>
								</Box>
							</Grid>

							{/* Duration Select */}
							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel>Duration</InputLabel>
									<Select
										value={duration}
										label="Duration"
										onChange={(e) => setDuration(e.target.value)}
										startAdornment={
											<InputAdornment position="start">
												<ScheduleIcon />
											</InputAdornment>
										}
									>
										{durations.map((dur) => (
											<MenuItem key={dur} value={dur}>
												{dur}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>

							{/* Category Select */}
							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel>Category</InputLabel>
									<Select
										value={category}
										label="Category"
										onChange={(e) => setCategory(e.target.value)}
									>
										{categories.map((cat) => (
											<MenuItem key={cat} value={cat}>
												{cat}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>

							{/* Difficulty Select */}
							<Grid item xs={12} md={6}>
								<FormControl fullWidth>
									<InputLabel>Difficulty</InputLabel>
									<Select
										value={difficulty}
										label="Difficulty"
										onChange={(e) => setDifficulty(e.target.value)}
									>
										{difficulties.map((diff) => (
											<MenuItem key={diff} value={diff}>
												{diff}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>

						{/* Action Buttons */}
						<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="filter__actions">
							<Button
								variant="contained"
								size="large"
								onClick={handleSearch}
								className="filter__searchBtn"
								startIcon={<SearchIcon />}
							>
								Search Tours
							</Button>
							<Button
								variant="outlined"
								size="large"
								onClick={clearFilters}
								className="filter__clearBtn"
							>
								Clear Filters
							</Button>
						</Stack>
					</CardContent>
				</Card>
			</Box>
		</section>
	);
};

export default Filter;
