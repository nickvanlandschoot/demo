// Mock CRM Data
export const opportunities = [
  {
    id: 'OPP-1001',
    name: 'Acme Cloud Migration',
    description: 'Enterprise-wide cloud migration to AWS and implementation of new data storage architecture',
    customer: 'Acme Corp',
    value: 450000,
    stage: 'Discovery',
    closeDate: '2025-08-15',
    owner: 'Sarah Johnson',
    notes: 'Customer is interested in AWS S3 integration for their data storage needs. May need to involve AWS Partner Network for specialized guidance.',
    calls: [
      {
        date: '2025-04-15',
        participants: ['Sarah Johnson', 'John Smith (Acme Corp CTO)'],
        summary: 'Discussed AWS infrastructure requirements and S3 storage options for large datasets'
      }
    ],
    emails: [
      {
        date: '2025-04-18',
        sender: 'john.smith@acmecorp.com',
        subject: 'AWS Migration Questions',
        content: 'Following our call, I have some questions about how your solution would integrate with our existing AWS Lambda functions...'
      }
    ],
    tags: []
  },
  {
    id: 'OPP-1002',
    name: 'TechCorp Platform Upgrade',
    description: 'Upgrading existing platform with enhanced security features and cloud integrations',
    customer: 'TechCorp',
    value: 275000,
    stage: 'Proposal',
    closeDate: '2025-07-30',
    owner: 'Michael Williams',
    notes: 'Customer requires AWS integration for their existing applications. We should highlight our AWS competencies.',
    calls: [
      {
        date: '2025-04-10',
        participants: ['Michael Williams', 'Lisa Tang (TechCorp CIO)'],
        summary: 'Discussed AWS integration points and how we can leverage AWS Identity for SSO capabilities'
      }
    ],
    emails: [
      {
        date: '2025-04-12',
        sender: 'michael.williams@company.com',
        subject: 'AWS Lambda details',
        content: 'Here are the AWS Lambda architecture diagrams we discussed in our meeting. These show how we can integrate...'
      }
    ],
    tags: []
  },
  {
    id: 'OPP-1003',
    name: 'GlobalRetail Data Solution',
    description: 'Implementation of real-time data analytics platform for retail operations',
    customer: 'GlobalRetail',
    value: 520000,
    stage: 'Negotiation',
    closeDate: '2025-06-30',
    owner: 'Jessica Lee',
    notes: 'Solution will require AWS integration for their data pipeline. GlobalRetail prefers AWS for all cloud services.',
    calls: [
      {
        date: '2025-03-28',
        participants: ['Jessica Lee', 'Robert Chen (GlobalRetail CTO)'],
        summary: 'Reviewed AWS infrastructure requirements and discussed AWS Kinesis for real-time data processing'
      }
    ],
    emails: [
      {
        date: '2025-04-02',
        sender: 'robert.chen@globalretail.com',
        subject: 'AWS Integration Proposal',
        content: 'Thanks for the detailed proposal. We like your approach to AWS integration, especially the use of AWS Glue for ETL processes...'
      }
    ],
    tags: []
  },
  {
    id: 'OPP-1004',
    name: 'FinTech Security Upgrade',
    description: 'Implementation of enhanced security protocols and compliance monitoring',
    customer: 'AlphaBank',
    value: 380000,
    stage: 'Discovery',
    closeDate: '2025-09-15',
    owner: 'David Rodriguez',
    notes: 'AlphaBank is considering cloud migration to AWS for their security infrastructure.',
    calls: [
      {
        date: '2025-04-20',
        participants: ['David Rodriguez', 'Maria Lopez (AlphaBank CISO)'],
        summary: 'Discussed AWS Security Hub and how it can provide centralized visibility into their security posture'
      }
    ],
    emails: [
      {
        date: '2025-04-22',
        sender: 'maria.lopez@alphabank.com',
        subject: 'AWS Compliance Requirements',
        content: 'Following our discussion about AWS security services, I need more information about how your solution addresses GDPR compliance in AWS...'
      }
    ],
    tags: []
  },
  {
    id: 'OPP-1005',
    name: 'MediCorp Patient Platform',
    description: 'Patient engagement platform with telehealth capabilities',
    customer: 'MediCorp',
    value: 620000,
    stage: 'Discovery',
    closeDate: '2025-10-30',
    owner: 'Thomas Wilson',
    notes: 'MediCorp is committed to AWS as their cloud provider and requires deep integration with AWS services.',
    calls: [
      {
        date: '2025-04-25',
        participants: ['Thomas Wilson', 'Dr. Sarah Carter (MediCorp CIO)'],
        summary: 'Reviewed AWS healthcare compliance requirements and discussed AWS HealthLake integration options'
      }
    ],
    emails: [
      {
        date: '2025-04-27',
        sender: 'thomas.wilson@company.com',
        subject: 'AWS Health Services Architecture',
        content: 'Attached is the architecture diagram showing how our solution leverages AWS Health services while maintaining HIPAA compliance...'
      }
    ],
    tags: []
  }
];

// Mock AWS ACE Registration Data
export const aceRegistrations = [
  {
    id: 'ACE-4001',
    opportunityId: 'OPP-1002',
    status: 'Registered',
    registrationDate: '2025-04-19',
    awsAccountManager: 'Emily Zhang',
    estimatedAwsRevenue: 120000,
    services: ['AWS Lambda', 'AWS IAM', 'AWS Cognito'],
    lastUpdated: '2025-04-19'
  },
  {
    id: 'ACE-4002',
    opportunityId: 'OPP-1003',
    status: 'Pending Approval',
    registrationDate: '2025-04-15',
    awsAccountManager: 'Marcus Johnson',
    estimatedAwsRevenue: 210000,
    services: ['AWS Kinesis', 'AWS Glue', 'AWS QuickSight'],
    lastUpdated: '2025-04-17'
  }
];

// Mock Partner Organizations
export const partners = [
  {
    id: 'PTR-001',
    name: 'TechConsult Partners',
    tier: 'Premier',
    specialization: 'Systems Integration',
    awsCompetencies: ['Migration', 'DevOps', 'Data & Analytics'],
    contacts: [
      {
        name: 'Sarah Johnson',
        role: 'Partner Alliance Manager',
        email: 'sarah.johnson@techconsult.com',
        phone: '555-123-4567'
      },
      {
        name: 'James Wilson',
        role: 'Technical Director',
        email: 'james.wilson@techconsult.com',
        phone: '555-123-9876'
      }
    ],
    accounts: [
      {
        name: 'Acme Corp',
        relationshipStrength: 'High',
        relationshipLevel: 'Executive Sponsor',
        contacts: ['John Davis (CIO)', 'Lisa Martinez (CTO)'],
        previousDeals: 5,
        lastDealDate: '2025-01-15'
      },
      {
        name: 'TechCorp',
        relationshipStrength: 'Medium',
        relationshipLevel: 'Department Manager',
        contacts: ['Michael Brown (IT Director)'],
        previousDeals: 2,
        lastDealDate: '2024-11-03'
      },
      {
        name: 'MediCorp',
        relationshipStrength: 'Low',
        relationshipLevel: 'Project Manager',
        contacts: ['Jennifer Adams (Digital Transformation Lead)'],
        previousDeals: 1,
        lastDealDate: '2024-08-22'
      }
    ]
  },
  {
    id: 'PTR-002',
    name: 'CloudServePro',
    tier: 'Advanced',
    specialization: 'Cloud Managed Services',
    awsCompetencies: ['MSP', 'Security', 'Storage'],
    contacts: [
      {
        name: 'Mike Williams',
        role: 'Channel Manager',
        email: 'mike.williams@cloudservepro.com',
        phone: '555-789-1234'
      },
      {
        name: 'Emily Chen',
        role: 'Solutions Architect',
        email: 'emily.chen@cloudservepro.com',
        phone: '555-789-5678'
      }
    ],
    accounts: [
      {
        name: 'Acme Corp',
        relationshipStrength: 'Medium',
        relationshipLevel: 'Department Manager',
        contacts: ['Robert Jackson (Cloud Ops Manager)'],
        previousDeals: 2,
        lastDealDate: '2024-09-10'
      },
      {
        name: 'GlobalRetail',
        relationshipStrength: 'High',
        relationshipLevel: 'Executive Sponsor',
        contacts: ['Sarah Thompson (CIO)', 'David Rodriguez (Head of IT)'],
        previousDeals: 4,
        lastDealDate: '2025-02-28'
      }
    ]
  },
  {
    id: 'PTR-003',
    name: 'DataSystems Inc',
    tier: 'Select',
    specialization: 'Data Analytics',
    awsCompetencies: ['Data & Analytics', 'Machine Learning'],
    contacts: [
      {
        name: 'Alex Torres',
        role: 'Sales Director',
        email: 'alex.torres@datasystems.com',
        phone: '555-456-7890'
      }
    ],
    accounts: [
      {
        name: 'Acme Corp',
        relationshipStrength: 'Low',
        relationshipLevel: 'Project Manager',
        contacts: ['Jennifer Lee (Data Analyst)'],
        previousDeals: 1,
        lastDealDate: '2024-06-15'
      },
      {
        name: 'AlphaBank',
        relationshipStrength: 'Medium',
        relationshipLevel: 'Department Manager',
        contacts: ['Chris Wong (Analytics Lead)'],
        previousDeals: 2,
        lastDealDate: '2024-12-10'
      }
    ]
  },
  {
    id: 'PTR-004',
    name: 'SecureCloud Solutions',
    tier: 'Advanced',
    specialization: 'Security & Compliance',
    awsCompetencies: ['Security', 'Financial Services', 'Healthcare'],
    contacts: [
      {
        name: 'Lisa Patel',
        role: 'Partner Manager',
        email: 'lisa.patel@securecloud.com',
        phone: '555-234-5678'
      }
    ],
    accounts: [
      {
        name: 'AlphaBank',
        relationshipStrength: 'High',
        relationshipLevel: 'Executive Sponsor',
        contacts: ['Mark Johnson (CISO)', 'Rachel Garcia (Security Director)'],
        previousDeals: 5,
        lastDealDate: '2025-03-15'
      },
      {
        name: 'MediCorp',
        relationshipStrength: 'High',
        relationshipLevel: 'Executive Sponsor',
        contacts: ['Dr. Robert Chen (CIO)', 'Lisa Martinez (Compliance Director)'],
        previousDeals: 3,
        lastDealDate: '2025-01-20'
      }
    ]
  }
];

// Mock Marketing Campaign Data
export const marketingCampaigns = [
  {
    id: 'MKT-001',
    name: 'Cloud Migration Summit',
    type: 'Webinar Series',
    targetAudience: 'IT Decision Makers',
    partners: ['TechConsult Partners', 'CloudServePro'],
    leads: 145,
    conversionRate: 0.12,
    revenueGenerated: 250000,
    dateRange: '2025-01-15 to 2025-02-15'
  },
  {
    id: 'MKT-002',
    name: 'Financial Services Security Forum',
    type: 'In-person Event',
    targetAudience: 'Financial Services CISOs',
    partners: ['SecureCloud Solutions'],
    leads: 68,
    conversionRate: 0.18,
    revenueGenerated: 320000,
    dateRange: '2025-03-10 to 2025-03-11'
  },
  {
    id: 'MKT-003',
    name: 'Healthcare Data Analytics Workshop',
    type: 'Hands-on Workshop',
    targetAudience: 'Healthcare IT Leaders',
    partners: ['DataSystems Inc', 'SecureCloud Solutions'],
    leads: 52,
    conversionRate: 0.15,
    revenueGenerated: 180000,
    dateRange: '2025-02-25'
  }
];

// Mock Target Accounts for Quick Wins
export const targetAccounts = [
  {
    id: 'TA-001',
    name: 'Horizon Manufacturing',
    industry: 'Manufacturing',
    size: 'Enterprise',
    needs: 'Cloud Migration, IoT Integration',
    status: 'Prospect',
    accountManager: {
      name: 'Jason Miller',
      partnerFriendlinessScore: 8.5, // Out of 10
      previousPartnerDeals: 12
    },
    matchedPartners: [
      {
        name: 'TechConsult Partners',
        fitScore: 95, // Out of 100
        winProbability: 0.75, // 75%
        reason: 'Strong manufacturing expertise and previous success with similar migrations'
      },
      {
        name: 'CloudServePro',
        fitScore: 80,
        winProbability: 0.60,
        reason: 'Good IoT capabilities but less manufacturing experience'
      }
    ]
  },
  {
    id: 'TA-002',
    name: 'NexGen Healthcare',
    industry: 'Healthcare',
    size: 'Mid-market',
    needs: 'HIPAA Compliance, Data Analytics',
    status: 'Prospect',
    accountManager: {
      name: 'Rachel Garcia',
      partnerFriendlinessScore: 9.2,
      previousPartnerDeals: 18
    },
    matchedPartners: [
      {
        name: 'SecureCloud Solutions',
        fitScore: 98,
        winProbability: 0.85,
        reason: 'Specialized in healthcare compliance and security'
      },
      {
        name: 'DataSystems Inc',
        fitScore: 82,
        winProbability: 0.65,
        reason: 'Strong data analytics capabilities but less healthcare focus'
      }
    ]
  },
  {
    id: 'TA-003',
    name: 'Metro Financial Group',
    industry: 'Financial Services',
    size: 'Enterprise',
    needs: 'Security Compliance, Data Migration',
    status: 'Target',
    accountManager: {
      name: 'David Thompson',
      partnerFriendlinessScore: 6.8,
      previousPartnerDeals: 5
    },
    matchedPartners: [
      {
        name: 'SecureCloud Solutions',
        fitScore: 90,
        winProbability: 0.70,
        reason: 'Strong financial services security expertise'
      },
      {
        name: 'TechConsult Partners',
        fitScore: 75,
        winProbability: 0.50,
        reason: 'Good data migration capabilities but less financial focus'
      }
    ]
  }
];

// Mock Deal Progress Data
export const dealProgressData = [
  {
    id: 'OPP-1001',
    name: 'Acme Cloud Migration',
    customer: 'Acme Corp',
    stage: 'Discovery',
    daysInStage: 15,
    averageDaysInStage: 10,
    stakeholders: [
      {
        name: 'John Smith',
        title: 'CTO',
        lastContact: '2025-04-18'
      },
      {
        name: 'Lisa Wong',
        title: 'IT Director',
        lastContact: '2025-04-22'
      }
    ],
    partnerInvolvement: [
      {
        partner: 'TechConsult Partners',
        contactFrequency: 'Weekly',
        lastActivity: '2025-04-24',
        activityType: 'Solution Design Workshop'
      }
    ],
    riskFactors: [
      {
        type: 'Stalled Communication',
        description: 'No response from IT Director for 7+ days',
        severity: 'Medium'
      }
    ],
    nextSteps: [
      {
        action: 'Schedule executive sponsor meeting',
        owner: 'Sarah Johnson',
        dueDate: '2025-05-05'
      },
      {
        action: 'Follow up with IT Director',
        owner: 'Sarah Johnson',
        dueDate: '2025-04-30'
      }
    ]
  },
  {
    id: 'OPP-1003',
    name: 'GlobalRetail Data Solution',
    customer: 'GlobalRetail',
    stage: 'Negotiation',
    daysInStage: 25,
    averageDaysInStage: 15,
    stakeholders: [
      {
        name: 'Robert Chen',
        title: 'CTO',
        lastContact: '2025-04-26'
      },
      {
        name: 'Maria Rodriguez',
        title: 'Data Analytics Lead',
        lastContact: '2025-04-21'
      }
    ],
    partnerInvolvement: [
      {
        partner: 'DataSystems Inc',
        contactFrequency: 'Bi-weekly',
        lastActivity: '2025-04-20',
        activityType: 'Architecture Review'
      },
      {
        partner: 'CloudServePro',
        contactFrequency: 'Weekly',
        lastActivity: '2025-04-25',
        activityType: 'Contract Discussion'
      }
    ],
    riskFactors: [
      {
        type: 'Price Negotiation',
        description: 'Customer pushing for additional 15% discount',
        severity: 'High'
      },
      {
        type: 'Competitive Pressure',
        description: 'Competing solution from major vendor being evaluated',
        severity: 'Medium'
      }
    ],
    nextSteps: [
      {
        action: 'Prepare revised pricing proposal',
        owner: 'Jessica Lee',
        dueDate: '2025-04-30'
      },
      {
        action: 'Schedule executive alignment call',
        owner: 'VP Sales',
        dueDate: '2025-05-02'
      }
    ]
  }
];

// Mock Back Office Workflow Data
export const backOfficeWorkflows = [
  {
    name: 'Budget',
    description: 'Annual and quarterly budget planning, tracking, and variance analysis.',
    status: 'In Progress',
    details: '2024 budget cycle underway. Reviewing department submissions and aligning with strategic goals.'
  },
  {
    name: 'Accounts Payable',
    description: 'Processing and payment of vendor invoices, expense management, and reconciliation.',
    status: 'Automated',
    details: 'Oracle on-prem integration in place. Most invoices processed automatically.'
  },
  {
    name: 'Accounts Receivable',
    description: 'Customer invoicing, collections, and cash application.',
    status: 'Needs Review',
    details: 'Aging report shows 5% overdue. Exploring automation for reminders.'
  },
  {
    name: 'Payroll',
    description: 'Employee payroll processing, tax withholdings, and direct deposit.',
    status: 'Stable',
    details: 'All payrolls processed on time. Reviewing new entitlements for next cycle.'
  },
  {
    name: 'Entitlements',
    description: 'Management of employee benefits, leave, and statutory entitlements.',
    status: 'Updating',
    details: 'Policy updates in progress for 2024. Integrating with payroll.'
  },
  {
    name: 'Dashboards (PowerBI)',
    description: 'Business intelligence dashboards for finance and operations.',
    status: 'Active',
    details: 'PowerBI dashboards refreshed daily. Orbit Analytics integration planned.'
  },
  {
    name: 'Oracle On-Prem Software',
    description: 'Legacy ERP and financials running on-premises.',
    status: 'Integrating',
    details: 'Orbit Analytics integration in progress. Exploring cloud migration.'
  },
  {
    name: 'Orbit Analytics',
    description: 'Reporting and analytics platform for Oracle data.',
    status: 'Planned',
    details: 'Integration with Oracle on-prem and PowerBI scheduled for Q3.'
  },
  {
    name: 'Agents & Automation',
    description: 'RPA and agent-based automation for repetitive back office workflows.',
    status: 'Expanding',
    details: 'Adding more agents to reduce manual work. Reviewing workflow accuracy.'
  },
  {
    name: 'Back Office Workflow Improvement',
    description: 'Continuous improvement of finance and admin workflows.',
    status: 'Ongoing',
    details: 'Identifying and removing repetitive workflows. Focusing on accuracy and efficiency.'
  },
  {
    name: 'On-Premise Software',
    description: 'Management and monitoring of all on-premise business applications.',
    status: 'Stable',
    details: 'Regular patching and monitoring in place. Reviewing VPC security.'
  },
  {
    name: 'VPC (Virtual Private Cloud)',
    description: 'Network isolation and security for on-prem and cloud workloads.',
    status: 'Secure',
    details: 'VPC configurations reviewed quarterly. No issues detected.'
  }
];