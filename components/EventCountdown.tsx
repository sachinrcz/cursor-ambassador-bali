'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { useCountdown, parseEventDate } from '@/lib/useCountdown';

interface EventCountdownProps {
	date: string;
	startTime?: string;
}

const pad = (value: number) => String(value).padStart(2, '0');

const EventCountdown: React.FC<EventCountdownProps> = ({ date, startTime }) => {
	const { t } = useI18n();
	const target = parseEventDate(date, startTime);
	const { days, hours, minutes, seconds, isPast } = useCountdown(target);

	if (isPast) {
		return null;
	}

	const units = [
		{ value: days, label: t('home.countdown.days') },
		{ value: hours, label: t('home.countdown.hours') },
		{ value: minutes, label: t('home.countdown.minutes') },
		{ value: seconds, label: t('home.countdown.seconds') },
	];

	return (
		<div className="mb-4">
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{t('home.countdown.startsIn')}
			</p>
			<div className="flex gap-2 sm:gap-3">
				{units.map(({ value, label }) => (
					<div
						key={label}
						className="flex flex-col items-center min-w-[3.25rem] sm:min-w-[3.75rem] bg-cursor-bg/60 border border-cursor-border rounded-md px-2 py-2"
					>
						<span className="text-xl sm:text-2xl font-bold tabular-nums text-cursor-text leading-none">
							{pad(value)}
						</span>
						<span className="text-[10px] uppercase tracking-wider text-cursor-text-muted mt-1">
							{label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventCountdown;
