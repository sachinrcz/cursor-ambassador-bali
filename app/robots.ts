import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/content/site.config';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = getSiteUrl();

	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
