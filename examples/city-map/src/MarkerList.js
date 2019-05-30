import React from 'react';

const MarkerList = ({ list }) => {
  if (!list || !list.length) {
    return null;
  }

  return (
    <table className="w-100">
      <thead>
      <tr>
        <th>#</th>
        <th style={{ width: '40%' }}>Latitude</th>
        <th style={{ width: '40%' }}>Longitude</th>
      </tr>
      </thead>
      <tbody>
      {list.map((item, key) => (
        <tr key={key}>
          <td>{key + 1}.</td>
          <td>{item[0].toFixed(4)}</td>
          <td>{item[1].toFixed(4)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default MarkerList;
