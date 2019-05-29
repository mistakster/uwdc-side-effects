import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.Icon.extend({
  options: {
    iconUrl: marker,
    iconRetinaUrl: marker2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  }
});

L.Marker.prototype.options.icon = new DefaultIcon();

let map = null;

function createMap(element, list) {
  map = L.map(element, {
    center: [55.167184, 61.3932883],
    zoom: 15,
    layers: [
      L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlzdGFrc3RlciIsImEiOiJjanc5MzA5aDgwMzVsNDhwbXp1eWF6ZXh3In0.flXS8A_nJbv_Pb_xWIq0WA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18
      })
    ]
  });

  list.forEach(addMarker);
}

function destroyMap() {
  if (map) {
    map.remove();
    map = null;
  }
}

function createRandomMarker() {
  if (!map) {
    return null;
  }

  const bounds = map.getBounds();
  const west = bounds.getWest();
  const east = bounds.getEast();
  const north = bounds.getNorth();
  const south = bounds.getSouth();

  return [
    Math.random() * (north - south) + south,
    Math.random() * (east - west) + west
  ];
}

function addMarker(point) {
  if (!map) {
    return null;
  }

  L.marker(point).addTo(map);
}


export default store => next => action => {
  switch (action.type) {
    case 'LEAFLET_CREATE_MAP': {
      const { markers } = store.getState();

      createMap(action.element, markers.list);

      break;
    }
    case 'LEAFLET_DESTROY_MAP': {
      destroyMap();

      break;
    }
    case 'LEAFLET_CREATE_RANDOM_MARKER': {
      const point = createRandomMarker();

      if (point) {
        store.dispatch({
          type: 'ADD_MARKER',
          point
        });
      }

      break;
    }
    case 'ADD_MARKER': {
      addMarker(action.point);

      break;
    }
  }

  return next(action);
};
