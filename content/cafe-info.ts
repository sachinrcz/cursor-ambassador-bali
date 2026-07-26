export interface CafeInfoStep {
	number: string;
	title: string;
	description: string;
	url?: string;
}

export interface CafeInfoLink {
	label: string;
	url: string;
}

export interface CafeInfoPartner {
	name: string;
	role?: string;
	logo?: string;
}

export interface CafeInfoConfig {
	welcome: string;
	getStarted: CafeInfoStep[];
	usefulLinks: CafeInfoLink[];
	partners: CafeInfoPartner[];
}

export const cafeInfoConfig: CafeInfoConfig = {
	welcome: 'Welcome to Cafe Cursor',
	getStarted: [
		{
			number: '01',
			title: 'Luma Check-in',
			description: 'Make sure you have been checked in at Luma by Team Admin.',
		},
		{
			number: '02',
			title: 'Download Cursor',
			description: 'Download and install Cursor to redeem credits.',
			url: 'https://cursor.com/download',
		},
	],
	usefulLinks: [
		{
			label: 'Cursor Bali',
			url: 'https://balisquad.com/page/cursor-bali',
		},
		{
			label: 'Cursor Community',
			url: 'https://luma.com/cursorcommunity',
		},
		{
			label: 'BaliSquad Instagram',
			url: 'https://instagram.com/balisquad.id',
		},
		{
			label: 'Tech & Enterpreneur Group',
			url: 'https://chat.whatsapp.com/JDdMOgHyJm4EQJpTmxkiVs',
		},
	],
	partners: [
		{
			name: 'BaliSquad',
			logo: '/images/partners/balisquad-logo.svg',
		},
		{
			name: 'Bukithub Coworking',
			logo: '/images/partners/bukithub.jpg',
		},
	],
};
