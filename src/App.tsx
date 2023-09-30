import React from 'react';

import AuthNoneTest from './components/AuthNoneTest';
import PerformanceTicket from './components/PerformanceTicket';
import TrustedAuth from './components/TrustedAuth';

export default function App() {
  return (
    <div>
      Hello World!
      <hr />
      {/* <AuthNoneTest /> */}
      <TrustedAuth />
      {/* <PerformanceTicket /> */}
    </div>
  );
}
