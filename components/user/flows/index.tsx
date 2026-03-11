"use client"
import { useState, useRef, DragEvent, MouseEvent } from 'react';
import { Plus, Play, Save, Undo, Redo, Trash2, Copy, Settings } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

interface FlowNode {
  id: string;
  type: string;
  label: string;
  x: number;
  y: number;
  connections: string[];
}

const flowTemplates = [
  { id: 1, name: 'Appointment Booking', description: 'Schedule appointments with customers', active: true },
  { id: 2, name: 'Customer Support', description: 'Handle general inquiries', active: false },
  { id: 3, name: 'Lead Qualification', description: 'Qualify and route sales leads', active: false },
];

const initialNodes: FlowNode[] = [
  { id: 'greeting', type: 'trigger', label: 'Call Start', x: 100, y: 100, connections: ['ask-name'] },
  { id: 'ask-name', type: 'question', label: 'Ask for Name', x: 100, y: 220, connections: ['check-appointment'] },
  { id: 'check-appointment', type: 'condition', label: 'Appointment Type?', x: 100, y: 340, connections: ['new-appointment', 'reschedule'] },
  { id: 'new-appointment', type: 'action', label: 'New Booking', x: 50, y: 460, connections: ['confirm'] },
  { id: 'reschedule', type: 'action', label: 'Reschedule', x: 250, y: 460, connections: ['confirm'] },
  { id: 'confirm', type: 'message', label: 'Confirm Details', x: 150, y: 580, connections: [] },
];

const componentPalette = [
  { type: 'trigger', label: 'Trigger', icon: '▶️', color: 'bg-accent-green-50 border-accent-green-200 text-accent-green-700' },
  { type: 'question', label: 'Question', icon: '❓', color: 'bg-primary-50 border-primary-200 text-primary-700' },
  { type: 'condition', label: 'Condition', icon: '◆', color: 'bg-accent-orange-50 border-accent-orange-200 text-accent-orange-700' },
  { type: 'action', label: 'Action', icon: '⚡', color: 'bg-accent-purple-50 border-accent-purple-200 text-accent-purple-700' },
  { type: 'message', label: 'Message', icon: '💬', color: 'bg-pink-50 border-pink-200 text-pink-700' },
  { type: 'transfer', label: 'Transfer', icon: '📞', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
];

const Flows = () => {
  const [nodes, setNodes] = useState<FlowNode[]>(initialNodes);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const nodeIdCounter = useRef(initialNodes.length);

  // Handle dragging a component from palette
  const handlePaletteDragStart = (e: DragEvent, type: string) => {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('componentType', type);
  };

  // Handle dropping on canvas
  const handleCanvasDrop = (e: DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    
    if (componentType && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 96; // Center the node (192px width / 2)
      const y = e.clientY - rect.top - 40; // Center vertically
      
      const component = componentPalette.find(c => c.type === componentType);
      const newNode: FlowNode = {
        id: `node-${nodeIdCounter.current++}`,
        type: componentType,
        label: component?.label || 'New Node',
        x: Math.max(0, x),
        y: Math.max(0, y),
        connections: []
      };
      
      setNodes([...nodes, newNode]);
      setSelectedNode(newNode.id);
    }
  };

  const handleCanvasDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  // Handle dragging existing nodes
  const handleNodeMouseDown = (e: MouseEvent, nodeId: string) => {
    if ((e.target as HTMLElement).closest('button')) return; // Don't drag if clicking buttons
    
    e.stopPropagation();
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    setDraggedNode(nodeId);
    setSelectedNode(nodeId);
    setDragOffset({
      x: e.clientX - node.x,
      y: e.clientY - node.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggedNode || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left - dragOffset.x, rect.width - 192));
    const y = Math.max(0, Math.min(e.clientY - rect.top - dragOffset.y, rect.height - 100));

    setNodes(nodes.map(node => 
      node.id === draggedNode 
        ? { ...node, x, y }
        : node
    ));
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
  };

  // Handle node deletion
  const handleDeleteNode = () => {
    if (!selectedNode) return;
    
    // Remove the node and any connections to it
    setNodes(nodes
      .filter(n => n.id !== selectedNode)
      .map(n => ({
        ...n,
        connections: n.connections.filter(c => c !== selectedNode)
      }))
    );
    setSelectedNode(null);
  };

  // Handle node duplication
  const handleDuplicateNode = () => {
    if (!selectedNode) return;
    
    const nodeToDuplicate = nodes.find(n => n.id === selectedNode);
    if (!nodeToDuplicate) return;

    const newNode: FlowNode = {
      ...nodeToDuplicate,
      id: `node-${nodeIdCounter.current++}`,
      x: nodeToDuplicate.x + 50,
      y: nodeToDuplicate.y + 50,
      connections: []
    };
    
    setNodes([...nodes, newNode]);
    setSelectedNode(newNode.id);
  };

  // Handle updating node label
  const handleUpdateLabel = (nodeId: string, newLabel: string) => {
    setNodes(nodes.map(node => 
      node.id === nodeId 
        ? { ...node, label: newLabel }
        : node
    ));
  };

  // Handle connection creation
  const handleStartConnection = (nodeId: string) => {
    setConnectingFrom(nodeId);
  };

  const handleEndConnection = (targetNodeId: string) => {
    if (connectingFrom && connectingFrom !== targetNodeId) {
      setNodes(nodes.map(node => 
        node.id === connectingFrom 
          ? { ...node, connections: [...new Set([...node.connections, targetNodeId])] }
          : node
      ));
    }
    setConnectingFrom(null);
  };

  const handleRemoveConnection = (fromNodeId: string, toNodeId: string) => {
    setNodes(nodes.map(node => 
      node.id === fromNodeId 
        ? { ...node, connections: node.connections.filter(c => c !== toNodeId) }
        : node
    ));
  };

  // Handle creating a new flow
  const handleNewFlow = () => {
    setNodes([]);
    setSelectedNode(null);
    setConnectingFrom(null);
    setDraggedNode(null);
  };

  const selectedNodeData = nodes.find(n => n.id === selectedNode);

  return (
    <div className="h-screen bg-slate-50 p-2 sm:p-8 overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Flow Builder</h1>
              <p className="text-slate-600">Design conversation flows with drag-and-drop</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" icon={Undo}>Undo</Button>
              <Button variant="ghost" icon={Redo}>Redo</Button>
              <Button variant="secondary" icon={Save}>Save Draft</Button>
              <Button variant="primary" icon={Play}>Test Flow</Button>
            </div>
          </div>

          {/* Flow Templates */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {flowTemplates.map((template) => (
              <button
                key={template.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all whitespace-nowrap shadow-sm ${
                  template.active
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <span className="font-medium text-sm text-slate-900">{template.name}</span>
                {template.active && <Badge variant="success" size="sm">Active</Badge>}
              </button>
            ))}
            <Button variant="ghost" size="sm" icon={Plus} onClick={handleNewFlow}>New Flow</Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
          {/* Component Palette */}
          <div className="col-span-2 bg-white rounded-xl border border-slate-200/60 shadow-md p-4 overflow-y-auto">
            <h3 className="font-semibold text-slate-900 mb-4">Components</h3>
            <div className="space-y-2">
              {componentPalette.map((component) => (
                <div
                  key={component.type}
                  className={`p-3 rounded-lg border-2 cursor-move hover:shadow-md transition-all ${component.color}`}
                  draggable
                  onDragStart={(e) => handlePaletteDragStart(e, component.type)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{component.icon}</span>
                    <span className="text-sm font-medium">{component.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Tips</h4>
              <div className="space-y-2 text-xs text-slate-600">
                <p>• Drag components to canvas</p>
                <p>• Click nodes to select</p>
                <p>• Drag nodes to reposition</p>
                <p>• Use connect button to link nodes</p>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div 
            ref={canvasRef}
            className="col-span-7 bg-white rounded-xl border border-slate-200/60 shadow-md relative overflow-auto"
            onDrop={handleCanvasDrop}
            onDragOver={handleCanvasDragOver}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="relative min-w-full min-h-full bg-slate-50" 
              style={{
                backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                width: '100%',
                height: '100%',
                minHeight: '800px'
              }}
            >
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '800px' }}>
                {nodes.map((node) => 
                  node.connections.map((connId) => {
                    const targetNode = nodes.find(n => n.id === connId);
                    if (!targetNode) return null;
                    return (
                      <g key={`${node.id}-${connId}`}>
                        <line
                          x1={node.x + 96}
                          y1={node.y + 80}
                          x2={targetNode.x + 96}
                          y2={targetNode.y}
                          stroke="#00bcd4"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                        />
                        {/* Delete connection button */}
                        <circle
                          cx={(node.x + targetNode.x) / 2 + 96}
                          cy={(node.y + 80 + targetNode.y) / 2}
                          r="8"
                          fill="#f44336"
                          className="cursor-pointer pointer-events-auto hover:opacity-80"
                          onClick={() => handleRemoveConnection(node.id, connId)}
                        />
                        <text
                          x={(node.x + targetNode.x) / 2 + 96}
                          y={(node.y + 80 + targetNode.y) / 2}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fontSize="10"
                          className="pointer-events-none"
                        >
                          ×
                        </text>
                      </g>
                    );
                  })
                )}
                
                {/* Temporary connection line while connecting */}
                {connectingFrom && (
                  <line
                    x1={nodes.find(n => n.id === connectingFrom)!.x + 96}
                    y1={nodes.find(n => n.id === connectingFrom)!.y + 80}
                    x2={nodes.find(n => n.id === connectingFrom)!.x + 96}
                    y2={nodes.find(n => n.id === connectingFrom)!.y + 150}
                    stroke="#ff9800"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                )}
              </svg>

              {/* Flow Nodes */}
              {nodes.map((node) => {
                const component = componentPalette.find(c => c.type === node.type);
                return (
                  <div
                    key={node.id}
                    className={`absolute w-48 p-4 rounded-lg border-2 cursor-move shadow-md hover:shadow-lg transition-all select-none ${
                      selectedNode === node.id 
                        ? 'ring-2 ring-primary-500 ring-offset-2' 
                        : ''
                    } ${component?.color || 'bg-white border-slate-200'}`}
                    style={{ left: node.x, top: node.y }}
                    onMouseDown={(e) => handleNodeMouseDown(e, node.id)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (connectingFrom) {
                        handleEndConnection(node.id);
                      } else {
                        setSelectedNode(node.id);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{component?.icon}</span>
                      <span className="text-xs font-semibold uppercase text-slate-600">{node.type}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 mb-3">{node.label}</p>
                    
                    {/* Connection button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (connectingFrom === node.id) {
                          setConnectingFrom(null);
                        } else {
                          handleStartConnection(node.id);
                        }
                      }}
                      className={`w-full px-2 py-1 text-xs rounded transition-all shadow-sm ${
                        connectingFrom === node.id
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {connectingFrom === node.id ? 'Click target node' : '+ Connect'}
                    </button>
                  </div>
                );
              })}

              {/* Canvas Instructions */}
              {nodes.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-10 h-10 text-slate-400" />
                    </div>
                    <p className="text-lg font-semibold text-slate-900 mb-2">Drag components here</p>
                    <p className="text-sm text-slate-600">Start building your conversation flow</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Properties Panel */}
          <div className="col-span-3 bg-white rounded-xl border border-slate-200/60 shadow-md p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Properties</h3>
              {selectedNode && (
                <button 
                  onClick={handleDeleteNode}
                  className="p-1.5 rounded-lg hover:bg-accent-red-50 text-accent-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {selectedNodeData ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Node Label</label>
                  <input
                    type="text"
                    value={selectedNodeData.label}
                    onChange={(e) => handleUpdateLabel(selectedNode!, e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Node Type</label>
                  <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
                    {selectedNodeData.type}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message Text</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                    placeholder="Enter the message to say..."
                    defaultValue="Hi, thanks for calling! May I have your name please?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Variable Name</label>
                  <input
                    type="text"
                    placeholder="customer_name"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Connections</label>
                  <div className="space-y-2">
                    {selectedNodeData.connections.length > 0 ? (
                      selectedNodeData.connections.map((connId) => {
                        const targetNode = nodes.find(n => n.id === connId);
                        return (
                          <div key={connId} className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg text-sm">
                            <span className="text-slate-700">{targetNode?.label || connId}</span>
                            <button
                              onClick={() => handleRemoveConnection(selectedNode!, connId)}
                              className="text-accent-red-600 hover:text-accent-red-700"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-xs text-slate-500 px-3 py-2">No connections</p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    icon={Copy} 
                    className="w-full justify-start"
                    onClick={handleDuplicateNode}
                  >
                    Duplicate Node
                  </Button>
                  <Button variant="ghost" size="sm" icon={Settings} className="w-full justify-start">
                    Advanced Settings
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-sm text-slate-600">Select a node to edit its properties</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flows;