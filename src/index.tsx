import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProps,
  Route,
  Link,
  RouterProvider,
} from 'react-router-dom';
import AuthNoneTest from './components/AuthNoneTest';
// import EffectTest from './components/EffectTest/EffectTest';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from '@apollo/client';

// import TabSwitch from './components/liveboardTabSwitch/TabSwitch';

// import App from './App';
// import Parent from './components/forwardRef/Parent';
// import ToastApp from './ToastApp';
// import PerformanceTicket from './components/PerformanceTicket';
// import TrustedAuth from './components/TrustedAuth';
// import Apollo from './components/apollo/Apollo';
// import PerformanceTicketWithoutCss from './components/PerformanceTicketWithoutCss';
// import CorsTest from './components/CorsTest';

// Apollo client Learning Code
// const client = new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// });

// // const client = ...

// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const Hello = () => {
  return <h1>Hello Vercel!</h1>;
};

const Show = () => {
  return (
    <>
      {/* <App /> */}
      {/* <ToastApp /> */}
      {/* <PerformanceTicket /> */}
      {/* <TrustedAuth /> */}
      <AuthNoneTest />
      {/* <Apollo /> */}
      {/* <TabSwitch /> */}
      {/* <EffectTest /> */}
      {/* <CorsTest /> */}
      {/* <Parent /> */}
    </>
  );
};

const router = createBrowserRouter([
  { path: '/', element: <Show /> },
  // { path: '/with', element: <PerformanceTicketWithoutCss /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
// root.render(
//   <ApolloProvider client={client}>
//     <Show />
//   </ApolloProvider>
// );
