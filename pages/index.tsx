import { NextPage } from 'next';
import { Stack } from '@mui/material';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import Hero from '../libs/components/homepage/Hero';
import BookingStrip from '../libs/components/homepage/BookingStrip';
import Destinations from '../libs/components/homepage/Destinations';
import BrandsStrip from '../libs/components/homepage/BrandsStrip';
import TopDestinations from '../libs/components/homepage/TopDestinations';
import FeaturedTours from '../libs/components/homepage/FeaturedTours';

const Home: NextPage = () => {
	return (
		<Stack className="home-page">
			<Hero />
			<BookingStrip />
			<Destinations />
			<BrandsStrip />
			<TopDestinations />
			<FeaturedTours />
		</Stack>
	);
};

export default withLayoutMain(Home);
