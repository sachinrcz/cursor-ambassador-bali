'use client';

import React from 'react';
import Image from 'next/image';
import { partners } from '@/content/partners';
import { useI18n } from '@/lib/i18n';

const Partners: React.FC = () => {
	const { t } = useI18n();

	if (partners.length === 0) {
		return null;
	}

	return (
		<div className="mb-10">
			<p className="text-center text-[11px] uppercase tracking-[0.22em] text-cursor-text-muted mb-6">
				{t('footer.hostingPartners')}
			</p>

			<div className="rounded-2xl border border-cursor-border/80 bg-cursor-surface/40 px-4 py-6 md:px-8 md:py-8">
				<div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3 md:gap-5">
					{partners.map((partner) => (
						<a
							key={partner.name}
							href={partner.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-[4.25rem] w-[9.5rem] md:h-[5rem] md:w-[11rem] shrink-0 items-center justify-center rounded-xl border border-cursor-border/70 bg-cursor-bg-dark px-3 py-2.5 transition-all duration-300 hover:border-cursor-border-emphasis hover:bg-cursor-surface hover:scale-[1.02]"
							aria-label={partner.name}
						>
							<Image
								src={partner.logo}
								alt={partner.name}
								width={160}
								height={64}
								className="max-h-9 md:max-h-11 w-auto max-w-full object-contain"
								style={partner.maxHeight ? { maxHeight: partner.maxHeight } : undefined}
								sizes="(max-width: 768px) 28vw, 160px"
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Partners;
