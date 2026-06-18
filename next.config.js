/** @type {import('next').NextConfig} */
const securityHeaders = [
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	// Kept alongside CSP frame-ancestors for backward compatibility with older browsers
	{ key: 'X-Frame-Options', value: 'DENY' },
	{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=()',
	},
	{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
	// Isolates the browsing context to prevent cross-origin window access (Spectre mitigation)
	{ key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
	// Prevents other origins from embedding this site's resources
	{ key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
];

const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
	experimental: {
		imgOptTimeoutInSeconds: 30,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.balisquad.com',
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
			},
		],
	},
};

module.exports = nextConfig;
