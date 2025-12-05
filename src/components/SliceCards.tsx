import { useState, useEffect, useRef } from "react";

interface CardInfo {
    name: string;
    summary: string;
    image: string;
}

interface SectionProps{
    sectionName: string;
    details: CardInfo[];
    customClass?: string;
    itemsPerViewConfig? : {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    }
}

export const SliceCards = ({ sectionName, details, customClass, itemsPerViewConfig }: SectionProps) => {

    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [ itemsPerView, setItemsPerView ] = useState(1)
    const [ imageHeight, setImageHeight ] = useState(0)
    const imageRef = useRef<HTMLImageElement>(null)

    // Calculate items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            let newItemsPerView = itemsPerViewConfig?.mobile ?? 1
            if(window.innerWidth >=1024) {
                newItemsPerView = itemsPerViewConfig?.desktop ?? 4
            } else if (window.innerWidth >=768) {
                newItemsPerView = itemsPerViewConfig?.tablet ?? 3
            } else {
                newItemsPerView = itemsPerViewConfig?.mobile ?? 1
            }

            setItemsPerView(newItemsPerView)
        }

        updateItemsPerView()
        window.addEventListener('resize', updateItemsPerView)
        return () => window.removeEventListener('resize', updateItemsPerView)
    }, [])

    // Measure image height after image loads
    useEffect(() => {
        const updateImageHeight = () => {
            if(imageRef.current) {
                // Wait a bit for image to render
                setTimeout(() => {
                    if(imageRef.current) {
                        setImageHeight(imageRef.current.offsetHeight)
                    }
                }, 100)
            }        
        }

        const image = imageRef.current
        if (image) {
            if (image.complete) {
                updateImageHeight()
            } else {
                image.addEventListener('load', updateImageHeight)
            }
        }

        window.addEventListener('resize', updateImageHeight)
        return () => {
            window.removeEventListener('resize', updateImageHeight)
            if (image) {
                image.removeEventListener('load', updateImageHeight)
            }
        }
    }, [details])

    // Reset current slide when details changes
    useEffect(() => {
        setCurrentSlide(0)
    }, [details])

    const maxSlide = Math.max(0, details.length - itemsPerView)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
    }

    // Calcuate transform value
    const translateX = -(currentSlide * (100 / itemsPerView))

    return(
        <section className="p-4">
            <div className="max-w-7xl mx-auto">
                <h3 className='text-xl md:text-4xl text-text-dark font-bold px-4 mb-6 md:mb-8'>{sectionName}</h3>
            
            <div className="relative mb-10 md:mb-12">
                {/* Carousel container */}
                <div className="relative overflow-hidden">

                    {/* Carousel slides */}
                    <div 
                        className="flex transition-transform duration-300"
                        style={{transform:`translateX(${translateX}%)`}}
                    >
                        {details.map((detail, index) => (
                            <div key={index} className={`w-full h-full shrink-0 md:w-1/3 px-4 ${customClass}`}>
                                <img src={detail.image} alt={detail.name} className="w-full h-auto rounded-md" ref={index === 0 ? imageRef : null} />
                                <div className="p-4 md:px-0">
                                    <h4 className="text-lg md:text-xl text-text-dark font-bold mb-2">{detail.name}</h4>
                                    <p className="text-sm md:text-base text-text-dark font-light">{detail.summary}</p> 
                                </div>
                            
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    {details.length > itemsPerView && (
                        <>
                            {/* previous slide button */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 md:left-4 bg-white/90 hover:bg-white text-text-dark p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 z-20"
                                style={{ 
                                    top: imageHeight > 0 ? `${imageHeight / 2}px` : '50%',
                                    transform: 'translateY(-50%)'
                                }}
                                aria-label="Previous slide"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Next slide button */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 md:right-4 bg-white/90 hover:bg-white text-text-dark p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 z-20"
                                style={{ 
                                    top: imageHeight > 0 ? `${imageHeight / 2}px` : '50%',
                                    transform: 'translateY(-50%)'
                                }}
                                aria-label="Next slide"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                        </>
                    )}
                    
                </div>

                {/* Slide indicators */}
                {details.length > itemsPerView && (
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({length: maxSlide + 1}).map((_, index) => {
                            return <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'} `}
                                aria-label={`Go to slide ${index + 1}`}                     
                            />
                        })}
                    </div>
                )}
            </div>
        </div>
        </section>
    )
}