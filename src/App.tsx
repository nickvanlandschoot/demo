import { useState } from 'react'
import './App.css'

// Define personas
const personas = [
  { id: 'partner-manager', name: 'Partner Manager', description: 'Manages partner relationships and co-sell opportunities' },
  { id: 'partner-leader', name: 'Partner Leader', description: 'Oversees partner strategy and performance metrics' },
  { id: 'account-manager', name: 'Account Manager', description: 'Manages customer accounts with potential partner opportunities' },
  { id: 'sales-leadership', name: 'Sales Leadership', description: 'Tracks partner influence on deals and revenue' }
];

// Define workflow categories
const categories = [
  { id: 'aws-cosell', name: 'AWS Co-Selling', color: 'bg-orange-100' },
  { id: 'gsi-cosell', name: 'GSI/Service Partner Co-Selling', color: 'bg-blue-100' }
];

// Define workflows
const workflows = [
  { 
    id: 'aws-tagging', 
    name: 'Identifying & Tagging AWS Opportunities', 
    category: 'aws-cosell',
    description: 'Automatically identify AWS mentions in CRM and properly tag opportunities',
    personas: ['partner-manager', 'account-manager'],
    prompt: 'Find and tag AWS opportunities in my pipeline'
  },
  { 
    id: 'ace-registration-pm', 
    name: 'Partner Manager ACE Deal Registrations', 
    category: 'aws-cosell',
    description: 'Register AWS deals in ACE and notify relevant parties',
    personas: ['partner-manager'],
    prompt: 'Register my AWS deals in ACE'
  },
  { 
    id: 'ace-registration-am', 
    name: 'Account Manager ACE Deal Registration', 
    category: 'aws-cosell',
    description: 'Check AWS tagging and facilitate collaboration with AWS counterparts',
    personas: ['account-manager'],
    prompt: 'Help me register this opportunity with AWS'
  },
  { 
    id: 'deal-monitoring', 
    name: 'Monitor Movement of Partner Related Deals', 
    category: 'aws-cosell',
    description: 'Track progress of deals and alert on stuck opportunities',
    personas: ['partner-manager', 'partner-leader', 'sales-leadership'],
    prompt: 'Show me the status of my partner deals'
  },
  { 
    id: 'ace-sync', 
    name: 'Keep AWS ACE Filings in Sync', 
    category: 'aws-cosell',
    description: 'Ensure CRM and ACE systems are properly synchronized',
    personas: ['partner-manager'],
    prompt: 'Check if my CRM opportunities are in sync with ACE'
  },
  { 
    id: 'partner-retention', 
    name: 'Partner Help for Customer Retention', 
    category: 'gsi-cosell',
    description: 'Identify partners within customer accounts with ranking information',
    personas: ['account-manager'],
    prompt: 'Which partners can help with my at-risk customer account?'
  },
  { 
    id: 'comarketing', 
    name: 'Co-Marketing Opportunities', 
    category: 'gsi-cosell',
    description: 'Identify high potential co-marketing partners sorted by account value',
    personas: ['partner-manager', 'partner-leader'],
    prompt: 'Find co-marketing opportunities with my partners'
  },
  { 
    id: 'quick-wins', 
    name: 'Quick Wins for New Partnerships', 
    category: 'gsi-cosell',
    description: 'Identify target accounts for quick wins with new partnerships',
    personas: ['partner-manager'],
    prompt: 'Find quick win opportunities for my new partnership'
  }
];

function App() {
  const [selectedPersona, setSelectedPersona] = useState('');
  const [selectedWorkflow, setSelectedWorkflow] = useState('');
  const [demoState, setDemoState] = useState('persona-select'); // persona-select, workflow-select, demo-execution
  const [demoStep, setDemoStep] = useState(0);
  const [chatMessages, setChatMessages] = useState<{sender: string, text: string}[]>([]);
  
  const filteredWorkflows = selectedPersona 
    ? workflows.filter(w => w.personas.includes(selectedPersona))
    : workflows;

  const resetDemo = () => {
    setSelectedWorkflow('');
    setDemoState('workflow-select');
    setDemoStep(0);
    setChatMessages([]);
  };

  const startDemo = (workflowId: string) => {
    setSelectedWorkflow(workflowId);
    setDemoState('demo-execution');
    const workflow = workflows.find(w => w.id === workflowId);
    if (workflow) {
      setChatMessages([
        { sender: 'user', text: workflow.prompt }
      ]);
      setTimeout(() => {
        setChatMessages(prev => [
          ...prev,
          { sender: 'assistant', text: `I'll help you with ${workflow.name}. Let me gather the relevant information...` }
        ]);
      }, 1000);
    }
  };

  const handlePersonaSelect = (personaId: string) => {
    setSelectedPersona(personaId);
    setDemoState('workflow-select');
  };

  const getCurrentWorkflow = () => workflows.find(w => w.id === selectedWorkflow);
  
  const renderPersonaSelection = () => (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Select Your Persona</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {personas.map(persona => (
          <div 
            key={persona.id}
            className="border rounded-lg p-6 cursor-pointer hover:bg-gray-50 hover:border-blue-500 transition-all"
            onClick={() => handlePersonaSelect(persona.id)}
          >
            <h3 className="text-xl font-semibold">{persona.name}</h3>
            <p className="text-gray-600 mt-2">{persona.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWorkflowSelection = () => {
    const selectedPersonaObj = personas.find(p => p.id === selectedPersona);
    
    return (
      <div className="my-8">
        <div className="mb-6 text-center">
          <div className="text-sm text-gray-500 mb-1">Selected Persona</div>
          <div className="text-xl font-semibold">{selectedPersonaObj?.name}</div>
          <button 
            onClick={() => setDemoState('persona-select')}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            Change Persona
          </button>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Available Workflows</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {categories.map(category => {
            const categoryWorkflows = filteredWorkflows.filter(w => w.category === category.id);
            if (categoryWorkflows.length === 0) return null;
            
            return (
              <div key={category.id} className={`p-4 rounded-lg ${category.color}`}>
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {categoryWorkflows.map(workflow => (
                    <div 
                      key={workflow.id}
                      className="bg-white border rounded-lg p-5 cursor-pointer hover:shadow-md transition-all"
                      onClick={() => startDemo(workflow.id)}
                    >
                      <h4 className="text-lg font-semibold">{workflow.name}</h4>
                      <p className="text-gray-600 mt-2">{workflow.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderChatMessage = (message: {sender: string, text: string}, index: number) => (
    <div 
      key={index} 
      className={`p-3 mb-3 rounded-lg ${
        message.sender === 'user' 
          ? 'bg-blue-100 ml-auto max-w-[80%] text-right' 
          : 'bg-gray-100 mr-auto max-w-[80%]'
      }`}
    >
      {message.text}
    </div>
  );

  // Mock workflow execution steps for each workflow
  const getWorkflowSteps = () => {
    const workflow = getCurrentWorkflow();
    if (!workflow) return [];
    
    switch(workflow.id) {
      case 'aws-tagging':
        return [
          {
            title: 'Searching CRM for AWS mentions',
            content: 'PA is scanning opportunity descriptions, emails, and call notes for mentions of AWS services or collaboration.'
          },
          {
            title: 'Analyzing opportunities',
            content: <div>
              <p className="mb-2">Found 5 opportunities with AWS mentions that are not properly tagged:</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Opportunity</th>
                    <th className="border p-2 text-left">Customer</th>
                    <th className="border p-2 text-left">Stage</th>
                    <th className="border p-2 text-left">AWS Mention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Acme Cloud Migration</td>
                    <td className="border p-2">Acme Corp</td>
                    <td className="border p-2">Discovery</td>
                    <td className="border p-2">"AWS S3 integration" in notes</td>
                  </tr>
                  <tr>
                    <td className="border p-2">TechCorp Platform Upgrade</td>
                    <td className="border p-2">TechCorp</td>
                    <td className="border p-2">Proposal</td>
                    <td className="border p-2">"AWS Lambda" in emails</td>
                  </tr>
                  <tr>
                    <td className="border p-2">GlobalRetail Data Solution</td>
                    <td className="border p-2">GlobalRetail</td>
                    <td className="border p-2">Negotiation</td>
                    <td className="border p-2">"AWS integration" in description</td>
                  </tr>
                </tbody>
              </table>
            </div>
          },
          {
            title: 'Setting tags in CRM',
            content: 'Automatically applying "AWS Partner" tag to the identified opportunities.'
          },
          {
            title: 'Summary Report',
            content: <div>
              <p className="mb-2">🎉 Successfully updated 5 opportunities with AWS tags:</p>
              <ul className="list-disc list-inside ml-4">
                <li>3 opportunities in Discovery stage</li>
                <li>1 opportunity in Proposal stage</li>
                <li>1 opportunity in Negotiation stage</li>
              </ul>
              <p className="mt-2">Total potential AWS co-sell value: $450,000</p>
            </div>
          }
        ];
      case 'partner-retention':
        return [
          {
            title: 'Analyzing at-risk account',
            content: 'PA is identifying partners who have existing relationships with your at-risk customer.'
          },
          {
            title: 'Partner mapping',
            content: <div>
              <p className="mb-2">Found 3 partners with relationships at Acme Corp:</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Partner</th>
                    <th className="border p-2 text-left">Relationship Strength</th>
                    <th className="border p-2 text-left">Previous Joint Deals</th>
                    <th className="border p-2 text-left">Key Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border p-2">TechConsult Partners</td>
                    <td className="border p-2">High (Executive Sponsor)</td>
                    <td className="border p-2">5</td>
                    <td className="border p-2">Sarah Johnson</td>
                  </tr>
                  <tr>
                    <td className="border p-2">CloudServePro</td>
                    <td className="border p-2">Medium</td>
                    <td className="border p-2">2</td>
                    <td className="border p-2">Mike Williams</td>
                  </tr>
                  <tr>
                    <td className="border p-2">DataSystems Inc</td>
                    <td className="border p-2">Low</td>
                    <td className="border p-2">1</td>
                    <td className="border p-2">Alex Torres</td>
                  </tr>
                </tbody>
              </table>
            </div>
          },
          {
            title: 'Partner recommendation',
            content: <div>
              <p className="mb-2">Recommended Partner: <strong>TechConsult Partners</strong></p>
              <p>Reasons:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Strong executive relationship with Acme Corp CIO</li>
                <li>5 successful joint deals in the past 12 months</li>
                <li>Complementary retention services</li>
                <li>90% success rate in similar retention scenarios</li>
              </ul>
              <p className="mt-4">Would you like me to connect you with Sarah Johnson from TechConsult Partners?</p>
            </div>
          }
        ];
      default:
        return [
          {
            title: 'Analyzing request',
            content: 'PA is processing your request and gathering relevant data.'
          },
          {
            title: 'Processing',
            content: 'Connecting to relevant systems and analyzing information...'
          },
          {
            title: 'Results',
            content: 'Here are the results for your request (mockup data for demo purposes).'
          }
        ];
    }
  };

  const renderDemoExecution = () => {
    const workflow = getCurrentWorkflow();
    const workflowSteps = getWorkflowSteps();
    
    return (
      <div className="my-8 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="text-sm text-gray-500">Selected Workflow</div>
            <div className="text-xl font-semibold">{workflow?.name}</div>
          </div>
          <button 
            onClick={resetDemo}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
          >
            Back to Workflows
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Chat interface */}
          <div className="w-full md:w-1/2 border rounded-lg p-4 bg-white h-[500px] flex flex-col">
            <div className="text-lg font-semibold mb-3 pb-2 border-b">Chat Simulation</div>
            <div className="flex-grow overflow-y-auto mb-3 space-y-3">
              {chatMessages.map(renderChatMessage)}
            </div>
            <div className="border-t pt-3">
              <div className="flex">
                <input
                  type="text"
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type a message..."
                  disabled
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                  disabled
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          
          {/* Workflow visualization */}
          <div className="w-full md:w-1/2 border rounded-lg p-4 bg-white h-[500px] overflow-y-auto">
            <div className="text-lg font-semibold mb-3 pb-2 border-b">Workflow Execution</div>
            
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`border rounded-lg p-3 transition-all ${
                    index <= demoStep 
                      ? 'opacity-100' 
                      : 'opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center text-white ${
                      index < demoStep 
                        ? 'bg-green-500' 
                        : index === demoStep 
                          ? 'bg-blue-500' 
                          : 'bg-gray-300'
                    }`}>
                      {index < demoStep ? '✓' : index + 1}
                    </div>
                    <div className="font-semibold">{step.title}</div>
                  </div>
                  
                  {index <= demoStep && (
                    <div className="pl-8 text-gray-700">
                      {step.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {demoStep < workflowSteps.length - 1 && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setDemoStep(prev => prev + 1)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Continue
                </button>
              </div>
            )}
            
            {demoStep === workflowSteps.length - 1 && (
              <div className="mt-4 text-center">
                <button
                  onClick={resetDemo}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Try Another Workflow
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="max-w-6xl mx-auto py-4 border-b">
        <h1 className="text-3xl font-bold text-center">Partner Assistant Workflow Demo</h1>
        <p className="text-center text-gray-600 mt-2">
          Interactive demonstration of Partner Assistant workflows for co-selling scenarios
        </p>
      </header>
      
      <main className="max-w-6xl mx-auto">
        {demoState === 'persona-select' && renderPersonaSelection()}
        {demoState === 'workflow-select' && renderWorkflowSelection()}
        {demoState === 'demo-execution' && renderDemoExecution()}
      </main>
    </div>
  )
}

export default App