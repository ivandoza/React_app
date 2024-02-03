import { useCurrentLocation } from "../CustomHooks/useCurrentLocation";

export function HookCurrentLocation() {
  const { userLocation, getUserLocation, loading, error } =
    useCurrentLocation();
  return (
    <div>
      <button onClick={getUserLocation}>Get Location</button>
      {userLocation && (
        <div>
          <a
            href={`https://www.openstreetmap.org/#map=18/${userLocation.latitude}/${userLocation.longitude}`}
          >
            Latitude: {userLocation.latitude}
            <br />
            Longitude: {userLocation.longitude}
          </a>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
