import React from "react";
import GoogleMapReact from "google-map-react";



function Map() {


  const apiIsLoaded = (map, maps) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const origin = { lat: 4.680732327568705, lng: -74.0423939104911 };
    const destination = { lat: 4.681512920071723, lng: -74.04206131659186 };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };
  return (
    <div>
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyC-to5AyE9wktonYkK51vE8z-d7QBey8Lk',
          }}
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        />
      </div>
    </div>
  );
};


export default Map;