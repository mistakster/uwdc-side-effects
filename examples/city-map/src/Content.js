import React from 'react';
import CityMap from './CityMap';
import MarkerPanel from './MarkerPanel';

const Content = () => {
  return (
    <div className="h-100 row">
      <div className="col-8">
        <CityMap/>
      </div>
      <div className="col-4">
        <MarkerPanel/>
      </div>
    </div>
  );
};

export default Content;
