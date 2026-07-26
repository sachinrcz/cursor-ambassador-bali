import Image from 'next/image';
import CafeInfoQrCode from '@/components/CafeInfoQrCode';
import type { CafeInfoConfig } from '@/content/cafe-info';

interface CafeInfoCardProps {
	config: CafeInfoConfig;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="text-[11px] uppercase tracking-[0.2em] text-white/45">{children}</h2>
	);
}

function DisplayUrl({ url }: { url: string }) {
	const parts = url.replace(/^https?:\/\//, '').split('/');

	return (
		<p className="mt-1 text-[9px] leading-snug text-white/45">
			{parts.map((part, index) => (
				<span key={`${part}-${index}`}>
					{index > 0 ? (
						<>
							/
							<wbr />
						</>
					) : null}
					{part}
				</span>
			))}
		</p>
	);
}

export default function CafeInfoCard({ config }: CafeInfoCardProps) {
	const { welcome, getStarted, usefulLinks, partners } = config;

	return (
		<article className="cafe-info-card relative mx-auto flex w-[148mm] min-h-[210mm] flex-col bg-black px-8 py-7 text-left font-sans">
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

			<header className="mt-6 border-b border-white/10 pb-5">
				<h1 className="text-[24px] font-bold leading-tight tracking-tight text-white">{welcome}</h1>
			</header>

			<section className="mt-5 border-b border-white/10 pb-5">
				<SectionHeading>Get started</SectionHeading>
				<div className="mt-4 space-y-4">
					{getStarted.map((step) => (
						<div key={step.number} className="flex gap-3">
							<span className="text-[13px] font-semibold tabular-nums text-white/50">{step.number}</span>
							<div>
								<p className="text-[14px] font-semibold text-white">{step.title}</p>
								<p className="mt-1 text-[12px] leading-relaxed text-white/65">{step.description}</p>
								{step.url ? (
									<p className="mt-1 text-[11px] text-white/45">{step.url.replace(/^https?:\/\//, '')}</p>
								) : null}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mt-5 border-b border-white/10 pb-5">
				<SectionHeading>Useful Links</SectionHeading>
				<div className="mt-4 grid grid-cols-2 gap-3">
					{usefulLinks.map((link) => (
						<div
							key={link.label}
							className="flex items-start gap-2.5 rounded-md border border-white/10 bg-white/[0.03] p-2.5"
						>
							<div className="shrink-0">
								<CafeInfoQrCode url={link.url} />
							</div>
							<div className="min-w-0 pt-0.5">
								<p className="text-[11px] font-medium leading-snug text-white">{link.label}</p>
								<DisplayUrl url={link.url} />
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mt-auto pt-5">
				<SectionHeading>Partners</SectionHeading>
				<div className="mt-4 grid grid-cols-2 gap-4">
					{partners.map((partner) => (
						<div key={partner.name} className="flex flex-col items-center text-center">
							{partner.logo ? (
								<Image
									src={partner.logo}
									alt={partner.name}
									width={180}
									height={72}
									className="max-h-16 w-auto max-w-full object-contain"
								/>
							) : null}
							<p className="mt-2 text-[12px] font-medium text-white">{partner.name}</p>
						</div>
					))}
				</div>
			</section>
		</article>
	);
}
