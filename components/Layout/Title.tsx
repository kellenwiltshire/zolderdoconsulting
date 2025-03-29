import { Tinos } from 'next/font/google'

const tinosTitle = Tinos({
	weight: '700',
	subsets: ['latin'],
})

const Title = ({ title }: { title: string }) => {
	return (
		<div className='mx-auto max-w-3xl text-center'>
			<h2 className={`text-3xl sm:text-4xl ${tinosTitle.className}`}>
				{title}
			</h2>
		</div>
	)
}

export default Title
