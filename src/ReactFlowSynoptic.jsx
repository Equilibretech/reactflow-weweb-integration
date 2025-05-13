import React, { useEffect, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';

const nodeWidth = 200;
const nodeHeight = 70;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges, direction = 'LR') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

const ReactFlowSynoptic = ({ roomId }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    console.log("Chargement du roomId :", roomId);
    setNodes([]);
    setEdges([]);
    setIsEmpty(false);

    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:Dosppuhb/get_graph_by_room_id?room_id=${roomId}`)
      .then(res => res.json())
      .then(json => {
        if (!json || !Array.isArray(json.nodes) || !Array.isArray(json.edges)) {
          console.warn("Réponse Xano invalide ou incomplète :", json);
          setIsEmpty(true);
          return;
        }

        if (json.nodes.length === 0 && json.edges.length === 0) {
          setIsEmpty(true);
          return;
        }

        const layouted = getLayoutedElements(json.nodes, json.edges);
        setNodes(layouted.nodes);
        setEdges(layouted.edges);
      })
      .catch(err => {
        console.error("Erreur lors de l'appel API Xano :", err);
        setIsEmpty(true);
      });
  }, [roomId, setNodes, setEdges]);

  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isEmpty ? (
        <div style={{ fontSize: '1.2rem', color: '#888' }}>
          Aucun synoptique trouvé pour cette salle.
        </div>
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
        />
      )}
    </div>
  );
};

export default ReactFlowSynoptic;
