import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {

  width: "80%",
  height: "400px",
};

const center = {
  lat: 43.660621, // Replace with your desired latitude
  lng: -70.257449, // Replace with your desired longitude
};

function MyGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC8sv9uJssO5G-H3irAam7YrZ-cnL4T1-0", // Replace with your API key
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12} // Adjust zoom level as needed
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default MyGoogleMap;
