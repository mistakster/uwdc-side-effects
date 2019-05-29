import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import './CityMap.css';

function mapDispatchToProps(dispatch) {
  return {
    createMap(element) {
      dispatch({
        type: 'LEAFLET_CREATE_MAP',
        element
      });
    },
    destroyMap() {
      dispatch({
        type: 'LEAFLET_DESTROY_MAP'
      });
    }
  };
}

const enhance = connect(null, mapDispatchToProps);

const CityMap = ({ createMap, destroyMap }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    createMap(mapContainer.current);

    return () => {
      destroyMap();
    }
  });

  return (
    <div className="CityMap" ref={mapContainer}/>
  );
};

export default enhance(CityMap);
