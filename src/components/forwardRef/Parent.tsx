import React, { useRef } from 'react';
import Child from './Child';

const Parent = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref) {
      ref?.current?.focus();
    }
  };

  return (
    <div>
      <button onClick={handleClick}> Focus </button>
      <Child title='Hi There!' ref={ref} />
    </div>
  );
};

export default Parent;
