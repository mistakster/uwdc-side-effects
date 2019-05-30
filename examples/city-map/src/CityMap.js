import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

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
    <div className="w-100 h-100" ref={mapContainer}/>
  );
};

export default enhance(CityMap);
