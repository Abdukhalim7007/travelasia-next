import { useEffect, useState } from 'react';

const useDeviceDetect = (): string => {
	const [device, setDevice] = useState('desktop');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userAgent = navigator.userAgent;
			const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
			setDevice(isMobile ? 'mobile' : 'desktop');
		}
	}, []);

	return device;
};

export default useDeviceDetect;
