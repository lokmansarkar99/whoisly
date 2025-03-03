# Domain Whois Lookup App

This project provides a domain WHOIS lookup functionality where users can input a domain and fetch WHOIS information such as registration details, name servers, domain status, and more. The project is built using **React**, **Tailwind CSS**, **Axios** for API calls, and **RapidAPI** for fetching WHOIS data.

---

## Features

- **Domain WHOIS Lookup**: Users can enter a domain and view detailed WHOIS information.
- **Refresh WHOIS Data**: Allows refreshing the data without navigating away.
- **Error Handling**: Displays errors when there’s a failure to fetch data.
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive UI.
- **Navigate to Home Page**: A button to go back to the home page after performing a WHOIS lookup.

---

## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: For navigation within the app.
- **RapidAPI**: Used to fetch WHOIS data.

---

## WhoisDetail Component

The `WhoisDetail` component is responsible for fetching and displaying the WHOIS information for a given domain.

### How It Works

1. **Extracting Domain from URL**:
   - The `WhoisDetail` component uses the `useParams` hook from `react-router-dom` to extract the `domain` parameter from the URL.

2. **State Management**:
   - The component utilizes `useState` to store the state for the fetched data, loading status, and error messages.

3. **Fetching Data**:
   - The `useEffect` hook is triggered whenever the `domain` changes. This hook calls the `fetchWhoisData` function to initiate an HTTP request to the API.

4. **API Request**:
   - The `fetchWhoisData` function sends an HTTP GET request using Axios to fetch the WHOIS data. The API endpoint used is:

     ```javascript
     const options = {
       method: 'GET',
       url: `https://domains-api.p.rapidapi.com/domains/${domain}/whois`,
       headers: {
         'x-rapidapi-key': 'your-rapidapi-key',
         'x-rapidapi-host': 'domains-api.p.rapidapi.com'
       }
     };
     ```

   - On success, the data is saved in the `data` state, which is used for rendering the WHOIS details.
   - If there’s an error, the `error` state is updated, and an error message is shown.

5. **Rendering Data**:
   - The component renders various sections of the WHOIS data, including:
     - **Domain Information**: Displays domain name, registry ID, updated date, etc.
     - **Registrar Information**: Displays registrar details like name, contact email, and phone number.
     - **Name Servers**: Displays the list of name servers associated with the domain.
     - **Domain Status**: Displays the domain status codes.
     - **Last Update**: Shows the last update timestamp for the WHOIS database.
   - Each section is wrapped in a `div` with Tailwind CSS classes to style the layout.

6. **Refreshing Data**:
   - There is a "Refresh" button that allows users to fetch the latest WHOIS data for the domain. The button triggers the `fetchWhoisData` function again and updates the data on the page.

---

## Code Example

```javascript
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
        setLoading(true);
        setError("");
        try {
            const response = await axios.request({
                method: 'GET',
                url: `https://domains-api.p.rapidapi.com/domains/${domain}/whois`,
                headers: {
                    'x-rapidapi-key': 'your-rapidapi-key',
                    'x-rapidapi-host': 'domains-api.p.rapidapi.com'
                }
            });
            setData(response.data["whois.verisign-grs.com"]);
        } catch (err) {
            setError("Failed to fetch WHOIS data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (domain) {
            fetchWhoisData();
        }
    }, [domain]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            {loading && <Loader />}
            {error && <p className="text-red-500">{error}</p>}
            {data && !loading && !error && (
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center">Whois Lookup for {domain}</h1>
                    {/* WHOIS Data sections */}
                    <div>{/* Display sections like Domain Information, Registrar Information */}</div>
                    <button onClick={fetchWhoisData}>Refresh</button>
                </div>
            )}
        </div>
    );
}

export default WhoisDetail;

```