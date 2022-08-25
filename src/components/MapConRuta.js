import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = {
  lat: 4.6819997074631745,
  lng: -74.04196798880038
};

const containerStyle = {
  width: '100%',
  height: '400px'
};

function MapConRuta(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC-to5AyE9wktonYkK51vE8z-d7QBey8Lk"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const drawRoute = (map) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const origin = { lat: latOrg, lng: longOrg };
    const destination = { lat: latDest, lng: longDest };

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
  }


  const latOrg = props.latitudeOrigin;
  const longOrg = props.longitudeOrigin;

  const latDest = props.latitudeDest;
  const longDest = props.longituideDest;

  if (latOrg != null && latDest !== null) {
    drawRoute(map);
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : <></>;
};


export default MapConRuta;