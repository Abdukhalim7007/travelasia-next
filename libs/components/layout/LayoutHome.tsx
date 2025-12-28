import React, { useEffect } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import Head from 'next/head';
import Top from '../common/Top';
import Footer from '../common/Footer';
import { Stack } from '@mui/material';

const withLayoutMain = (Component: any) => {
	return (props: any) => {
		const device = useDeviceDetect();

		if (device === 'mobile') {
			return (
				<>
					<Head>
						<title>TravelAsia</title>
						<meta name={'title'} content={`TravelAsia`} />
					</Head>
					<Stack id="mobile-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		} else {
			return (
				<>
					<Head>
						<title>TravelAsia</title>
						<meta name={'title'} content={`TravelAsia`} />
					</Head>
					<Stack id="pc-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		}
	};
};

export default withLayoutMain;
