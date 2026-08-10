/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Title from '../Layout/Title'
import { useReCaptcha } from 'next-recaptcha-v3'

type FormInformation = {
	name: string
	email: string
	phone: string
	property_size: string
	service: string
	message: string
}

const FORM_KEY = 'E6bRua'

function ContactForm() {
	const [formStateCompleted, setFormStateCompleted] = useState(false)
	const [buttonDisabled, setButtonDisabled] = useState(false)

	const { executeRecaptcha } = useReCaptcha()

	const handleSubmitForm = async (form: FormData) => {
		setButtonDisabled(true)

		const formData: FormInformation = Object.fromEntries(
			form.entries(),
		) as FormInformation

		const { name, email, phone, property_size, service, message } = formData
		try {
			const token = await executeRecaptcha('form_submission')

			const res = await fetch(
				`https://form-mailer.kellenwiltshire.com/api/forms/${FORM_KEY}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						payload: {
							name,
							email,
							phone,
							property_size,
							service,
							message,
						},
						token,
					}),
				},
			)

			if (!res.ok) {
				throw new Error(`Form submission failed: ${res.status}`)
			}

			setFormStateCompleted(true)
		} catch (err) {
			console.error(err)
		} finally {
			setButtonDisabled(false)
		}
	}
	return (
		<section id='contact' className='relative lg:mx-40'>
			<div className='lg:absolute lg:inset-0 lg:left-1/2'>
				<img
					alt='Working Together'
					src='/workingtogether.jpg'
					className='h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full'
				/>
			</div>
			<div className='pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32'>
				<div className='px-6 lg:px-8'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<Title title="Let's work together" />

						<p className='mt-2 text-center text-sm'>
							Have questions or ready to get started? Reach out today!
						</p>
						<p className='mt-2 text-center text-sm'>
							(905) 431-8353 -{' '}
							<a
								href='mailto:contact@zolderdoconsulting.com'
								className='underline'
							>
								contact@zolderdoconsulting.com
							</a>
						</p>
						<p className='mt-2 text-center text-sm'>
							Providing Service to Eastern Ontario
						</p>

						{formStateCompleted ? (
							<div className='my-10 flex h-[600px] w-full justify-center'>
								<p>
									Thank you for contacting, I will reach out to you shortly!
								</p>
							</div>
						) : (
							<form action={handleSubmitForm} className='mt-16'>
								<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
									<div className='sm:col-span-2'>
										<label htmlFor='name' className='block text-sm/6'>
											Name
										</label>
										<div className='mt-2.5'>
											<input
												id='name'
												required
												name='name'
												type='text'
												className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
											/>
										</div>
									</div>

									<div className='sm:col-span-2'>
										<label htmlFor='email' className='block text-sm/6'>
											Email
										</label>
										<div className='mt-2.5'>
											<input
												id='email'
												name='email'
												type='email'
												required
												autoComplete='email'
												className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
											/>
										</div>
									</div>

									<div className='sm:col-span-2'>
										<div className='flex justify-between text-sm/6'>
											<label htmlFor='phone' className='block'>
												Phone
											</label>
										</div>
										<div className='mt-2.5'>
											<input
												id='phone'
												name='phone'
												type='tel'
												required
												autoComplete='tel'
												aria-describedby='phone-description'
												className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='property_size' className='block text-sm/6'>
											How big is your property?
										</label>
										<div className='mt-2 grid sm:col-span-2'>
											<select
												id='property_size'
												name='property_size'
												required
												defaultValue='<50 Acres'
												className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
											>
												<option>{`<50 Acres`}</option>
												<option>50 - 100 Acres</option>
												<option>{`>100 Acres`}</option>
											</select>
											<ChevronDownIcon
												aria-hidden='true'
												className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='service' className='block text-sm/6'>
											What can I help you with?
										</label>
										<div className='mt-2 grid sm:col-span-2'>
											<select
												id='service'
												name='service'
												required
												defaultValue='Managed Forest Tax Incentive Program'
												className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
											>
												<option>Managed Forest Tax Incentive Program</option>
												<option>Invasive and Noxious Plants</option>
												<option>Other</option>
											</select>
											<ChevronDownIcon
												aria-hidden='true'
												className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
											/>
										</div>
									</div>
									<div className='sm:col-span-2'>
										<div className='flex justify-between text-sm/6'>
											<label htmlFor='message' className='block text-sm/6'>
												Anything else I should know?
											</label>
											<p id='message-description' className='text-gray-400'>
												Max 500 characters
											</p>
										</div>
										<div className='mt-2.5'>
											<textarea
												id='message'
												name='message'
												rows={4}
												aria-describedby='message-description'
												className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
												defaultValue={''}
											/>
										</div>
									</div>
								</div>
								<div className='mt-10 flex justify-end border-t border-gray-900/10 pt-8'>
									<button
										type='submit'
										disabled={buttonDisabled}
										className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									>
										Send message
									</button>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactForm
