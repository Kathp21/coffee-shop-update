import React from 'react';

interface ShopDetails {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    information: string;
}

interface ShopArray {
    details: ShopDetails[]
}

export const ShopInfo = ({ details }: ShopArray) => {
    return (
        <section className='p-4'>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-xl md:text-4xl text-text-dark font-bold px-4 mb-6 md:mb-8'>Visit Us</h3>
                <div className='space-y-6 md:grid md:grid-cols-2 md:space-y-10 lg:grid-cols-4'>
                    {details.map((detail, index) => {
                        const IconComponent = detail.icon;
                        return (
                            <div key={index} className='flex flex-col items-center space-y-1.5 text-center'>
                                <div className='w-8 h-8 flex items-center justify-center rounded-full bg-text-primary/90 text-text-light '>
                                    <IconComponent size={20} />
                                </div>
                                <h4 className='font-semibold'>{detail.title}</h4>
                                <p className='font-light whitespace-pre-line'>{detail.information}</p>
                            </div>
                        );
                    })}
                    
                </div>

            </div>
        </section>
    )
}