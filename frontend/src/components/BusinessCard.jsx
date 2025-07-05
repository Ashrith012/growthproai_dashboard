import React, { useState } from 'react';
import { regenerateHeadline } from '../api/api';


export default function BusinessCard({ data, setBusinessData }) {
  const [loading, setLoading] = useState(false);

 const handleRegenerate = async () => {
  setLoading(true);
  console.log("Regenerating for:", data.name, data.location);
  try {
    const newHeadline = await regenerateHeadline(data.name, data.location);
    setBusinessData({ ...data, headline: newHeadline.headline });
  } catch (err) {
    console.error("Failed to regenerate headline:", err);
    alert("Oops! Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="mt-6 bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
      <p className="mb-1"><strong>Location:</strong> {data.location}</p>
      <p className="mb-1"><strong>Rating:</strong> {data.rating} ⭐</p>
      <p className="mb-1"><strong>Reviews:</strong> {data.reviews}</p>
      <blockquote className="italic my-4">"{data.headline}"</blockquote>

      <button
  onClick={handleRegenerate}
  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center justify-center gap-2"
  disabled={loading}
>
  {loading && (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  )}
  {loading ? 'Regenerating...' : 'Regenerate SEO Headline'}
</button>

    </div>
  );
}