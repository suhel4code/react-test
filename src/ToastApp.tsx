import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default function ToastApp() {
  const notify = () => toast('Wow so easy !');

  const styleObj = {
    border: '1px solid red',
  };

  return (
    <div style={styleObj}>
      <button onClick={notify}>Notify !</button>
      <ToastContainer containerId={'randomstring'} />
    </div>
  );
}
