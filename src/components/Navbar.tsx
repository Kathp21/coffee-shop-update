import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]
export const Navbar:React.FC = () => {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false)


    return(
        <nav className='w-full px-6 py-4 md:px-12 shadow-sm top-0 z-50'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <Link to='/' className='text-xl md:text-3xl font-serif font-bold text-text-dark'>
                    Coffee Shop
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-8'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className='text-text-dark hover:text-white font-medium transition-colors'
                        >
                            {link.name}
                        </Link>
                    ))}
                
                    {/* Desktop cart icon */}
                    <Link to='/cart' className='relative p-2 text-text-dark hover:text-text-light focus:outline-none transition-colors' aria-label='Shopping cart'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>

                    {/* Desktop order now button */}
                    <Link to='/menu' className='text-text-light bg-primary hover:bg-button-primary/90 font-semibold py-2 px-6 rounded-full text-sm transition-colors duration-200'>
                        Order Now
                    </Link>
                </div>

                {/* Mobile cart and Burger menu */}
                <div className='md:hidden flex items-center space-x-4'>
                    {/* Mobile cart icon */}
                    <Link to='/cart'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>

                    {/* Mobile burger button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='p-2 text-text-primary focus:outline-none'
                        aria-label="Toggle menu"
                    >
                        <div className='w-6 h-6 flex flex-col justify-center space-y-1.5'>
                            <span
                                className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${ isMenuOpen ? 'opacity-0' : ''}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${ isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className='px-2 pt-2 pb-4 space-y-2 flex flex-col items-center'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className='block px-4 py-2 text-text-primary hover:bg-white/10 round-md font-medium transition-colors'
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile order now button */}
                    <div className='pt-2 px-2'>
                        <Link
                            to='/menu'
                            onClick={() => setIsMenuOpen(false)}
                            className='w-40 bg-primary hover:bg-button-primary/90 text-text-primary font-semibold py-3 px-6 rounded-full text-base transition-all duration-200 block text-center'
                        >
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}