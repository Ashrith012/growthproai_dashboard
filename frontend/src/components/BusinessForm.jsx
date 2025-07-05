import React, { useState } from 'react';
import { fetchBusinessData } from '../api/api';
import Loader from './Loader';

export default function BusinessForm({ setBusinessData }) {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!businessName.trim() || !location.trim()) {
      alert("Please fill in both fields!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/business-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: businessName, location }),
      });

      const data = await res.json();

      
      setTimeout(() => {
        setBusinessData(data);
        setLoading(false);
      }, 500);

    } catch (err) {
      console.error("Fetch error:", err);
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-1">Business Name</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Cake & Co"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Mumbai"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      
      {loading && <Loader />}
    </>
  );
}
