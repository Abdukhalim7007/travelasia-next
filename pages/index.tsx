import { NextPage } from 'next';
import { Stack } from '@mui/material';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import Hero from '../libs/components/homepage/Hero';
import BookingStrip from '../libs/components/homepage/BookingStrip';
import Destinations from '../libs/components/homepage/Destinations';
import FeaturedTours from '../libs/components/homepage/FeaturedTours';
import WhyChoose from '../libs/components/homepage/WhyChoose';
import Testimonials from '../libs/components/homepage/Testimonials';
import Brands from '../libs/components/homepage/Brands';
import Newsletter from '../libs/components/homepage/Newsletter';

const Home: NextPage = () => {
	return (
		<Stack className="home-page">
			<Hero />
			<BookingStrip />
			<Destinations />
			<FeaturedTours />
			<WhyChoose />
			<Testimonials />
			<Brands />
			<Newsletter />
		</Stack>
	);
};

export default withLayoutMain(Home);
