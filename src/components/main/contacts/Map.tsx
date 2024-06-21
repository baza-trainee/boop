// components/main/contacts/Map.tsx
import React, { useCallback, useRef, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

interface MapProps {
  initialAddress: string;
  onAddressChange: (newAddress: string) => void;
}

const Map = ({ initialAddress, onAddressChange }: MapProps) => {
  const [location, setLocation] = useState({ lat: 50.4501, lng: 30.5234 }); // Default location (Kyiv)
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (typeof google !== 'undefined') {
      geocodeAddress(initialAddress);
    }
  }, [initialAddress]);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const geocodeAddress = (address: string) => {
    if (typeof google === 'undefined') return;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location;
        setLocation({ lat: location.lat(), lng: location.lng() });
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const latLng = event.latLng;
    if (latLng) {
      setLocation({ lat: latLng.lat(), lng: latLng.lng() });
      reverseGeocode(latLng);
    }
  };

  const reverseGeocode = (latLng: google.maps.LatLng) => {
    if (typeof google === 'undefined') return;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        onAddressChange(results[0].formatted_address);
      } else {
        console.error('Reverse geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return (
    <div>
      {typeof google !== 'undefined' ? (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={handleMapClick}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
          <p>Loading map...</p>
        </div>
      )}
    </div>
  );
};

export default Map;
