'use client';

import QRCode from 'react-qr-code';

export default function CafeInfoQrCode({ url }: { url: string }) {
	return (
		<div className="rounded bg-white p-1.5">
			<QRCode value={url} size={64} level="M" />
		</div>
	);
}
