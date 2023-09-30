import React, { useState } from 'react';
import axios from 'axios';

const CorsTest = () => {
  const [name, setName] = useState<string>('');

  const handleClick = async () => {
    try {
      const result = await axios.get('http://localhost:4000');

      console.log('result ', result);
      setName(result.data.name);
    } catch (error) {
      console.log('error while getting user ', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get User Name</button>
      User name is : {name};
    </div>
  );
};

export default CorsTest;
