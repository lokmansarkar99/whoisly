function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer Content - 3 Columns */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Column 1 - Logo */}
                    <div className="flex flex-col space-y-2">
                        <a href="/" className="text-2xl font-bold text-gray-900">
                            Whoisly
                        </a>
                        <p className="text-sm text-neutral-600">
                            Your gateway to domain insights
                        </p>
                    </div>

                    {/* Column 2 - First Menu (Primary Links) */}
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-black">Home</a>
                        <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-black">About</a>
                        <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-black">Contact</a>
                    </div>

                    {/* Column 3 - Second Menu (Secondary Links) */}
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-black">Privacy Policy</a>
                        <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-black">Blog</a>
                        <a href="#" className="text-sm text-neutral-600 transition-colors hover:text-black">Terms of Service</a>
                    </div>

                </div>
            </div>


{/* Extra Row - Made With Love */}
<div className="bg-gray-50 py-3">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-neutral-600">
                        Made With ❤️ by Lokman Sarkar
                    </p>
                </div>
            </div>
            

            
            {/* Bottom Copyright Row */}
            <div className="border-t border-gray-200 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-neutral-600">
                        &copy; {new Date().getFullYear()} Whoisly. All rights reserved.
                    </p>
                </div>
            </div>

            
        </footer>
    );
}

export default Footer;
