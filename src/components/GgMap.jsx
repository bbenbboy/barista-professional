import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GgMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading ...</div>;
  return <Map />;
};

function Map() {
  const center = { lat: 44, lng: -80 };

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default GgMap;
