import React from 'react';

import { init, AuthType, Action } from '@thoughtspot/visual-embed-sdk';
import {
  LiveboardEmbed,
  useEmbedRef,
} from '@thoughtspot/visual-embed-sdk/lib/src/react';

console.log('outside code called ', 'Performance ticket without css');

init({
  thoughtSpotHost: 'https://dashboards-devfunc.calix.com/',
  authType: AuthType.None,
});

export default function PerformanceTicketWithoutCss() {
  const embedRef = useEmbedRef();
  return (
    <div>
      <h1>PerformanceTicket Without Css</h1>
      <hr />
      <LiveboardEmbed
        frameParams={{
          height: 1200,
        }}
        ref={embedRef}
        liveboardId='a1cd9526-f25a-443b-8a35-75d0adc6e04f'
        liveboardV2
      />
    </div>
  );
}
