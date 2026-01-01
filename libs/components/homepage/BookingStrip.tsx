import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TourIcon from '@mui/icons-material/Tour';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';

const BookingStrip = () => {
	return (
		<section className="booking-strip">
			<Box className="booking-strip__container">
				<Box className="booking-strip__bar">
					{/* Destination */}
					<Box className="booking-strip__item">
						<Box className="booking-strip__icon">
							<LocationOnIcon />
						</Box>
						<Box className="booking-strip__meta">
							<Typography className="booking-strip__label">Destination</Typography>
							<Typography className="booking-strip__value">Where to go?</Typography>
						</Box>
					</Box>

					{/* Activity */}
					<Box className="booking-strip__item">
						<Box className="booking-strip__icon">
							<TourIcon />
						</Box>
						<Box className="booking-strip__meta">
							<Typography className="booking-strip__label">Activity</Typography>
							<Typography className="booking-strip__value">Tours</Typography>
						</Box>
					</Box>

					{/* Date */}
					<Box className="booking-strip__item">
						<Box className="booking-strip__icon">
							<CalendarMonthIcon />
						</Box>
						<Box className="booking-strip__meta">
							<Typography className="booking-strip__label">Date</Typography>
							<Typography className="booking-strip__value">Select date</Typography>
						</Box>
					</Box>

					{/* Guests */}
					<Box className="booking-strip__item">
						<Box className="booking-strip__icon">
							<PeopleIcon />
						</Box>
						<Box className="booking-strip__meta">
							<Typography className="booking-strip__label">Guests</Typography>
							<Typography className="booking-strip__value">2 Adults</Typography>
						</Box>
					</Box>

					{/* CTA */}
					<Button className="booking-strip__btn" variant="contained">
						Booking Now
					</Button>
				</Box>
			</Box>
		</section>
	);
};

export default BookingStrip;
