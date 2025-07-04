import React, { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";
import Loader from './components/Loader';


export default function App() {
  const [businessData, setBusinessData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">GrowthProAI - Local Business Dashboard</h1>
      <BusinessForm setBusinessData={setBusinessData} />
      {businessData && (
        <BusinessCard data={businessData} setBusinessData={setBusinessData} />
      )}
    </div>
  );
}
