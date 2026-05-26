import { connection } from 'next/server';
import HomePage from '@/components/HomePage';
import JsonLd from '@/components/JsonLd';
import { buildHomeJsonLd } from '@/lib/home-jsonld';

export default async function Page() {
	await connection();

	return (
		<>
			<JsonLd data={buildHomeJsonLd()} />
			<HomePage />
		</>
	);
}
