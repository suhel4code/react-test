import React, { useEffect, useState } from 'react';

import {
  init,
  AuthType,
  Page,
  EmbedEvent,
  logout,
} from '@thoughtspot/visual-embed-sdk';
import {
  LiveboardEmbed,
  useEmbedRef,
  SearchEmbed,
  AppEmbed,
} from '@thoughtspot/visual-embed-sdk/lib/src/react';

const HOST = '172.19.225.126';

const getToken = (username: string, password: string): Promise<string> => {
  console.log('getToken called');
  return fetch(`https://${HOST}:8443/api/rest/2.0/auth/token/full`, {
    headers: {
      'content-type': 'application/json',
    },
    body: `{"username":"${username}","validity_time_in_sec":3000,"org_id":0,"auto_create":false,"password":"${password}"}`,
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Token is generated ', data.token);
      return data.token;
    });
};

const authStatus = (username: string, password: string) => {
  console.log('auth init called ');
  return init({
    thoughtSpotHost: `https://${HOST}:8443`,
    authType: AuthType.TrustedAuthToken,
    username: 'tsadmin',
    getAuthToken: () => {
      return getToken(username, password);
    },
  });
};

const SearchEmbedComponent = () => {
  return (
    <SearchEmbed
      frameParams={{
        width: '100vw',
        height: '100vh',
      }}
      // dataSource=''
    />
  );
};

const LiveboardEmbedComponent = () => {
  const embedRef = useEmbedRef();
  return (
    <LiveboardEmbed
      frameParams={{
        height: 1200,
      }}
      ref={embedRef}
      liveboardId='bea79810-145f-4ad0-a02c-4177a6e7d861'
    />
  );
};

const FullAppComponent = () => {
  // Register event handlers
  const onInit = () => {
    console.log('App component onInit called');
    console.log(EmbedEvent.Init, {});
  };
  const onLoad = () => {
    console.log('App component onLoad called');
    console.log(EmbedEvent.Load, {});
  };
  const onRouteChange = () => {
    console.log(EmbedEvent.RouteChange, {});
  };
  return (
    <AppEmbed
      frameParams={{
        height: 600,
      }}
      pageId={Page.Liveboards}
      // disabledActions={[Action.Save, Action.Edit]}
      disabledActionReason='Contact your administrator'
      // onInit={onInit}
      // onLoad={onLoad}
      // onRouteChange={onRouteChange}
      // locale='zh-HANT'
    />
  );
};

export default function TrustedAuth() {
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    authStatus('tsadmin', 'admin');
    setShouldLoad(true);
  }, []);

  const handleClick = () => {
    authStatus('testadmin', 'Spot@123');
    setReload(true);
  };

  return shouldLoad ? (
    <div>
      <h1>Trusted Auth</h1>
      <button onClick={handleClick}>Change User</button>
      <br />
      <button
        onClick={() => {
          logout();
        }}
      >
        LogOut
      </button>
      <hr />
      {/* <SearchEmbedComponent /> */}
      <LiveboardEmbedComponent />
      {/* <FullAppComponent /> */}
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
