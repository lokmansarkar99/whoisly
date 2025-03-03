import React from "react";

function About() {
    return (
        <div className="bg-gray-100 ">
            {/* Content Section with Padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold mb-6 text-center">About Us</h1>
                    <p className="text-gray-700 mb-4 text-lg">
                        Welcome to our website! We provide a variety of digital tools and services to help you manage your online presence. Our goal is to make it easy for you to get the data you need in a quick, accessible, and user-friendly format.
                    </p>
                    <p className="text-gray-700 mb-4 text-lg">
                        Our platform allows you to search for domain details, including WHOIS information, DNS, registrar, and more. Whether you're a domain investor, developer, or business owner, we aim to provide you with the tools you need to succeed.
                    </p>
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        Why Choose Us?
                    </h2>
                    <ul className="list-disc pl-8 text-gray-700 mb-6">
                        <li className="mb-2">Fast and reliable WHOIS data retrieval</li>
                        <li className="mb-2">Detailed domain registration information</li>
                        <li className="mb-2">Easy-to-use interface with responsive design</li>
                        <li className="mb-2">Dedicated customer support</li>
                    </ul>
                    <p className="text-gray-700 mb-4 text-lg">
                        We are constantly improving and updating our platform to ensure you always have the most accurate and up-to-date information available.
                    </p>
                    <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
                    <p className="text-gray-700 text-lg">
                        If you have any questions or need assistance, feel free to contact us at{" "}
                        <a
                            href="mailto:support@example.com"
                            className="text-blue-500 hover:underline"
                        >
                            support@example.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
