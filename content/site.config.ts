// REPLACE: Update these values for your local Cursor community.
// REPLACE: Keep links and names community-specific.
export type SiteConfig = {
	communityName: string;
	communityNameLocal?: string;
	country: string;
	siteUrl: string;
	lumaUrl: string;
	instagramUrl?: string;
	xUrl?: string;
	discordUrl?: string;
	cursorCommunityUrl: string;
	defaultLocale: string;
	locales: string[];
	footerTagline: string;
};

export const siteConfig: SiteConfig = {
	communityName: 'Indonesia',
	country: 'Indonesia',
	siteUrl: 'https://www.cursorindonesia.com',
	lumaUrl: 'https://lu.ma/cursor-community',
	// REPLACE: Add your Discord invite link when ready.
	instagramUrl: 'https://www.instagram.com/cursorbali/',
	xUrl: 'https://x.com/cursorbali',
	discordUrl: undefined,
	cursorCommunityUrl: 'https://cursor.com/community',
	defaultLocale: 'en',
	locales: ['en'],
	footerTagline: 'Cursor Community in Indonesia',
};

export function getSiteUrl() {
	return process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;
}
