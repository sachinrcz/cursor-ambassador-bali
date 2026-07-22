'use client';

export default function CafeMenuPrintButton({ label = 'Print menu' }: { label?: string }) {
	return (
		<button
			type="button"
			onClick={() => window.print()}
			className="print:hidden fixed bottom-6 right-6 z-10 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
		>
			{label}
		</button>
	);
}
