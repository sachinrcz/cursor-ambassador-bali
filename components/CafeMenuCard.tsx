import Image from 'next/image';
import type { CafeMenuConfig } from '@/content/cafe-menu';

interface CafeMenuCardProps {
	config: CafeMenuConfig;
}

function MenuSection({
	endpoint,
	options,
	className,
}: {
	endpoint: string;
	options: string[];
	className?: string;
}) {
	return (
		<section className={`cafe-menu-section${className ? ` ${className}` : ''}`}>
			<div className="flex items-baseline justify-between gap-2">
				<h2 className="text-[11px] font-semibold tracking-tight text-white">{endpoint}</h2>
				<span className="text-[10px] font-medium text-[#7cb87c]">200 OK</span>
			</div>
			<pre className="mt-1 text-[9px] leading-[1.4] text-white/95">
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
		<article className="cafe-menu-card relative mx-auto w-[105mm] bg-black px-5 py-4 text-left font-mono">
			<div className="flex justify-start">
				<Image
					src="/cursor-logo.svg"
					alt="Cursor"
					width={88}
					height={21}
					className="h-[14px] w-auto"
					priority
				/>
			</div>

			<header className="mt-2.5 space-y-0 text-[7.5px] leading-[1.35] text-[#c87850]">
				<p>GET MENU</p>
				<p>X-Powered-By: Cursor</p>
				<p>Content-Type: application/feeding+json</p>
				<p>Server: {config.server}</p>
			</header>

			<MenuSection endpoint="GET /food" options={config.food} className="mt-4" />
			<MenuSection endpoint="GET /tea" options={config.tea} />
			<MenuSection endpoint="GET /coffee" options={config.coffee} />
		</article>
	);
}
