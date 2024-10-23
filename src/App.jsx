import React, { useState } from 'react';
import QRcodeReader from './qr';

const App = () => {
  const [vr, setVR] = useState(false);

  return (
    <div>
      <button onClick={() => setVR(!vr)}>Click me</button>
      {vr ? <QRcodeReader /> : ""}
    </div>
  );
};

export default App;
