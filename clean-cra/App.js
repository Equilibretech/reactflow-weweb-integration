import React from 'react';
import ReactFlowSynoptic from './ReactFlowSynoptic';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const roomId = urlParams.get("roomId"); 

  console.log("roomId reçu :", roomId); // debug temporaire

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlowSynoptic roomId={roomId} />
    </div>
  );
}

export default App;
