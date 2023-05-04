import React, { useState } from "react";

const LocationInput = ({ onLocationSubmit }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationSubmit(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter address, city or zip code"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationInput;
