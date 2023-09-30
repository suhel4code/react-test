import { init, AuthType } from '@thoughtspot/visual-embed-sdk';

const HOST = '172.19.153.54';

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

export const authStatus = (
  username: string = 'tsadmin',
  password: string = 'admin'
) => {
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
