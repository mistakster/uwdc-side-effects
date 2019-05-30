import { useEffect } from 'react';

const DocumentTitleFunction = ({ title }) => {
  useEffect(() => {
    document.title = `You clicked ${title} times`;
    // console.log('Document title has changed');

    return () => {
      document.title = '';
      // console.log('Document title has reset');
    };
  });

  return null;
};

export default DocumentTitleFunction;
