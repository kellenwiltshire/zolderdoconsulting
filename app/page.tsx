import About from '@/components/About/About'
import ContactForm from '@/components/Contact/ContactForm'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import PricingResources from '@/components/PricingResources/PricingResources'
import Services from '@/components/Services/Services'
import { ReCaptchaProvider } from 'next-recaptcha-v3'

export default function Home() {
	return (
		<ReCaptchaProvider
			useEnterprise
			reCaptchaKey='6Ld0rXstAAAAAF7AC78t9fF61-_uKgCeMkcIRfyd'
		>
			<Header />
			<Services />
			<PricingResources />
			<About />
			<ContactForm />
			<Footer />
		</ReCaptchaProvider>
	)
}
