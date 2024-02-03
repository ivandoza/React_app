import { useState } from "react";

export const useCurrentLocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        setError("Error getting user location:", error);
      }
    );
  };

  return { userLocation, getUserLocation, loading, error };
};
