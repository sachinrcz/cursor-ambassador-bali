import { siteConfig } from '@/content/site.config';
import { upcomingEvents } from '@/content/events';

export function buildHomeJsonLd() {
	const org = {
		'@type': 'Organization',
		name: siteConfig.communityName,
		url: siteConfig.cursorCommunityUrl,
	};

	const eventItems = upcomingEvents.map((event) => ({
		'@type': 'Event',
		name: event.title,
		startDate: event.date,
		location: {
			'@type': 'Place',
			name: event.location,
		},
		organizer: org,
		...(event.lumaUrl ? { url: event.lumaUrl } : {}),
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		eventStatus: 'https://schema.org/EventScheduled',
	}));

	return {
		'@context': 'https://schema.org',
		'@graph': [org, ...eventItems],
	};
}
