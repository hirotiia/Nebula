import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const title = process.env.NEXT_PUBLIC_APP_NAME;
const description = process.env.NEXT_PUBLIC_APP_DESCRIPTION;

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		url: appUrl,
		siteName: title,
		images: [
			{
				url: `${appUrl}/img/logo.png`,
				width: 240,
				height: 80,
				alt: title,
			},
		],
		locale: 'ja_JP',
		type: 'website',
	},
	twitter: {
		card: `summary`,
		title,
		description,
		creator: '@nakanohiroya',
		images: [`${appUrl}/img/logo.jpg`],
	},
	robots: {
		index: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
