import React, { useState } from 'react';
import DocumentTitleFunction from './DocumentTitleFunction';
// import DocumentTitleClass from './DocumentTitleClass';

const Counter = () => {
  const [count, setCount] = useState(0);

  const title = `You clicked ${count} times`;

  return (
    <div className="h-100 text-light text-center">
      <DocumentTitleFunction title={title}/>
      <p className="mt-4">{title}</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        Click me
      </button>
    </div>
  );
};

export default Counter;
