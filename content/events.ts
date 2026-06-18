import { CursorEvent } from '@/lib/types';

// REPLACE: Replace all sample events, locations, and Luma URLs with real community events.
export const events: CursorEvent[] = [
	
	{
		id: 'cursor-bali-meetup-july-2026',
		title: 'Cursor Meetup - AI Agent 101',
		date: '2026-07-08',
		displayDate: 'July 08, 2026',
		location: 'Bali, Indonesia',
		lumaUrl: 'https://luma.com/cursor-jo24',
		status: 'upcoming',
	},	
	{
		id: 'cursor-jakarta-meetup-august-2026',
		title: 'Cursor Meetup Jakarta',
		date: '2026-08-01',
		displayDate: 'August 01, 2026',
		location: 'Jakarta, Indonesia',
		lumaUrl: 'https://luma.com/4qe99i6e',
		status: 'upcoming',
	},
	{
		id: 'cursor-jakarta-hackathon-september-2026',
		title: 'Cursor Hackathon Indonesia',
		date: '2026-09-10',
		displayDate: 'September 10, 2026',
		location: 'Jakarta, Indonesia',
		lumaUrl: 'https://luma.com/4qe99i6e',
		status: 'upcoming',
	},
	{
		id: 'cursor-bali-meetup-june-2026',
		title: 'Cursor AI for Beginners',
		date: '2026-06-03',
		displayDate: 'June 03, 2026',
		attendees: 25,
		location: 'Bali, Indonesia',
		lumaUrl: 'https://luma.com/zj7cwg7l',
		recapPath: '/recaps/cursor-bali-meetup-june-2026',
		thumbnail: 'https://cdn.balisquad.com/cursor/cursor-bali-june/image (1).png',
		galleryImages: [
			'https://cdn.balisquad.com/cursor/cursor-bali-june/image (1).png',
			'https://cdn.balisquad.com/cursor/cursor-bali-june/IMG_0614.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-june/image (3).png',
			'https://cdn.balisquad.com/cursor/cursor-bali-june/image (4).png',
			'https://cdn.balisquad.com/cursor/cursor-bali-june/image (5).png',
			'https://cdn.balisquad.com/cursor/cursor-bali-june/image.png',
		],
		status: 'past',
	},
	
	{
		id: 'cursor-bali-hackathon-may-2026',
		title: 'Cursor Bali Hackathon',
		date: '2026-05-09',
		displayDate: 'May 09, 2026',
		attendees: 39,
		location: 'Bali, Indonesia',
		recapPath: '/recaps/cursor-bali-hackathon-may-2026',
		thumbnail: 'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9033.jpg',
		galleryImages: [
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9033.jpg', 
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9040.jpg', 
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9047.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9049.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9050.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9051.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9052.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9096.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9100.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9105.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9124.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9127.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9129.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9133.jpg',
			'https://cdn.balisquad.com/cursor/cursor-bali-may/IMG_9139.jpg',
		],
		status: 'past',
	},
	
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
