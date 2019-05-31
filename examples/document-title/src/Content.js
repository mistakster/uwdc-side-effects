import React from 'react';
import Counter from './Counter';

function range(n) {
  return [...Array(n).keys()];
}


const Content = ({ n }) => {
  return (
    <div className="h-100 text-light text-center">
      <>
        {range(n).map(key => (
          <Counter key={key}/>
        ))}
      </>
    </div>
  );
};

export default Content;
