import React from 'react';

const MarkerList = ({ list }) => {
  if (!list || !list.length) {
    return null;
  }

  return (
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Latitude</th>
        <th>Longitude</th>
      </tr>
      </thead>
      <tbody>
      {list.map((item, key) => (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{item[0].toFixed(4)}</td>
          <td>{item[1].toFixed(4)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default MarkerList;
