import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from "react-redux";



export default function SimpleMap({business}){
    
    const latitude = business.latitude;
    const longitude= business.longitude;






  const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: +latitude, lng: +longitude },
  map,
  label: business.name
  });

  return marker;
 };



  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '300px', width: '300px' }}>
      <GoogleMapReact
        mapIds="12449c54ce993cff"
        bootstrapURLKeys='AIzaSyCMW4vlyFxETyZEQz_q_uQcD1PT_nx55KU'
        center={{lat: 26.0807, lng:  -92.36437}}
        zoom={8}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        {/* {displayMarkers} */}
      </GoogleMapReact>
    </div>
  );
}













// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     mapId: "12449c54ce993cff",
//     center: {lat: 26.0807, lng:  -92.36437},
//     zoom: 8,
//   });

//   const image = 'https://imgur.com/xNm1ZzL';

//   const markers = [
//       {
//         position: {lat: 26.11367, lng: -91.87911} ,
//         label: 'Krusty Krab',
//         map,
//         icon: 'https://i.imgur.com/xNm1ZzL.png'
//     }, {
//         position: {lat: 25.88779, lng:  -91.72288},
//         label: 'The Chum Bucket',
//         map,
//     }, {
//         position: {lat: 26.23322, lng:  -92.36558},
//         label: 'The Weenie Hut Franchise',
//         map,
//     }, {
//         position: {lat: 25.66025, lng:  -92.46995},
//         label: 'The Salty Spitoon',
//         map,
//     }, {
//         position: {lat: 28.15715, lng:  -96.76145},
//         label: 'Shell City',
//         map,
//     }, {
//         position: {lat: 26.0807, lng:  -92.36437},
//         label: 'Weenie Hut Junior',
//         map,
//     }, {
//         position: {lat: 26.10537, lng:  -91.84252},
//         label: 'The Krusty Krab 2',
//         map,
//     }, {
//         position: {lat: 25.81892, lng:  -92.02929},
//         label: "Mrs. Puff's Boating School",
//         map,
//     }, {
//         position: {lat: 26.13191, lng:  -94.11706},
//         label: 'Thug Tug',
//         map,
//     }
    
//   ]

//       for(let i = 0; i < markers.length; i++) {
//         const marker = markers[i];
//          new google.maps.Marker({
//             position: {lat: marker.position.lat, lng:marker.position.lng},
//             title: marker.title,
//             map,
//             label: marker.label
//     });
//     }

// }






