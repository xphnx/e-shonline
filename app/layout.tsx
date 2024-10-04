import type { Metadata } from 'next';
import { Afacad, Dancing_Script } from 'next/font/google';

import './globals.css';

const afacad = Afacad({
	subsets: ['latin', 'cyrillic-ext'],
	variable: '--font-afacad',
	weight: ['400', '500', '600', '700'],
});

const dancingScript = Dancing_Script({
	subsets: ['latin'],
	variable: '--font-dancing-script',
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'E-Shonline | Main Page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return (
		<html lang="en">
			<body className={`${afacad.variable} ${dancingScript.variable} antialiased`}>
				<main className="min-h-screen">{children}</main>
			</body>
		</html>
	);
}
