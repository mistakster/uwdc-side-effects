import React from 'react';
import CityMap from './CityMap';
import MarkerPanel from './MarkerPanel';
import './Content.css';

const Content = () => {
  return (
    <div className="Content">
      <div className="ContentCell">
        <CityMap/>
      </div>
      <div className="ContentCell">
        <MarkerPanel/>
      </div>
    </div>
  );
};

export default Content;
