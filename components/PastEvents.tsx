'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { pastEvents } from '@/content/events';
import { useI18n } from '@/lib/i18n';

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const PREVIEW_PHOTO_COUNT = 4;

function getPreviewPhotos(event: (typeof pastEvents)[number]) {
	if (event.galleryImages && event.galleryImages.length > 0) {
		return event.galleryImages.slice(0, PREVIEW_PHOTO_COUNT);
	}

	return event.thumbnail ? [event.thumbnail] : [];
}

function getPreviewGridClass(photoCount: number) {
	if (photoCount <= 1) return '';
	if (photoCount === 2) return 'grid grid-cols-2 gap-1';
	if (photoCount === 3) return 'grid grid-cols-3 gap-1';
	if (photoCount === 4) return 'grid grid-cols-2 grid-rows-2 gap-1';
	return 'grid grid-cols-3 grid-rows-2 gap-1';
}

const PastEvents: React.FC = () => {
	const { t, locale } = useI18n();

	if (pastEvents.length === 0) {
		return null;
	}

	return (
		<motion.section
			id="recaps"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{t('home.pastEvents')}
			</p>
			<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-6">
				{t('home.pastEventsHeading')}
			</h2>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-50px' }}
				className="space-y-6 -mx-3 sm:mx-0"
			>
				{pastEvents.map((event) => {
					if (!event.recapPath) return null;

					const displayDate = new Date(`${event.date}T00:00:00`).toLocaleDateString(
						locale === 'en' ? 'en-US' : locale,
						{
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						},
					);

					const previewPhotos = getPreviewPhotos(event);
					const remainingPhotoCount = Math.max(
						(event.galleryImages?.length ?? previewPhotos.length) - previewPhotos.length,
						0,
					);

					return (
						<motion.div key={event.id} variants={itemVariants}>
							<Link href={event.recapPath} className="block group">
								<div className="relative bg-[#1B1913] border border-cursor-border rounded-none sm:rounded-md overflow-hidden transition-all duration-300 hover:border-[#f54e00]/50 hover:shadow-[0_0_30px_rgba(245,78,0,0.12)]">
									{/* Glow backdrop */}
									<div className="pointer-events-none absolute -inset-px sm:rounded-md bg-[radial-gradient(ellipse_at_bottom,rgba(245,78,0,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
									{previewPhotos.length > 0 ? (
										<div className="relative">
											<div
												className={`aspect-[2/1] overflow-hidden ${getPreviewGridClass(previewPhotos.length)}`}
											>
												{previewPhotos.map((img, i) => (
													<div key={`${img}-${i}`} className="relative min-h-0">
														<Image
															src={img}
															alt={i === 0 ? event.title : ''}
															fill
															className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
															sizes="(max-width: 768px) 33vw, 16vw"
														/>
														{i === previewPhotos.length - 1 && remainingPhotoCount > 0 ? (
															<div className="absolute inset-0 flex items-center justify-center bg-black/55 text-sm font-medium text-white">
																+{remainingPhotoCount} more
															</div>
														) : null}
													</div>
												))}
											</div>
											{event.host ? (
												<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
													<Image
														src={event.host.logo}
														alt={event.host.name}
														width={20}
														height={20}
														className="rounded-full"
													/>
													<span className="text-xs text-white">{event.host.name}</span>
												</div>
											) : null}
										</div>
									) : null}

									<div className="px-5 py-4">
										<h3 className="text-lg text-cursor-text font-medium mb-1.5">{event.title}</h3>
										<div className="flex flex-wrap items-center gap-3 text-sm text-cursor-text-muted mb-1.5">
											<div className="flex items-center gap-1.5">
												<Calendar className="w-4 h-4" />
												<span>{displayDate}</span>
											</div>
											{event.attendees ? (
												<div className="flex items-center gap-1.5">
													<Users className="w-4 h-4" />
													<span>
														{t('home.attendees', { count: String(event.attendees) })}
													</span>
												</div>
											) : null}
										</div>
										<div className="flex items-center gap-2 text-sm text-[#f54e00]">
											<span>{t('home.viewRecap')}</span>
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
										</div>
									</div>
								</div>
							</Link>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.section>
	);
};

export default PastEvents;
