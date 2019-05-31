import React, { useState } from 'react';
import DocumentTitle from './DocumentTitleFunction';
// import DocumentTitle from './DocumentTitleClass';

const Counter = () => {
  const [count, setCount] = useState(0);

  const title = `You clicked ${count} times`;

  return (
    <div>
      <DocumentTitle title={title}/>
      <p className="mt-4">{title}</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        Click me
      </button>
    </div>
  );
};

export default Counter;
