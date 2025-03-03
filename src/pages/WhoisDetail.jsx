import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { FaSync } from "react-icons/fa"; // For the refresh icon
import Loader from "../components/Loader";

function WhoisDetail() {


    const { domain } = useParams();
    const navigate = useNavigate(); // Hook to handle redirection
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWhoisData = async () => {
        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;
        const API_HOST = import.meta.env.VITE_API_HOST;
        setLoading(true);
        setError("");
        try {
            const options = {
                method: 'GET',
                url: `${API_URL}/${domain}/whois`,
                params: { follow: '1', raw: 'false' },
                headers: {
                    'x-rapidapi-key': API_KEY,
                    'x-rapidapi-host': API_HOST
                }
            };

            const response = await axios.request(options);
            setData(response.data["whois.verisign-grs.com"]); // Extract the relevant data for the domain
        } catch (err) {
            setError("Failed to fetch WHOIS data. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (domain) {
            fetchWhoisData();
        }
    }, [domain]);

    const formatRow = (label, value) => (
        <div className="flex border-b border-gray-200 py-2">
            <div className="w-1/3 font-medium">{label}</div>
            <div className="w-2/3">{value || 'N/A'}</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
       {data && !loading && !error && (      <h1 className="text-3xl font-bold mb-4 text-center">Whois Lookup for {domain}</h1> )}

            {data && !loading && !error && (  <div className="mb-4 flex items-center gap-4">
                <button
                    onClick={fetchWhoisData}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    disabled={loading}
                >
                    <FaSync className={loading ? "animate-spin" : ""} />
                    Refresh
                </button>
                
                    <button
                        onClick={() => navigate('/')}
                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                        Look Another
                    </button>
                
            </div>)}

            {loading && <Loader />}
            {error && <p className="text-red-500">{error}</p>}

            {data ? (
                <div className="w-full max-w-4xl bg-white p-6 shadow rounded-lg text-sm space-y-6">
                    {/* Domain Information Section */}
                    <div className="border rounded-lg">
                        <div className="bg-gray-200 font-semibold px-4 py-2">Domain Information</div>
                        <div className="p-4 space-y-2">
                            {formatRow('Domain', data["Domain Name"])}
                            {formatRow('Registry Domain ID', data["Registry Domain ID"])}
                            {formatRow('Updated Date', data["Updated Date"])}
                            {formatRow('Created Date', data["Created Date"])}
                            {formatRow('Expiry Date', data["Expiry Date"])}
                            {formatRow('Registrar WHOIS Server', data["Registrar WHOIS Server"])}
                            {formatRow('DNSSEC', data["DNSSEC"])}
                        </div>
                    </div>

                    {/* Registrar Information Section */}
                    <div className="border rounded-lg">
                        <div className="bg-gray-200 font-semibold px-4 py-2">Registrar Information</div>
                        <div className="p-4 space-y-2">
                            {formatRow('Registrar', data["Registrar"])}
                            {formatRow('Registrar IANA ID', data["Registrar IANA ID"])}
                            {formatRow('Registrar Abuse Contact Email', data["Registrar Abuse Contact Email"])}
                            {formatRow('Registrar Abuse Contact Phone', data["Registrar Abuse Contact Phone"])}
                            <div className="flex border-b border-gray-200 py-2">
                                <div className="w-1/3 font-medium">Registrar URL</div>
                                <div className="w-2/3">
                                    <a href={data["Registrar URL"]} target="_blank" rel="noopener noreferrer">
                                        {data["Registrar URL"]}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Name Servers Section */}
                    <div className="border rounded-lg">
                        <div className="bg-gray-200 font-semibold px-4 py-2">Name Servers</div>
                        <div className="p-4 space-y-2">
                            {data["Name Server"].map((server, index) => (
                                <div key={index} className="flex border-b border-gray-200 py-2">
                                    <div className="w-1/3 font-medium">Name Server</div>
                                    <div className="w-2/3">{server}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Domain Status Section */}
                    <div className="border rounded-lg">
                        <div className="bg-gray-200 font-semibold px-4 py-2">Domain Status</div>
                        <div className="p-4 space-y-2">
                            {data["Domain Status"].map((status, index) => (
                                <div key={index} className="flex border-b border-gray-200 py-2">
                                    <div className="w-1/3 font-medium">Status</div>
                                    <div className="w-2/3">{status}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last Update */}
                    <div className="border rounded-lg">
                        <div className="bg-gray-200 font-semibold px-4 py-2">Last Update</div>
                        <div className="p-4 space-y-2">
                            {formatRow('Last Updated', data[">>> Last update of whois database"])}
                        </div>
                    </div>
                </div>
            ) : !loading && !error ? (
                <p>No data found for this domain.</p>
            ) : null}
        </div>
    );
}

export default WhoisDetail;
