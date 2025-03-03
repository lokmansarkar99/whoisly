import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Using react-icons for + and - icons

function FAQSection() {
    const faqs = [
        {
            question: "What is a Whois domain lookup?",
            answer: "A Whois domain lookup allows you to trace the ownership and tenure of a domain name. Similar to how all houses are registered with a governing authority, all domain name registries maintain a record of information about every domain name purchased through them, along with who owns it, and the date till which it has been purchased."
        },
        {
            question: "What does the Whois domain database contain?",
            answer: "The Whois database contains details such as the registration date of the domain name, when it expires, ownership and contact information, nameserver information of the domain, the registrar via which the domain was purchased, etc."
        },
        {
            question: "What is a Whois IP lookup?",
            answer: "An IP is a unique address of a server on the internet. Similar to how a telephone number allows you to connect to a specific phone on the telecom network, similarly, an IP address allows your computer to connect to a specific server on the internet.\n\nDomain names and IP numbers are the framework upon which the entire world wide web is built.\n\nIP numbers are assigned to networking organisations with a record maintained by governing bodies for each IP number and the organisation to which it has been assigned. A whois IP lookup allows you track the above mentioned details for a domain."
        },
        {
            question: "How do I conduct a Whois search?",
            answer: "Enter the domain or IP address for which you would like to conduct a Whois lookup in the search box above. We will query the appropriate database and provide a recent record."
        },
        {
            question: "How do I keep my Whois information updated?",
            answer: "If you have purchased a domain, the information stored with your Domain registrar is what is passed on to the Registry for the Whois database. Get in touch with your Registrar to make changes to the Whois contact information for each of your domains."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 ">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-300">
                {faqs.map((faq, index) => (
                    <div key={index} className="py-4">
                        <button
                            className="w-full flex justify-between items-center text-left font-medium text-lg hover:bg-gray-50 transition"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span className="text-xl transition-transform duration-300">
                                {openIndex === index ? <FiMinus /> : <FiPlus />}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="mt-2 text-gray-700 whitespace-pre-line">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQSection;
