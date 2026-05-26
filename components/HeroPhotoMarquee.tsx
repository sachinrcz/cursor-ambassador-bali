'use client';

import React from 'react';
import Image from 'next/image';
import { HeaderPhoto } from '@/lib/types';

type MarqueeRow = {
	photos: HeaderPhoto[];
	direction: 'left' | 'right';
	duration: number;
};

type HeroPhotoMarqueeProps = {
	photos: HeaderPhoto[];
};

function buildRows(photos: HeaderPhoto[]): MarqueeRow[] {
	const rotate = (offset: number) => [...photos.slice(offset), ...photos.slice(0, offset)];

	return [
		{ photos: rotate(0), direction: 'right', duration: 60 },
		{ photos: rotate(2), direction: 'left', duration: 75 },
		{ photos: rotate(4), direction: 'right', duration: 90 },
	];
}

function MarqueeStrip({ row }: { row: MarqueeRow }) {
	const loop = [...row.photos, ...row.photos];

	return (
		<div className="relative min-h-[7.25rem] md:min-h-[9rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
			<div
				className={`hero-strip flex w-max gap-2 ${
					row.direction === 'left' ? 'hero-marquee-strip--left' : 'hero-marquee-strip--right'
				}`}
				style={{ ['--marquee-duration' as string]: `${row.duration}s` }}
			>
				{loop.map((photo, index) => (
					<div
						key={`${photo.src}-${index}`}
						className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl md:h-36 md:w-52"
					>
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 176px, 208px"
							priority={Boolean(photo.priority) && index < row.photos.length}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

const HeroPhotoMarquee: React.FC<HeroPhotoMarqueeProps> = ({ photos }) => {
	const rows = buildRows(photos);

	return (
		<div className="absolute inset-0 flex flex-col justify-center gap-1.5 py-3 opacity-[0.28] [filter:saturate(0.8)_brightness(0.85)]">
			{rows.map((row, index) => (
				<MarqueeStrip key={index} row={row} />
			))}
		</div>
	);
};

export default HeroPhotoMarquee;
