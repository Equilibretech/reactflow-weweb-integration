import { Handle } from 'reactflow';

const CustomNode = ({ data }) => {
  const { label, ports } = data;

  // Filtrage des ports par direction
  const inPorts = ports?.filter(p => p.direction === 'IN' || p.direction === 'IO') || [];
  const outPorts = ports?.filter(p => p.direction === 'OUT' || p.direction === 'IO') || [];

  // Fonction de positionnement vertical
  const getPortStyle = (index) => ({
    top: `${40 + index * 20}px`
  });

  return (
    <div className="custom-node bg-white rounded-lg border p-2 shadow-md relative">
      <div className="text-center font-bold">{label}</div>

      {inPorts.map((port, i) => (
        <Handle
          key={`in-${port.id}`}
          type="target"
          position="left"
          id={port.id}
          style={getPortStyle(i)}
        />
      ))}

      {outPorts.map((port, i) => (
        <Handle
          key={`out-${port.id}`}
          type="source"
          position="right"
          id={port.id}
          style={getPortStyle(i)}
        />
      ))}
    </div>
  );
};

export default CustomNode;
