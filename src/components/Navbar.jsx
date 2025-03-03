import { useState } from 'react';
import { Link } from 'react-router'; // Use react-router (though this is unusual for web apps, usually react-router-dom is used)
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* Logo */}
                <div className="flex-1">
                    <Link to="/" className="text-2xl font-bold text-gray-900">
                    Whoisly
                    </Link>
                </div>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex space-x-4 flex-1 justify-center">
                    <Link
                        to="/"
                        className="text-sm font-medium text-neutral-700 py-2 px-4 rounded-lg transition-colors hover:text-black hover:bg-gray-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-sm font-medium text-neutral-700 py-2 px-4 rounded-lg transition-colors hover:text-black hover:bg-gray-200"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-sm font-medium text-neutral-700 py-2 px-4 rounded-lg transition-colors hover:text-black hover:bg-gray-200"
                    >
                        Contact
                    </Link>
                    <Link
                        to="#"
                        className="text-sm font-medium text-neutral-700 py-2 px-4 rounded-lg transition-colors hover:text-black hover:bg-gray-200"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="#"
                        className="text-sm font-medium text-neutral-700 py-2 px-4 rounded-lg transition-colors hover:text-black hover:bg-gray-200"
                    >
                        Blog
                    </Link>
                </div>

                {/* Buttons - Aligned to Right */}
                <div className="hidden md:flex space-x-4 flex-1 justify-end">
                    <Link
                        to="#"
                        className="text-sm font-medium text-neutral-700 py-2 px-4 rounded-lg border border-neutral-700 transition-colors hover:text-black hover:border-black hover:bg-gray-100"
                    >
                        Login
                    </Link>

                    <Link
                        to="#"
                        className="text-sm font-medium text-white py-2 px-4 rounded-lg bg-black transition-colors hover:bg-neutral-800"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <Link
                        to="/"
                        className="block py-2 px-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block py-2 px-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="block py-2 px-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/privacy"
                        className="block py-2 px-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/blog"
                        className="block py-2 px-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/login"
                        className="block py-2 px-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="block py-2 px-4 text-sm font-medium text-white rounded-lg bg-black transition-colors hover:bg-neutral-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
}
