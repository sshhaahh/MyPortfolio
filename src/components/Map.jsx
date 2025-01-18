import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const Map = () => {
  useEffect(() => {
   
    const DefaultIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

  
    const map = L.map('map', {
      center: [29.4774219, 77.6945950],
      zoom: 13,
      scrollWheelZoom: false, 
    });

   
    map.on('keydown', (e) => {
      if (e.originalEvent.ctrlKey) {
        map.options.scrollWheelZoom = true; 
        map.scrollWheelZoom.enable();
      }
    });

    map.on('keyup', (e) => {
      if (!e.originalEvent.ctrlKey) {
        map.options.scrollWheelZoom = false;
        map.scrollWheelZoom.disable();
      }
    });

 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

  
    const marker = L.marker([29.4774219, 77.6945950]).addTo(map);
    marker.bindPopup('This is your location!').openPopup();

  
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className='flex justify-center items-center '>
      <div id="map" className="h-44 w-[80%] md:h-[300px] lg:h-[400px] md:w-[70%] rounded-3xl"></div>
    </div>
  );
};

export default Map;
