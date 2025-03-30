import About from '@/components/About/About'
import ContactForm from '@/components/Contact/ContactForm'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import PricingResources from '@/components/PricingResources/PricingResources'
import Services from '@/components/Services/Services'

export default function Home() {
	return (
		<>
			<Header />
			<Services />
			<PricingResources />
			<About />
			<ContactForm />
			<Footer />
		</>
	)
}
