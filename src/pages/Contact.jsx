import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus('Please fill out all fields.');
            return;
        }

        // Here, you would typically send the form data to a backend.
        setStatus('Thank you for contacting us! We will get back to you shortly.');
    };

    return (
        <div className="bg-gray-100 ">
            {/* Content Section with Padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>

                    <p className="text-gray-700 mb-4 text-lg text-center">
                        Have questions or need assistance? Reach out to us, and we’ll be happy to help!
                    </p>

                    {status && (
                        <p className={`text-center mb-4 ${status.includes('Thank you') ? 'text-green-500' : 'text-red-500'}`}>
                            {status}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-800"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
