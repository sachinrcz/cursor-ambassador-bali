import CafeMenuCard from '@/components/CafeMenuCard';
import CafeMenuPrintButton from '@/components/CafeMenuPrintButton';
import { cafeMenuConfig } from '@/content/cafe-menu';
import './cafemenu.css';

export const metadata = {
	title: 'Cafe Menu',
	robots: { index: false, follow: false },
};

export default function CafeMenuPage() {
	return (
		<div className="cafemenu-page">
			<CafeMenuPrintButton />
			<CafeMenuCard config={cafeMenuConfig} />
		</div>
	);
}
