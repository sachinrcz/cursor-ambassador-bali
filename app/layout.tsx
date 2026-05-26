import type { Metadata } from 'next';
import { connection } from 'next/server';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/i18n';
import { siteConfig, getSiteUrl } from '@/content/site.config';
import './globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(getSiteUrl()),
	title: `${siteConfig.communityName} | Cursor Ambassador Site`,
	description: 'Reusable Cursor Ambassador website template for local communities.',
	openGraph: {
		title: siteConfig.communityName,
		description: 'Reusable Cursor Ambassador website template for local communities.',
		type: 'website',
	},
};

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
