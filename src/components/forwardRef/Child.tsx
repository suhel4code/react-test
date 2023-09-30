import React, { forwardRef } from 'react';

interface ChildProps {
  title: string;
}

const Child = forwardRef(
  (props: ChildProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <input ref={ref} />
      </div>
    );
  }
);

export default Child;
