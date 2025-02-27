import type { Metadata } from 'next'
import { Tinos } from 'next/font/google'
import './globals.css'

const tinos = Tinos({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Zolderdo Consulting',
	description: 'Zolderdo Consulting',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${tinos} antialiased`}>{children}</body>
		</html>
	)
}
