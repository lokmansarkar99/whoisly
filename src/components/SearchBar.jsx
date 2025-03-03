import { useState } from "react";
import { useNavigate } from "react-router";
import whois_hero from "../assets/whois-hero.jpg"

function SearchBar() {
    const [domain, setDomain] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (domain.trim()) {
            navigate(`/whois/${domain.trim()}`);
        } else {
            alert("Please enter a valid domain.");
        }
    };

    return (
        <div 
            className="relative w-full h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${whois_hero})` }} // ✅ Using local image correctly
        >
            {/* Overlay for better readability */}
            <div className="absolute bg-black inset-0 opacity-40"></div>

            {/* Content inside the hero section */}
            <div className="relative z-10 max-w-2xl mx-auto text-white p-2">
                <h1 className=" text-3xl font-bold mb-2 sm:text-5xl">Whois Domain Lookup</h1>
                <h2 className="text-lg font-medium mb-6">Whois search for Domain and IP</h2>

                {/* Search Bar Form */}
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Enter domain (example.com)"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            className="w-full p-3 text-black bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-pink-600 transition"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-pink-600 text-white rounded-r-lg hover:bg-pink-500 transition"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
