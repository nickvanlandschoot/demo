import { useState } from 'react'
import './App.css'
import { 
  AwsTaggingExecution, 
  PartnerRetentionExecution, 
  QuickWinsExecution 
} from './components/WorkflowExecutions';
import { DealMonitoringExecution } from './components/DealMonitoringExecution';
import { ACERegistrationExecution } from './components/ACERegistrationExecution';
import { CoMarketingExecution } from './components/CoMarketingExecution';

// Define personas
const personas = [
  { id: 'partner-manager', name: 'Partner Manager', description: 'Manages partner relationships and co-sell opportunities', icon: '👥' },
  { id: 'partner-leader', name: 'Partner Leader', description: 'Oversees partner strategy and performance metrics', icon: '📊' },
  { id: 'account-manager', name: 'Account Manager', description: 'Manages customer accounts with potential partner opportunities', icon: '💼' },
  { id: 'sales-leadership', name: 'Sales Leadership', description: 'Tracks partner influence on deals and revenue', icon: '📈' }
];

// Define workflow categories
const categories = [
  { id: 'aws-cosell', name: 'AWS Co-Selling', color: 'bg-blue-800', icon: '☁️' },
  { id: 'gsi-cosell', name: 'GSI/Service Partner Co-Selling', color: 'bg-indigo-800', icon: '🤝' }
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
  
  const filteredWorkflows = selectedPersona 
    ? workflows.filter(w => w.personas.includes(selectedPersona))
    : workflows;

  const resetDemo = () => {
    setSelectedWorkflow('');
    setDemoState('workflow-select');
  };

  const startDemo = (workflowId: string) => {
    setSelectedWorkflow(workflowId);
    setDemoState('demo-execution');
  };

  const handlePersonaSelect = (personaId: string) => {
    setSelectedPersona(personaId);
    setDemoState('workflow-select');
  };

  const getCurrentWorkflow = () => workflows.find(w => w.id === selectedWorkflow);
  
  const renderPersonaSelection = () => (
    <div className="my-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gradient">Select Your Persona</h2>
        <p className="text-gray-400 text-xl">Choose your role to see relevant Partner Assistant workflows</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {personas.map(persona => (
          <div 
            key={persona.id}
            className="border border-gray-700 rounded-xl p-6 cursor-pointer hover:bg-gray-800 hover:border-blue-500 transition-all flex gap-4"
            onClick={() => handlePersonaSelect(persona.id)}
          >
            <div className="text-4xl">{persona.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white">{persona.name}</h3>
              <p className="text-gray-400 mt-2">{persona.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWorkflowSelection = () => {
    const selectedPersonaObj = personas.find(p => p.id === selectedPersona);
    
    return (
      <div className="my-12 px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-block rounded-full bg-gray-800 px-4 py-2 mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-2">{selectedPersonaObj?.icon}</span>
              <span className="text-white">{selectedPersonaObj?.name}</span>
              <button 
                onClick={() => setDemoState('persona-select')}
                className="ml-3 text-blue-400 hover:text-blue-300"
              >
                Change
              </button>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gradient">Available Workflows</h2>
          <p className="text-gray-400 text-xl">Select a workflow to execute</p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {categories.map(category => {
            const categoryWorkflows = filteredWorkflows.filter(w => w.category === category.id);
            if (categoryWorkflows.length === 0) return null;
            
            return (
              <div key={category.id} className="rounded-2xl overflow-hidden">
                <div className={`p-4 ${category.color} text-white flex items-center`}>
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                </div>
                <div className="grid grid-cols-1 gap-4 p-4 bg-gray-800 rounded-b-2xl">
                  {categoryWorkflows.map(workflow => (
                    <div 
                      key={workflow.id}
                      className="bg-gray-900 border border-gray-700 rounded-xl p-5 cursor-pointer hover:border-blue-500 transition-all"
                      onClick={() => startDemo(workflow.id)}
                    >
                      <h4 className="text-xl font-semibold text-white">{workflow.name}</h4>
                      <p className="text-gray-400 mt-2">{workflow.description}</p>
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

  const renderDemoExecution = () => {
    const workflow = getCurrentWorkflow();
    
    return (
      <div className="my-8 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-sm text-gray-400">Selected Workflow</div>
            <div className="text-2xl font-semibold text-white">{workflow?.name}</div>
          </div>
          <button 
            onClick={resetDemo}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
          >
            Back to Workflows
          </button>
        </div>
        
        <div className="border border-gray-700 rounded-xl p-6 bg-gray-900">
          <div className="mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
              <span className="text-gray-300">You</span>
            </div>
            <div className="py-3 px-4 bg-blue-800 rounded-2xl text-white max-w-[80%]">
              {workflow?.prompt}
            </div>
          </div>
          
          <div className="mb-6 flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
              <span className="text-white">PA</span>
            </div>
            <div className="py-3 px-4 bg-gray-800 rounded-2xl text-white max-w-[80%]">
              I'll help you with that. Let me gather the necessary information and analyze the data.
            </div>
          </div>
          
          {/* Dynamic workflow execution based on the selected workflow */}
          {workflow?.id === 'aws-tagging' && (
            <AwsTaggingExecution onComplete={resetDemo} />
          )}
          
          {workflow?.id === 'partner-retention' && (
            <PartnerRetentionExecution onComplete={resetDemo} />
          )}
          
          {workflow?.id === 'quick-wins' && (
            <QuickWinsExecution onComplete={resetDemo} />
          )}
          
          {workflow?.id === 'deal-monitoring' && (
            <DealMonitoringExecution onComplete={resetDemo} />
          )}
          
          {workflow?.id === 'ace-registration-pm' && (
            <ACERegistrationExecution onComplete={resetDemo} />
          )}
          
          {workflow?.id === 'comarketing' && (
            <CoMarketingExecution onComplete={resetDemo} />
          )}
          
          {/* Fallback for workflows without specific implementations */}
          {!['aws-tagging', 'partner-retention', 'quick-wins', 'deal-monitoring', 'ace-registration-pm', 'comarketing'].includes(workflow?.id || '') && (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">This workflow is not fully implemented in the demo.</p>
              <button
                onClick={resetDemo}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Another Workflow
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <header className="py-6 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Partner Assistant</h1>
            <p className="text-gray-400 mt-1">Workflow demonstration</p>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </header>
      
      <main>
        {demoState === 'persona-select' && renderPersonaSelection()}
        {demoState === 'workflow-select' && renderWorkflowSelection()}
        {demoState === 'demo-execution' && renderDemoExecution()}
      </main>

      <footer className="mt-20 py-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          © 2025 Partner Assistant • All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default App