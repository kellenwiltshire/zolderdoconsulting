import Title from '../Layout/Title'

const features = [
	{
		name: 'Manages Forest Tax Incentive Program',
		description: 'Learn about eligibility, requirements, and benefits. ',
		href: 'https://www.ontario.ca/page/managed-forest-tax-incentive-program',
	},
	{
		name: 'Forest Management Planning Tips',
		description: 'Best practices for sustainable land use.',
		href: 'https://www.ontario.ca/page/forest-management-planning',
	},
	{
		name: 'Forestry Services',
		description:
			'Connect with additional support for tree planting, invasive species control, and more.',
		href: 'https://www.rvca.ca/stewardship-grants/tree-planting',
	},
]

const PricingResources = () => {
	return (
		<div className='py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center'>
					<Title title='Pricing & Resources' />

					<div className='my-4'>
						<p>
							Pricing varies based on property size, project scope, and specific
							service needs. Please contact me directly for a quote.
						</p>
					</div>

					<div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
						<dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
							{features.map((feature) => (
								<div key={feature.name} className='flex flex-col items-center'>
									<p className='flex text-base/7 font-semibold'>
										{feature.name}
									</p>
									<dd className='mt-4 flex flex-auto flex-col text-base/7'>
										<p className='flex-auto'>{feature.description}</p>
										<p className='mt-6'>
											<a
												href={feature.href}
												className='text-sm/6 font-semibold underline'
											>
												Learn more
											</a>
										</p>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PricingResources
