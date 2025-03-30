import type { Metadata } from 'next'
import { Tinos } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const tinos = Tinos({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Zoldero Consulting',
	description:
		'I am a Managed Forest Plan Approver with the Ministry of Natural Resources, dedicated to helping landowners navigate the Managed Forest Tax Incentive Program (MFTIP).',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Script
				src='https://analytics.kellenwiltshire.com/script.js'
				data-website-id='f215abee-555f-4afb-940d-730f851f8f97'
			/>
			<body className={`${tinos} antialiased`}>{children}</body>
		</html>
	)
}
