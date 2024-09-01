// components/StatusIndicator.js
import { FaPlay, FaPause } from 'react-icons/fa';

const StatusIndicator = ({ playing }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {playing ? (
        <>
          <FaPause size={24} style={{ marginRight: '8px' }} />
          <span>Executando</span>
        </>
      ) : (
        <>
          <FaPlay size={24} style={{ marginRight: '8px' }} />
          <span>Pausado</span>
        </>
      )}
    </div>
  );
};

export default StatusIndicator;
