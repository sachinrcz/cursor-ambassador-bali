import { CursorEvent } from '@/lib/types';

// REPLACE: Replace all sample events, locations, and Luma URLs with real community events.
export const events: CursorEvent[] = [
	{
		id: 'cursor-bali-meetup-june-2026',
		title: 'Cursor AI for Beginners',
		date: '2026-06-03',
		displayDate: 'June 03, 2026',
		location: 'Bali, Indonesia',
		lumaUrl: 'https://luma.com/zj7cwg7l',
		status: 'upcoming',
	},
	{
		id: 'cursor-jakarta-meetup-july-2026',
		title: 'Cursor Meetup Jakarta',
		date: '2026-07-04',
		displayDate: 'July 04, 2026',
		location: 'Jakarta, Indonesia',
		lumaUrl: 'https://luma.com/4qe99i6e',
		status: 'upcoming',
	},
	{
		id: 'cursor-jakarta-hackathon-august-2026',
		title: 'Cursor Hackathon Indonesia',
		date: '2026-08-14',
		displayDate: 'August 14, 2026',
		location: 'Jakarta, Indonesia',
		lumaUrl: 'https://luma.com/d4b0eg4v',
		status: 'upcoming',
	},
	{
		id: 'cursor-bali-hackathon-may-2026',
		title: 'Cursor Bali Hackathon',
		date: '2026-05-09',
		displayDate: 'May 09, 2026',
		attendees: 43,
		location: 'Bali, Indonesia',
		recapPath: '/recaps/cursor-bali-hackathon-may-2026',
		thumbnail: '/images/events/cursor-Bali_01.jpg',
		galleryImages: ['/images/events/cursor-Bali_02.jpg', '/images/events/cursor-Bali_03.jpg', '/images/events/cursor-Bali_04.jpg'],
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
