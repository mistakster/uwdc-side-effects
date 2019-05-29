import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CityMap.css';

const CityMap = () => {
  const mapContainer = useRef(null);

  function mapInitialization() {
    const map = L.map(mapContainer.current, {
      center: [55.167184, 61.3932883],
      zoom: 15,
      layers: [
        L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlzdGFrc3RlciIsImEiOiJjanc5MzA5aDgwMzVsNDhwbXp1eWF6ZXh3In0.flXS8A_nJbv_Pb_xWIq0WA', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18
        })
      ]
    });

    return () => {
      map.remove();
    }
  }

  useEffect(mapInitialization);

  return (
    <div className="CityMap" ref={mapContainer}/>
  );
};

export default CityMap;
