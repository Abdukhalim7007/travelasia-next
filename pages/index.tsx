import { NextPage } from 'next';
import { Stack } from '@mui/material';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import Hero from '../libs/components/homepage/Hero';
import WhyChoose from '../libs/components/homepage/WhyChoose';

const Home: NextPage = () => {
	return (
		<Stack className="home-page">
			<Hero />
			<WhyChoose />
		</Stack>
	);
};

export default withLayoutMain(Home);
