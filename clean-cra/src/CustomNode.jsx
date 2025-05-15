import { Handle } from 'reactflow';

const CustomNode = ({ data }) => {
  const { label, ports } = data;

  const inPorts = ports?.filter(p => p.direction?.toLowerCase().includes('depuis')) || [];
  const outPorts = ports?.filter(p => p.direction?.toLowerCase().includes('vers')) || [];

  const getPortY = (index) => 40 + index * 30;

  return (
    <div style={{
      background: '#fff',
      border: '2px solid #444',
      padding: 10,
      minWidth: 200,
      minHeight: Math.max(inPorts.length, outPorts.length) * 32 + 60,
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 6 }}>{label}</div>

      {/* IN ports - left */}
      {inPorts.map((port, i) => (
        <div key={port.id} style={{ position: 'absolute', top: `${getPortY(i)}px`, left: -6, display: 'flex', alignItems: 'center' }}>
          <Handle
            type="target"
            position="left"
            id={port.id}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          />
          <span style={{ marginLeft: 8, fontSize: 11 }}>{port.label}</span>
        </div>
      ))}

      {/* OUT ports - right */}
      {outPorts.map((port, i) => (
        <div key={port.id} style={{ position: 'absolute', top: `${getPortY(i)}px`, right: -6, display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <Handle
            type="source"
            position="right"
            id={port.id}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          />
          <span style={{ marginRight: 8, fontSize: 11 }}>{port.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomNode;
