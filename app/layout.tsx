import { connection } from 'next/server';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/i18n';
import { getDefaultSiteMetadata } from '@/lib/site-metadata';
import { siteConfig } from '@/content/site.config';
import './globals.css';

export const metadata = getDefaultSiteMetadata();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	await connection();

	return (
		<html lang={siteConfig.defaultLocale}>
			<body className="antialiased">
				<I18nProvider>{children}</I18nProvider>
				<Analytics />
			</body>
		</html>
	);
}
