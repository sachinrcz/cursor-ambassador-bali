import Image from 'next/image';
import type { CafeMenuConfig } from '@/content/cafe-menu';

interface CafeMenuCardProps {
	config: CafeMenuConfig;
}

function MenuSection({
	endpoint,
	options,
}: {
	endpoint: string;
	options: string[];
}) {
	return (
		<section className="cafe-menu-section">
			<div className="flex items-baseline justify-between gap-2">
				<h2 className="cafe-menu-endpoint">{endpoint}</h2>
				<span className="cafe-menu-status">200 OK</span>
			</div>
			<pre className="cafe-menu-json">
				<span className="text-white/45">{'{'}</span>
				{'\n'}
				<span className="text-white/70">{'  "options": ['}</span>
				{'\n'}
				{options.map((item) => (
					<span key={item}>
						<span className="text-white/70">{'    "'}</span>
						{item}
						<span className="text-white/70">{`",`}</span>
						{'\n'}
					</span>
				))}
				<span className="text-white/70">{'  ]'}</span>
				{'\n'}
				<span className="text-white/45">{'}'}</span>
			</pre>
		</section>
	);
}

export default function CafeMenuCard({ config }: CafeMenuCardProps) {
	return (
		<article className="cafe-menu-card relative mx-auto bg-black text-left font-mono">
			<div className="flex justify-start">
				<Image
					src="/cursor-logo.svg"
					alt="Cursor"
					width={120}
					height={29}
					className="cafe-menu-logo w-auto"
					priority
				/>
			</div>

			<div className="cafe-menu-content">
				<header className="cafe-menu-meta space-y-0">
					<p>GET MENU</p>
					<p>X-Powered-By: Cursor</p>
					<p>Content-Type: application/feeding+json</p>
					<p>Server: {config.server}</p>
				</header>

				<MenuSection endpoint="GET /snack" options={config.snack} />
				<MenuSection endpoint="GET /tea" options={config.tea} />
				<MenuSection endpoint="GET /coffee" options={config.coffee} />
			</div>
		</article>
	);
}
