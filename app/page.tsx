import About from '@/components/About/About'
import ContactForm from '@/components/Contact/ContactForm'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import PricingResources from '@/components/PricingResources/PricingResources'
import Services from '@/components/Services/Services'
import Script from 'next/script'

export default function Home() {
	return (
		<div className='min-h-screen bg-gray-900 text-white'>
			<Script
				src='https://analytics.kellenwiltshire.com/script.js'
				data-website-id='f215abee-555f-4afb-940d-730f851f8f97'
			/>
			<Header />
			<Services />
			<PricingResources />
			<About />
			<ContactForm />
			<Footer />
		</div>
	)
}
