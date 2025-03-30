'use client'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Tinos } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const tinosBold = Tinos({
	weight: '700',
	subsets: ['latin'],
	style: 'italic',
})

const navigation = [
	{ name: 'Services', href: '#services' },
	{ name: 'Pricing & Resources', href: '#pricing' },
	{ name: 'About Me', href: '#about' },
	{ name: 'Contact', href: '#contact' },
]
const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > window.innerHeight * 0.1)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<>
			<header className='absolute inset-x-0 top-0 z-50'>
				<nav
					aria-label='Global'
					className='fixed flex w-full items-center bg-[#111827] p-6 text-white md:relative lg:justify-center lg:px-8'
				>
					<div className='flex w-full lg:hidden'>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(true)}
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
						>
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon aria-hidden='true' className='size-6' />
						</button>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -20 }}
							transition={{ duration: 0.3 }}
							className={`grow text-center text-xl ${tinosBold.className} ${scrolled ? 'text-white' : 'text-transparent'}`}
						>
							Zolderdo Consulting
						</motion.div>
					</div>
					<div className='hidden w-full justify-center lg:flex lg:gap-x-12'>
						{navigation.map((item) => (
							<a key={item.name} href={item.href} className='text-sm/6'>
								{item.name}
							</a>
						))}
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className='lg:hidden'
				>
					<div className='fixed inset-0 z-50' />
					<DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
						<div className='flex items-center justify-end'>
							<button
								type='button'
								onClick={() => setMobileMenuOpen(false)}
								className='-m-2.5 rounded-md p-2.5 text-gray-400'
							>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon aria-hidden='true' className='size-6' />
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-500/25'>
								<div className='space-y-2 py-6'>
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											onClick={() => setMobileMenuOpen(false)}
											className='-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white hover:bg-gray-800'
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
			<div className='relative top-[76px] isolate mb-[76px] h-96 overflow-hidden'>
				<Image
					alt=''
					fill={true}
					src='/forest.webp'
					className='absolute inset-0 -z-10 size-full object-cover opacity-50'
				/>
				<div className='flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center'>
					<h1
						className={`text-center text-7xl md:text-8xl ${tinosBold.className} antialiased`}
					>
						Zolderdo Consulting
					</h1>
				</div>
			</div>
		</>
	)
}

export default Header
