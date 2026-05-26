'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';
import { upcomingEvents } from '@/content/events';

function XIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);
}

function DiscordIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
		</svg>
	);
}

const linkClassName =
	'inline-flex items-center gap-2 bg-cursor-surface-raised text-cursor-text px-5 py-2.5 rounded-md border border-cursor-border hover:border-cursor-border-emphasis transition-colors text-sm font-medium';

const JoinCommunitySection: React.FC = () => {
	const { t } = useI18n();
	const communityLabel = `Cursor ${siteConfig.country}`;
	const nextEvent = upcomingEvents[0];

	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16"
		>
			<div className="bg-[#1B1913] border border-cursor-border rounded-lg p-6 sm:p-8 text-center">
				<h2 className="text-xl md:text-2xl font-semibold text-cursor-text mb-2">
					{t('joinCommunity.heading')}
				</h2>
				<p className="text-sm text-cursor-text-muted mb-6 max-w-lg mx-auto">
					{t('joinCommunity.subtitle', { communityName: communityLabel })}
				</p>

				<div className="flex flex-wrap justify-center gap-3">
					{siteConfig.instagramUrl ? (
						<a
							href={siteConfig.instagramUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassName}
						>
							<Instagram className="w-4 h-4" aria-hidden="true" />
							{t('joinCommunity.instagram')}
						</a>
					) : null}

					{siteConfig.xUrl ? (
						<a
							href={siteConfig.xUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassName}
						>
							<XIcon className="w-4 h-4" />
							{t('joinCommunity.x')}
						</a>
					) : null}

					{siteConfig.discordUrl ? (
						<a
							href={siteConfig.discordUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassName}
						>
							<DiscordIcon className="w-4 h-4" />
							{t('joinCommunity.discord')}
						</a>
					) : null}

					{nextEvent?.lumaUrl ? (
						<a
							href={nextEvent.lumaUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-cursor-text-secondary hover:text-cursor-text px-5 py-2.5 rounded-md border border-cursor-border hover:border-cursor-border-emphasis transition-colors text-sm font-medium"
						>
							{t('joinCommunity.joinNextEvent')}
							<ArrowRight className="w-4 h-4" aria-hidden="true" />
						</a>
					) : null}
				</div>
			</div>
		</motion.section>
	);
};

export default JoinCommunitySection;
