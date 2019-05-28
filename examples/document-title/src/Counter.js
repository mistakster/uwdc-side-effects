import React, { useState } from 'react';
import DocumentTitleFunction from './DocumentTitleFunction';
// import DocumentTitleClass from './DocumentTitleClass';

const Counter = () => {
  const [count, setCount] = useState(0);

  const title = `You clicked ${count - count % 2} times`;

  return (
    <div>
      <DocumentTitleFunction title={title}/>
      <p>{title}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
