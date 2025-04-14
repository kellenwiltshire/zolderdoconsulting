import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
	weight: '700',
	subsets: ['latin'],
})

const Title = ({ title }: { title: string }) => {
	return (
		<div className='mx-auto max-w-3xl text-center'>
			<h2 className={`text-3xl sm:text-4xl ${open_sans.className}`}>
				{title.toLocaleUpperCase()}
			</h2>
		</div>
	)
}

export default Title
