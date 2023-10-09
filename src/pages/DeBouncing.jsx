import axios from "axios";
import React, { useEffect, useState } from "react";

const DeBouncing = () => {
  const [inputValue, setInputvalue] = useState("");

  async function searchById(id) {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(res.data);
    } catch (error) {
      console.error("Error While Fetch Data...");
    }
  }

  function handleInputValue(e) {
    setInputvalue(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue) searchById(inputValue);
    }, 3000);
    return () => clearTimeout(timer);
  }, [inputValue]);
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <input
        className="border p-2 "
        type="number"
        placeholder="Enter  an Id"
        value={inputValue || ""}
        onChange={handleInputValue}
      />
    </div>
  );
};

export default DeBouncing;
