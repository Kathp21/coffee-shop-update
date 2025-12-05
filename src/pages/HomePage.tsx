import hero from '../assets/images/hero-image.png'
import { Link } from 'react-router-dom'
import { SliceCards } from '../components/SliceCards'
import signature1 from '../assets/images/signatureBlend1.png'
import signature2 from '../assets/images/signatureBlend2.png'
import signature3 from '../assets/images/signatureBlend3.png'
import item1 from '../assets/images/espresso.png'
import item2 from '../assets/images/latte.png'
import item3 from '../assets/images/ice-coffee.png'
import item4 from '../assets/images/ceremorial-matcha.png'
import { MapPin, Clock3, Phone, Mail } from 'lucide-react'
import { ShopInfo } from '../components/ShopInfo'


export const HomePage = () => {
    const signatureBlends = [
        {name: "The Classic", summary: "Our signature blend, perfect for everyday enjoyment.", image: signature1},
        {name: "The Bold", summary: "A rich and intense blend for the adventurous palate.", image: signature2},
        {name: "The Coy Corner", summary: "Our cozy corner blend, perfect for a relaxing afternoon.", image: signature3},
    ]

    const featuredItems = [
        {name: "Espresso", summary: "A concentrated shot of our signature blend.", image: item1},
        {name: "Latte", summary: "Expresso with steamed milk and a thin layer of foam.", image: item2},
        {name: "Iced Coffee", summary: "Refreshing coffee served over ice.", image: item3},
        {name: "Ceremorial Matcha", summary: "Smooth Japanese matcha whisked to perfection.", image: item4},
    ]

    const shopInfo = [
        {title: 'Location', information: "123 Brew Street, Vancouver V5P 1T9", icon: MapPin},
        {title: 'Hours', information: "Monday-Friday: 7am-8pm\nSaturday-Sunday: 8am-9pm", icon: Clock3},
        {title: 'Phone', information: "+1 (778) 797-6964", icon: Phone},
        {title: 'Email', information: "hello@coffeeshop.com", icon: Mail},
    ]

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

            {/* Our Signature */}
            <SliceCards
                sectionName='Our Signature Blends'
                details={signatureBlends}
            />

            {/* Featured Items  */}
            <SliceCards
                sectionName='Featured Items'
                details={featuredItems}
                customClass='md:w-1/4'
                itemsPerViewConfig={{
                    mobile: 1,
                    tablet: 4,
                    desktop: 4
                }}
            />

            <ShopInfo
                details={shopInfo}
            />

            <section className='mt-8 md:mt-12'>
                <div className="w-full h-[300px] md:h-[400px] bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex flex-col items-center justify-center space-y-4">
                    <div className='text-center'> 
                        <MapPin size={50} color='#F5F5DC'/>
                    </div>
                    <p className='text-text-light/60 text-sm md:text-base'>Map placeholder</p>
                </div>
            </section>
        </>
    )
}