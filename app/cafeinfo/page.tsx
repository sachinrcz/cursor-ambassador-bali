import CafeInfoCard from '@/components/CafeInfoCard';
import CafeMenuPrintButton from '@/components/CafeMenuPrintButton';
import { cafeInfoConfig } from '@/content/cafe-info';
import '../cafeinfo/cafeinfo.css';

export const metadata = {
	title: 'Cafe Cursor Info',
	robots: { index: false, follow: false },
};

export default function CafeInfoPage() {
	return (
		<div className="cafemenu-page">
			<CafeMenuPrintButton label="Print info" />
			<CafeInfoCard config={cafeInfoConfig} />
		</div>
	);
}
