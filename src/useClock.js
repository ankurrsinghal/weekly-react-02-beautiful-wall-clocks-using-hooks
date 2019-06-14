import { useEffect, useState } from "react";
import getTimeByCity from './getTimeByCity'

const useClock = (city = 'new-delhi') => {
	const [time, setTime] = useState(getTimeByCity(city));
  
    useEffect(() => {
		const id = setInterval(() => {
			setTime(() => getTimeByCity(city));
		}, 1000);
		return () => clearInterval(id);
	}, []);
  
	return time;
}

export default useClock;