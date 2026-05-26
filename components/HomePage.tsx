'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroHeader from '@/components/HeroHeader';
import RecentEventsGallery from '@/components/RecentEventsGallery';
import AmbassadorSection from '@/components/AmbassadorSection';
import JoinCommunitySection from '@/components/JoinCommunitySection';
import UpcomingEvents from '@/components/UpcomingEvents';
import PastEvents from '@/components/PastEvents';
import SectionDivider from '@/components/SectionDivider';
import Footer from '@/components/Footer';
import { headerPhotos } from '@/content/header-photos';

const HomePage: React.FC = () => {
	return (
		<main className="min-h-screen bg-cursor-bg text-cursor-text scroll-smooth">
			<Navbar />
			<HeroHeader />
			<RecentEventsGallery photos={headerPhotos} />

			<div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
				<UpcomingEvents />
				<SectionDivider />
				<PastEvents />
				<SectionDivider />
				<JoinCommunitySection />
				<SectionDivider />
				<AmbassadorSection />
				<Footer />
			</div>
		</main>
	);
};

export default HomePage;
