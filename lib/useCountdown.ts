'use client';

import { useEffect, useState } from 'react';

export interface CountdownValues {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	isPast: boolean;
}

function getCountdownValues(target: Date): CountdownValues {
	const diff = target.getTime() - Date.now();

	if (diff <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
	}

	const totalSeconds = Math.floor(diff / 1000);

	return {
		days: Math.floor(totalSeconds / 86400),
		hours: Math.floor((totalSeconds % 86400) / 3600),
		minutes: Math.floor((totalSeconds % 3600) / 60),
		seconds: totalSeconds % 60,
		isPast: false,
	};
}

export function parseEventDate(date: string, startTime?: string): Date {
	if (startTime) {
		return new Date(`${date}T${startTime}`);
	}

	return new Date(`${date}T00:00:00`);
}

export function useCountdown(target: Date): CountdownValues {
	const [values, setValues] = useState<CountdownValues>(() => getCountdownValues(target));

	useEffect(() => {
		setValues(getCountdownValues(target));

		const interval = setInterval(() => {
			setValues(getCountdownValues(target));
		}, 1000);

		return () => clearInterval(interval);
	}, [target.getTime()]);

	return values;
}
