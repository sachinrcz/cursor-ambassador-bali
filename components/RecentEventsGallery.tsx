'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeaderPhoto } from '@/lib/types';
import { useI18n } from '@/lib/i18n';

type MarqueeRowConfig = {
	photos: HeaderPhoto[];
	direction: 'left' | 'right';
	duration: number;
};

type RecentEventsGalleryProps = {
	photos: HeaderPhoto[];
};

function buildRows(photos: HeaderPhoto[]): MarqueeRowConfig[] {
	const rotate = (offset: number) => [...photos.slice(offset), ...photos.slice(0, offset)];

	return [
		{ photos: rotate(0), direction: 'left', duration: 95 },
		{ photos: rotate(3), direction: 'right', duration: 115 },
	];
}

function GalleryMarqueeRow({ row }: { row: MarqueeRowConfig }) {
	const loop = [...row.photos, ...row.photos];

	return (
		<div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] py-1">
			<div
				className={`events-strip flex w-max gap-4 ${
					row.direction === 'left' ? 'hero-marquee-strip--left' : 'hero-marquee-strip--right'
				}`}
				style={{ ['--marquee-duration' as string]: `${row.duration}s` }}
			>
				{loop.map((photo, index) => (
					<div
						key={`${photo.src}-${index}`}
						className="relative h-36 w-[13.5rem] shrink-0 overflow-hidden rounded-2xl border border-cursor-border/50 bg-cursor-bg-dark shadow-[0_12px_40px_-20px_rgba(0,0,0,0.75)] md:h-44 md:w-[17rem]"
					>
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							className="object-cover transition-transform duration-500 hover:scale-[1.03]"
							sizes="(max-width: 768px) 216px, 272px"
							priority={Boolean(photo.priority) && index < row.photos.length}
						/>
						<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.06]" />
					</div>
				))}
			</div>
		</div>
	);
}

const RecentEventsGallery: React.FC<RecentEventsGalleryProps> = ({ photos }) => {
	const { t } = useI18n();
	const rows = buildRows(photos);

	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.5 }}
			className="border-b border-cursor-border/60"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 md:pt-16">
				<p className="font-cursor text-[11px] uppercase tracking-[0.22em] text-cursor-accent-blue">
					{t('recentEvents.eyebrow')}
				</p>
				<h2 className="mt-2 font-cursor text-xl font-semibold tracking-tight text-cursor-text md:text-2xl">
					{t('recentEvents.heading')}
				</h2>
				<p className="mt-2 max-w-xl text-sm leading-relaxed text-cursor-text-muted">
					{t('recentEvents.subtitle')}
				</p>
			</div>

			<div className="relative z-0 mt-8 space-y-4 pb-14 md:mt-10 md:pb-16">
				{rows.map((row, index) => (
					<GalleryMarqueeRow key={index} row={row} />
				))}
			</div>
		</motion.section>
	);
};

export default RecentEventsGallery;
