import type { Metadata } from 'next';
import { siteConfig, getSiteUrl } from '@/content/site.config';

function getTwitterHandle(): string | undefined {
	if (!siteConfig.xUrl) return undefined;

	try {
		const handle = new URL(siteConfig.xUrl).pathname.replace(/^\//, '').split('/')[0];
		return handle || undefined;
	} catch {
		return undefined;
	}
}

export function getDefaultSiteMetadata(): Metadata {
	const siteUrl = getSiteUrl();
	const { seoTitle, seoDescription, seoKeywords } = siteConfig;
	const twitterHandle = getTwitterHandle();

	return {
		metadataBase: new URL(siteUrl),
		title: {
			default: seoTitle,
			template: `%s | ${seoTitle}`,
		},
		description: seoDescription,
		keywords: seoKeywords,
		applicationName: seoTitle,
		authors: [{ name: seoTitle, url: siteUrl }],
		creator: 'Cursor',
		publisher: 'Cursor',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		alternates: {
			canonical: siteUrl,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		openGraph: {
			type: 'website',
			locale: 'en_ID',
			url: siteUrl,
			siteName: seoTitle,
			title: seoTitle,
			description: seoDescription,
		},
		twitter: {
			card: 'summary_large_image',
			title: seoTitle,
			description: seoDescription,
			...(twitterHandle
				? {
						site: `@${twitterHandle}`,
						creator: `@${twitterHandle}`,
					}
				: {}),
		},
		category: 'technology',
	};
}

export function getRecapMetadata({
	title,
	description,
	slug,
	image,
	imageAlt,
}: {
	title: string;
	description: string;
	slug: string;
	image?: string;
	imageAlt?: string;
}): Metadata {
	const siteUrl = getSiteUrl();
	const pageUrl = `${siteUrl}/recaps/${slug}`;
	const twitterHandle = getTwitterHandle();

	return {
		title,
		description,
		alternates: {
			canonical: pageUrl,
		},
		openGraph: {
			title,
			description,
			type: 'article',
			url: pageUrl,
			...(image ? { images: [{ url: image, alt: imageAlt ?? title }] } : {}),
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			...(image ? { images: [image] } : {}),
			...(twitterHandle
				? {
						site: `@${twitterHandle}`,
						creator: `@${twitterHandle}`,
					}
				: {}),
		},
	};
}
