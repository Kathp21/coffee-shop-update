import hero from '../assets/images/hero-image.png'
import { Link } from 'react-router-dom'


export const HomePage = () => {

    return(
        <>
            {/* Hero Section */}
            <section className='relative w-full h-[70vh] md:h-[80vh] overflow-hidden'>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${hero})`
                    }}
                >
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-black/30'></div>

                    {/* Text Overlay */}
                    <div className='relative h-full flex flex-col justify-center items-center text-center px-4'>
                        <h1 className='text-xl md:text-7xl lg:text-8xl text-text-light font-bold mb-4 md:mb-6'>Your Daily Dose of Happiness</h1>
                        <p className='text-sm md:text-xl lg:text-2xl text-text-light font-light max-w-2xl'>Experience the rich aroma and exquisite taste of our handcrafted coffee</p>

                        <Link 
                        to={'/menu'}
                            className='mt-6 md:mt-8 bg-primary hover:bg-button-primary/90 text-text-primary font-semibold py-2 px-5 rounded-full text-base transition-all duration-200 inline-block text-center'
                        >
                            <span className='truncate'>View Menu</span>
                        </Link>
                    </div>


                </div>


            </section>
        </>
    )
}