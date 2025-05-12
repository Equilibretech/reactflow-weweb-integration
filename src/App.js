import React from 'react';
import ReactFlowSynoptic from './ReactFlowSynoptic';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      {/* Remplace "test-room" par un room_id réel si tu en as un */}
      <ReactFlowSynoptic roomId="3aa1b1cb-361f-4451-93b9-12c28b241173" />
    </div>
  );
}

export default App;
