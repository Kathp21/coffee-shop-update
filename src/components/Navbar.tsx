import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]
export const Navbar:React.FC = () => {
    return(
        <nav className='w-full px-6 py-4 md:px-12 shadow-sm sticky top-0 z-50'>
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
                    <Link to='/cart' className='text-text-dark'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>

                    {/* Desktop order now button */}
                    <Link to='/menu' className='text-text-light bg-button-primary hover:bg-button-primary/90 font-semibold py-2 px-6 rounded-lg text-sm transition-colors duration-200'>
                        Order Now
                    </Link>
                </div>


            </div>
        </nav>
    )
}