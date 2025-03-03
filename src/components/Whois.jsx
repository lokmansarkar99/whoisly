import axios from "axios";
import { useEffect, useState } from "react";

function Whois() {
  const [data, setData] = useState({});
  const [domain, setDomain] = useState("");
  const [submittedDomain, setSubmittedDomain] = useState("");

  const options = {
    method: 'GET',
    url: `https://domains-api.p.rapidapi.com/domains/${submittedDomain}/whois`,
    params: {
      follow: '1',
      raw: 'false'
    },
    headers: {
      'x-rapidapi-key': '71c8ecf161msh54666a03a28f32ep1c6416jsn5d23ba30e9d7',
      'x-rapidapi-host': 'domains-api.p.rapidapi.com'
    }
  };

  const getData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data); // Set the response data
      console.log("Data fetched:", response
      );
      console.log("Name Servers:", response.data["whois.verisign-grs.com"]["Name Server"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to fetch data only when the submittedDomain is updated (after form submission)
  useEffect(() => {
    if (submittedDomain) {
      getData(); // Fetch data if a domain is submitted
    }
  }, [submittedDomain]); // Dependency on submittedDomain, not domain (typing)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedDomain(domain); // Set submitted domain and trigger useEffect
  };

  return (
    <>
      <h1>Whois Lookup</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="domain">Domain</label>
        <input
          type="text"
          name="domain"
          id="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)} // Update domain as you type
        />
        <button type="submit">Search</button>
      </form>

      {/* Display data if available */}
      {data && Object.keys(data).length > 0 ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available or please enter a valid domain.</p>
      )}
    </>
  );
}

export default Whois;
