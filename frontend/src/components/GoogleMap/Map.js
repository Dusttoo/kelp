import React from "react";
import GoogleMapReact from 'google-map-react';
import './Map.css'



export default function SimpleMap({business}){
  
    
    const latitude = business.latitude;
    const longitude= business.longitude;

  const icon = {
    url: 'https://i.imgur.com/3Uzp5RN.png',
    scale: .1,
  }




  const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: +latitude, lng: +longitude },
  map,
  label: business.name,
  icon: icon
  });

  return marker;
 };



  return (
    <div style={{ height: '300px', width: '300px' }}>
      <GoogleMapReact
        mapIds="12449c54ce993cff"
        bootstrapURLKeys='AIzaSyCMW4vlyFxETyZEQz_q_uQcD1PT_nx55KU'
        center={{lat: +latitude, lng:  +longitude}}
        zoom={8}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        <h2 className="map-title">Bikini Bottom</h2>
      </GoogleMapReact>
    </div>
  );
}













