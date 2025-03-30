import classNames from '@/utils/classNames'
import { Tinos } from 'next/font/google'
import Carousel from './components/Carousel/Carousel'
import Title from '../Layout/Title'

const tinosBold = Tinos({
	weight: '700',
	subsets: ['latin'],
	style: 'italic',
})

const services = [
	{
		name: 'Managed Forest Tax Incentive Program',
		description:
			'I provide professional guidance to landowners who wish to enroll in the Managed Forest Tax Incentive Program. My services include: ',
		bullets: [
			{
				title: 'Eligibility Assessment',
				desc: 'Reviewing your property to determine if it qualifies for MFTIP.',
			},
			{
				title: 'Forest Management Planning',
				desc: 'Creating a customized, Ministry-approved plan tailored to your land and goals.',
			},
			{
				title: 'Application Assistance',
				desc: 'Ensuring your paperwork is complete and submitted correctly.',
			},
			{
				title: 'Plan Updates & Renewals',
				desc: 'Keeping your plan current and compliant with program requirements.',
			},
		],
		extra:
			"Whether you're enrolling for the first time or need support maintaining your status, I can simplify the process and help you maximize the benefits of responsible forest management.",
		images: ['/mftip.jpg'],
	},
	{
		name: 'Other Services',
		description:
			'Beyond MFTIP support, I also assist landowners with managing invasive and noxious plant species. Services include: ',
		bullets: [
			{
				title: 'Species Identification & Mapping',
				desc: 'Pinpointing problem areas on your property.',
			},
			{
				title: 'Removal & Remediation',
				desc: 'Safe and effective control of harmful plants such as: Wild Parsnip, Poison Ivy, and Dog-Strangling Vine',
			},
			{
				title: 'Long-Term Management Strategies',
				desc: 'Helping prevent reinfestation and maintain healthy forest ecosystems.',
			},
		],
		images: [
			'/dog-strangling-vine.webp',
			'/poison-ivy.webp',
			'/wild-parsnip.webp',
		],
	},
]

const Services = () => {
	return (
		<section id='services'>
			<div className='mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8'>
				<Title title='My Services' />

				<div className='mt-16 space-y-16'>
					{services.map((service, serviceIdx) => (
						<div
							key={service.name}
							className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'
						>
							<div
								className={classNames(
									serviceIdx % 2 === 0
										? 'lg:col-start-1'
										: 'lg:col-start-8 xl:col-start-9',
									'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
								)}
							>
								<h3
									className={`text-center text-2xl md:text-left ${tinosBold.className}`}
								>
									{service.name}
								</h3>
								<p className='mt-2 text-sm'>{service.description}</p>
								<ul className='mt-3 flex flex-col gap-3'>
									{service.bullets?.map((item, index) => (
										<li key={index}>
											<strong>{item.title}</strong> - {item.desc}
										</li>
									))}
								</ul>
								<p className='mt-2'>{service.extra}</p>
							</div>
							<div
								className={classNames(
									serviceIdx % 2 === 0
										? 'lg:col-start-6 xl:col-start-5'
										: 'lg:col-start-1',
									'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
								)}
							>
								<Carousel images={service.images} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
