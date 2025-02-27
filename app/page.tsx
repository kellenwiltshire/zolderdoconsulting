import { Tinos } from 'next/font/google'

const tinosBold = Tinos({
	weight: '700',
	subsets: ['latin'],
	style: 'italic',
})

export default function Home() {
	return (
		<div className='min-h-screen bg-gray-900'>
			<div className='relative isolate min-h-screen overflow-hidden'>
				<img
					alt=''
					src='/forest.webp'
					className='absolute inset-0 -z-10 size-full object-cover opacity-10'
				/>
				<div className='flex min-h-screen w-full flex-col items-center justify-center gap-3 p-4'>
					<h1 className={`text-6xl ${tinosBold.className} antialiased`}>
						Zolderdo Consulting
					</h1>
					<p>Coming Soon.</p>
				</div>
			</div>
		</div>
	)
}
