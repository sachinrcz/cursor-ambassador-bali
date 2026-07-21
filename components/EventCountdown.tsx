'use client';

import React, { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

type CountdownParts = {
	total: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

function getCountdown(targetDate: string, startTime?: string): CountdownParts {
	const time = startTime ?? '00:00:00';
	const normalizedTime = time.length === 5 ? `${time}:00` : time;
	const target = new Date(`${targetDate}T${normalizedTime}`).getTime();
	const diff = Math.max(0, target - Date.now());

	return {
		total: diff,
		days: Math.floor(diff / (1000 * 60 * 60 * 24)),
		hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((diff / (1000 * 60)) % 60),
		seconds: Math.floor((diff / 1000) % 60),
	};
}

function pad(value: number) {
	return value.toString().padStart(2, '0');
}

type EventCountdownProps = {
	date: string;
	startTime?: string;
};

const EventCountdown: React.FC<EventCountdownProps> = ({ date, startTime }) => {
	const { t } = useI18n();
	const [remaining, setRemaining] = useState<CountdownParts>(() =>
		getCountdown(date, startTime),
	);

	useEffect(() => {
		setRemaining(getCountdown(date, startTime));

		const interval = window.setInterval(() => {
			setRemaining(getCountdown(date, startTime));
		}, 1000);

		return () => window.clearInterval(interval);
	}, [date, startTime]);

	if (remaining.total === 0) {
		return (
			<p className="text-sm font-medium text-cursor-accent-blue mb-4">{t('home.eventToday')}</p>
		);
	}

	const units = [
		{ label: t('home.countdownDays'), value: remaining.days },
		{ label: t('home.countdownHours'), value: remaining.hours },
		{ label: t('home.countdownMinutes'), value: remaining.minutes },
		{ label: t('home.countdownSeconds'), value: remaining.seconds },
	];

	return (
		<div className="mb-4" aria-live="polite">
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-3">
				{t('home.countdownLabel')}
			</p>
			<div className="grid grid-cols-4 gap-2 max-w-md">
				{units.map((unit) => (
					<div
						key={unit.label}
						className="rounded-md border border-cursor-border bg-cursor-bg/60 px-2 py-2.5 text-center"
					>
						<div className="font-mono text-xl md:text-2xl font-bold tabular-nums text-cursor-text">
							{pad(unit.value)}
						</div>
						<div className="mt-1 text-[10px] uppercase tracking-wider text-cursor-text-muted">
							{unit.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventCountdown;
