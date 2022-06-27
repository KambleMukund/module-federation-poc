import React from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));
const RemoteButtonRed = React.lazy(() => import("remote2/ButtonRed"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
      <RemoteButtonRed/>
    </React.Suspense>
  </div>
);

export default App;
