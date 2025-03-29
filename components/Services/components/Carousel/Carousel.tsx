'use client'

import React, { useState, useEffect } from 'react'

export default function Carousel({ images }: { images: Array<string> }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () =>
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

	useEffect(() => {
		const interval = setInterval(nextSlide, 4000)
		return () => clearInterval(interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl shadow-lg'>
			<div className='relative h-96'>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Slide ${index + 1}`}
						className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
					/>
				))}
			</div>
		</div>
	)
}
