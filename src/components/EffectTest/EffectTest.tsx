import { useState, useEffect } from 'react';

export default function EffectTest() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    console.log('effect runs');
  }, [test]);

  return (
    <div>
      <button onClick={() => setTest(true)}>Change State</button>
      <hr />
      <h1>Value is : {test}</h1>
    </div>
  );
}
