import Image from 'next/image';
import type { CafeMenuConfig } from '@/content/cafe-menu';

interface CafeMenuCardProps {
	config: CafeMenuConfig;
}

function MenuSection({ endpoint, options }: { endpoint: string; options: string[] }) {
	return (
		<section className="mt-5">
			<div className="flex items-baseline justify-between gap-3">
				<h2 className="text-[15px] font-semibold tracking-tight text-white">{endpoint}</h2>
				<span className="text-[13px] font-medium text-[#7cb87c]">200 OK</span>
			</div>
			<pre className="mt-2 text-[12px] leading-[1.55] text-white/95">
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
		<article className="cafe-menu-card relative mx-auto w-[105mm] min-h-[140mm] bg-black px-7 py-6 text-left font-mono">
			<div className="flex justify-start">
				<Image
					src="/cursor-logo.svg"
					alt="Cursor"
					width={88}
					height={21}
					className="h-[18px] w-auto"
					priority
				/>
			</div>

			<header className="mt-5 space-y-0.5 text-[10px] leading-relaxed text-[#c87850]">
				<p>GET MENU</p>
				<p>X-Powered-By: Cursor</p>
				<p>Content-Type: application/feeding+json</p>
				<p>Server: {config.server}</p>
			</header>

			<MenuSection endpoint="GET /food" options={config.food} />
			<MenuSection endpoint="GET /drinks" options={config.drinks} />
		</article>
	);
}
