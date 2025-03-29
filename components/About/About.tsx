import Image from 'next/image'

const About = () => {
	return (
		<section id='about' className='relative overflow-hidden'>
			<Image
				alt=''
				fill={true}
				src='/forest.webp'
				className='absolute inset-0 size-full object-cover opacity-25'
			/>
			<div className='relative mx-auto max-w-7xl px-6 py-16 lg:px-8'>
				<div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
					<div className='relative lg:col-start-2 lg:row-start-1'>
						<div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
							<figure>
								<img
									alt='Whitney leaning against a railing on a downtown street'
									src='https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80'
									width={1184}
									height={1376}
									className='aspect-[12/7] w-full rounded-lg object-cover shadow-lg lg:aspect-auto'
								/>
							</figure>
						</div>
					</div>
					<div className='mt-8 lg:mt-0'>
						<div className='mx-auto flex h-full flex-col justify-center gap-8 text-base/7'>
							<div className='py-4 text-center'>
								<h2 className='text-3xl sm:text-4xl'>About Me</h2>
								<h3 className='mt-2 text-3xl/8 font-bold tracking-tight sm:text-4xl'>
									Aaron Zolderdo
								</h3>
							</div>
							<p className='text-lg/7'>
								I am a Managed Forest Plan Approver with the Ministry of Natural
								Resources, dedicated to helping landowners navigate the Managed
								Forest Tax Incentive Program (MFTIP). With a background in
								forestry and land management, I work closely with property
								owners to develop sustainable forest management plans that meet
								program requirements while supporting long-term stewardship
								goals. Whether you&apos;re looking to reduce property taxes or
								enhance the health of your woodlot, I am here to guide you
								through the process.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default About
