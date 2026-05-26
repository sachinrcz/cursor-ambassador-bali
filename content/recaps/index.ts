import { exampleEventRecap } from '@/content/recaps/example-event';
import { cursorBaliHackathonMay2026Recap } from '@/content/recaps/cursor-bali-hackathon-may-2026';
import { RecapData } from '@/lib/types';

export const recapsBySlug: Record<string, RecapData> = {
	[exampleEventRecap.slug]: exampleEventRecap,
	[cursorBaliHackathonMay2026Recap.slug]: cursorBaliHackathonMay2026Recap,
};
