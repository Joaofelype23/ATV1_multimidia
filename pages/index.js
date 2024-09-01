// pages/index.js
import { useState } from 'react';
import StatusIndicator from '../components/StatusIndicator';

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <StatusIndicator playing={playing} />
      <button 
        style={{ marginTop: '20px' }} 
        onClick={() => setPlaying(!playing)}
      >
        Toggle Status
      </button>
    </div>
  );
}
