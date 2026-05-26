import { RecapData } from '@/lib/types';

const cdnPhoto = (filename: string, alt: string) => ({
	src: `https://cdn.balisquad.com/cursor/cursor-bali-may/${filename}`,
	alt,
});

export const cursorBaliHackathonMay2026Recap: RecapData = {
	slug: 'cursor-bali-hackathon-may-2026',
	title: 'Cursor Bali Hackathon',
	date: 'May 09, 2026',
	attendees: 39,
	summary: [
		'Our very first Cursor event in Bali was an incredible success. The event sold out within a couple of days, and the energy throughout the day was amazing.',
		'Out of 40 registered attendees, 31 showed up, around a 75% attendance rate, with several more joining from the waitlist. In total, we had 39 participants, a support team of 6, and many people stayed afterward to network and hang out. We completely exceeded the venue’s intended capacity of 30 people.',
		'Despite having only 2.5 hours, participants shipped an impressive range of projects across 13 teams.',
		'One key takeaway was that team formation and judging criteria can be improved further. For future events, we’re planning to introduce more structured scoring using metrics like deployment status, audience votes, clap-o-meter scores, and overall execution quality.',
		'Everyone was pumped up.People were already asking when the next event would happen before this one even ended. Bali is clearly ready for more builder events, and we’re also exploring the idea of organizing a Cafe Cursor to bring more of the non-tech crowd into the community.',
	],
	host: {
		name: 'Bukithub Coworking Space',
		logo: '/images/partners/bukithub.jpg',
		url: 'https://instagram.com/bukithub',
	},
	projects: [
		{
			name: 'Posture (Winner)',
			description:
				'Native macOS offline posture app that detects posture and nudges users to correct it.',
			author: 'Bishal Jena',
			url: 'https://github.com/BishalJena/Posture',
		},
		{
			name: 'Launch Sim (Runner-up)',
			description: 'Live real-world simulation tool to test a product before launch.',
			author: 'Kenneth Muyoyo',
			url: 'https://github.com/kennethmuyoyo/launch-sim',
		},
		{
			name: 'AI Travel App',
			description: 'Shows the mood of locations using real-time data.',
			url: 'https://github.com/abui-am/semeton',
		},
		{
			name: 'Bali Accommodation Suggestion App',
			description: 'Helps visitors discover places to stay across Bali.',
			url: 'https://github.com/team-4-HNP/HNP-frontend',
		},
	],
	highlights: [
		{
			quote: 'When is the next event?',
			author: 'Attendees — asked before the hackathon even ended',
		},
	],
	photos: [
		cdnPhoto('IMG_9033.jpg', 'Cursor Bali Hackathon group photo'),
		cdnPhoto('IMG_9040.jpg', 'Participants building during the hackathon'),
		cdnPhoto('IMG_9047.jpg', 'Cursor Bali Hackathon workshop moment'),
		cdnPhoto('IMG_9049.jpg', 'Community members collaborating at the event'),
		cdnPhoto('IMG_9050.jpg', 'Cursor Bali Hackathon community moment'),
		cdnPhoto('IMG_9051.jpg', 'Hackathon teams working together'),
		cdnPhoto('IMG_9052.jpg', 'Cursor Bali Hackathon event scene'),
		cdnPhoto('IMG_9096.jpg', 'Participants presenting their projects'),
		cdnPhoto('IMG_9100.jpg', 'Cursor Bali Hackathon audience'),
		cdnPhoto('IMG_9105.jpg', 'Community networking at the hackathon'),
		cdnPhoto('IMG_9124.jpg', 'Cursor Bali Hackathon demo time'),
		cdnPhoto('IMG_9127.jpg', 'Builders collaborating at Bukithub'),
		cdnPhoto('IMG_9129.jpg', 'Cursor Bali Hackathon team photo'),
		cdnPhoto('IMG_9133.jpg', 'Event participants and organizers'),
		cdnPhoto('IMG_9139.jpg', 'Cursor Bali Hackathon closing moments'),
	],
};
