'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroPhotoMarquee from '@/components/HeroPhotoMarquee';
import { headerPhotos } from '@/content/header-photos';
import { siteConfig } from '@/content/site.config';
import { useI18n } from '@/lib/i18n';

const HeroHeader: React.FC = () => {
	const { t } = useI18n();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.2 }}
			className="relative overflow-hidden border-b border-cursor-border/60"
		>
			<div className="absolute inset-0 overflow-hidden">
				<HeroPhotoMarquee photos={headerPhotos} />
			</div>

			<div
				className="pointer-events-none absolute inset-0 z-[1]"
				style={{
					background:
						'linear-gradient(to bottom, var(--color-cursor-bg) 0%, transparent 22%, transparent 78%, var(--color-cursor-bg) 100%)',
				}}
			/>

			<div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center px-4 sm:px-6 pt-16 pb-16 md:pt-24 md:pb-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.35 }}
					className="max-w-3xl"
				>
					<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-cursor-text mb-4">
						{t('hero.title', { country: siteConfig.country })}
					</h1>
					<p className="text-base md:text-lg text-cursor-text-secondary max-w-2xl leading-relaxed mb-8">
						{t('hero.subtitle')}
					</p>
					<div className="flex flex-wrap gap-3">
						<a
							href="#upcoming"
							className="inline-flex items-center gap-2 bg-cursor-surface-raised text-cursor-text px-5 py-2.5 rounded-md border border-cursor-border hover:border-cursor-border-emphasis transition-colors text-sm font-medium"
						>
							{t('hero.viewEvents')}
							<ArrowRight className="w-4 h-4" aria-hidden="true" />
						</a>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default HeroHeader;
