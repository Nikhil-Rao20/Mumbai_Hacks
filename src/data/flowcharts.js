// Optimized Flowchart Data with simplified, clean diagrams
export const flowchartData = {
  main: {
    title: "Main System Architecture",
    description: "Complete AI-powered financial assistance system flow",
    icon: "Layout",
    color: "from-purple-600 to-blue-600",
    code: `graph TB
    Start["👤 USER INPUT<br/>Voice | Text | Photo | Auto"]
    
    Start --> Phase0["📱 PHASE 0<br/>Offline-First<br/>100% Works Offline"]
    
    Phase0 --> Orchestrator["🧠 Orchestrator<br/>Claude 4.5"]
    
    Orchestrator --> Emergency{"🚨 Emergency?"}
    
    Emergency -->|YES| FastTrack["⚡ Fast-Track<br/>2-Second Response"]
    Emergency -->|NO| Phase1
    
    Phase1["📊 PHASE 1<br/>Data Collection<br/>Multi-source"]
    Phase1 --> Phase2["🔍 PHASE 2<br/>Analysis<br/>4 Parallel Agents"]
    Phase2 --> Phase3["🔄 PHASE 3<br/>Reasoning<br/>Smart Recommendations"]
    Phase3 --> Phase4["⚡ PHASE 4<br/>Action Layer<br/>Multi-channel Delivery"]
    Phase4 --> Phase5["🧠 PHASE 5<br/>Learning Loop<br/>Adaptation"]
    Phase5 --> Monitor["🌟 Proactive Monitoring<br/>24/7 Every 6 Hours"]
    Monitor --> Orchestrator
    
    FastTrack --> Phase4
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:3px
    style Orchestrator fill:#8b5cf6,stroke:#7c3aed,stroke-width:3px,color:#fff
    style Phase0 fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style Phase1 fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#fff
    style Phase2 fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Phase3 fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Phase4 fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Phase5 fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Monitor fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style FastTrack fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff`
  },
  
  phase0: {
    title: "Phase 0: Offline-First Engine",
    description: "Device-first data collection with smart synchronization",
    icon: "Database",
    color: "from-blue-600 to-cyan-600",
    code: `graph LR
    Input["📥 INPUT CHANNELS<br/>Voice | Text<br/>Photo | Bank Sync"]
    
    Input --> LocalStore["💾 Local Storage<br/>SQLite + Cache"]
    
    LocalStore --> Features["⚡ Offline Features<br/>✓ Log Transactions<br/>✓ View History<br/>✓ Cached Alerts"]
    
    Features --> SyncCheck{"Network?"}
    
    SyncCheck -->|YES| CloudSync["☁️ Cloud Sync<br/>AWS/Azure"]
    SyncCheck -->|NO| Queue["📥 Queue Manager<br/>Auto Sync Later"]
    
    CloudSync --> Done["✅ Sync Complete<br/>Local ↔ Cloud"]
    Queue -.->|"Network Found"| CloudSync
    
    Done --> ToOrch["🚀 To Orchestrator"]
    
    style Input fill:#f0f9ff,stroke:#0284c7,stroke-width:2px
    style LocalStore fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style Features fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#fff
    style CloudSync fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Done fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style ToOrch fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff`
  },

  phase1: {
    title: "Phase 1: Data Collection & Validation",
    description: "Multi-source data ingestion with quality assurance",
    icon: "Database",
    color: "from-cyan-600 to-teal-600",
    code: `graph TB
    Start["📊 Data Ingestion"]
    
    Start --> Sources["📥 Sources<br/>Bank | UPI | Manual<br/>Bills | Cash | Gig Apps"]
    
    Sources --> Agg["🔄 Aggregator<br/>Unified Data"]
    
    Agg --> Quality{"✓ Valid?"}
    
    Quality -->|NO| Error["⚠️ Error Handler<br/>Ask User"]
    Quality -->|YES| Clean["🧹 Clean Data<br/>Remove Duplicates<br/>Standardize Format"]
    
    Error --> Clean
    
    Clean --> Cat["🏷️ Categorize<br/>Income | Expense<br/>Auto-classification"]
    
    Cat --> Enrich["✨ Enrich Data<br/>Add Metadata"]
    
    Enrich --> Done["✅ Ready for Analysis"]
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Sources fill:#bfdbfe,stroke:#1d4ed8,stroke-width:2px
    style Agg fill:#c7d2fe,stroke:#3730a3,stroke-width:2px
    style Quality fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Error fill:#fecaca,stroke:#dc2626,stroke-width:2px
    style Clean fill:#bbf7d0,stroke:#15803d,stroke-width:2px
    style Cat fill:#a78bfa,stroke:#7c3aed,stroke-width:2px
    style Enrich fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Done fill:#a7f3d0,stroke:#047857,stroke-width:2px,color:#fff`
  },

  phase2: {
    title: "Phase 2: Analysis Layer",
    description: "4 parallel AI agents analyzing financial patterns",
    icon: "Brain",
    color: "from-green-600 to-emerald-600",
    code: `graph TB
    Start["📊 Clean Data"]
    
    Start --> Router["⚙️ Router<br/>Distribute to 4 Agents"]
    
    Router --> Agent1["🔍 Pattern Agent<br/>Spending Habits<br/>Income Cycles<br/>Anomaly Detection"]
    
    Router --> Agent2["💰 Budget Agent<br/>Optimal Allocation<br/>Overspending ID<br/>Savings Potential"]
    
    Router --> Agent3["🌍 Context Agent<br/>Weather Impact<br/>Cultural Events<br/>Seasonal Adjust"]
    
    Router --> Agent4["📉 Volatility Agent<br/>Income Forecast<br/>Drought Prediction<br/>Risk Assessment"]
    
    Agent1 --> Agg["🔄 Aggregator<br/>Combine Insights"]
    Agent2 --> Agg
    Agent3 --> Agg
    Agent4 --> Agg
    
    Agg --> Context["📋 Unified Context<br/>Complete Profile"]
    
    Context --> Knowledge["💡 Knowledge Retrieval<br/>Gov Schemes | Tax<br/>Investments | Credit"]
    
    Knowledge --> Done["✅ Ready for Reasoning"]
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Router fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Agent1 fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Agent2 fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Agent3 fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style Agent4 fill:#ec4899,stroke:#be185d,stroke-width:2px,color:#fff
    style Agg fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Context fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Knowledge fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Done fill:#a7f3d0,stroke:#047857,stroke-width:2px,color:#fff`
  },

  phase3: {
    title: "Phase 3: Reasoning & Recommendations",
    description: "Claude-powered intelligent recommendations with transparency",
    icon: "Brain",
    color: "from-amber-600 to-orange-600",
    code: `graph TB
    Start["💡 Unified Analysis"]
    
    Start --> Claude["🧠 Claude Reasoning<br/>Personalized Advice<br/>Multi-objective Optimization"]
    
    Claude --> Conf{"Confidence<br/>Score ≥ 0.80?"}
    
    Conf -->|LOW| DeepDive["🔍 Deep Dive<br/>Ask Strategic Questions<br/>Fetch More Context"]
    Conf -->|HIGH| Sim
    
    DeepDive -.->|"Refine"| Claude
    
    Claude --> Sim["🎮 Simulations<br/>What-if Analysis<br/>Scenario Comparison"]
    
    Sim --> Explain["📚 Explainability<br/>Why This Advice?<br/>Data Sources Cited<br/>Risk Level Explained"]
    
    Explain --> Risk{"Risk<br/>Level?"}
    
    Risk -->|HIGH| Expert["👨‍💼 Expert Review<br/>Qualified Advisor"]
    Risk -->|MEDIUM| Expert
    Risk -->|LOW| Personal["🎨 Personalization<br/>Language Adapt<br/>Literacy Match<br/>Timing Optimize"]
    
    Expert --> Personal
    
    Personal --> Done["✅ Final Recommendation<br/>Packaged & Ready"]
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Claude fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style DeepDive fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Sim fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Explain fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style Expert fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style Personal fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Done fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px`
  },

  phase4: {
    title: "Phase 4: Action & Delivery",
    description: "Multi-channel delivery with engagement features",
    icon: "Zap",
    color: "from-red-600 to-pink-600",
    code: `graph TB
    Start["📦 Recommendations Ready"]
    
    Start --> Notify["📱 Multi-Channel<br/>Push | SMS | WhatsApp<br/>Email | In-App"]
    
    Notify --> Timing["⏰ Smart Timing<br/>Morning | Afternoon<br/>Evening | Immediate"]
    
    Timing --> Auto["🤖 Auto-Execution<br/>Auto-Save on Payday<br/>Bill Payments<br/>Investment SIPs"]
    
    Auto --> Gamify["🎮 Gamification<br/>Badges | Streaks<br/>Leaderboards<br/>Rewards"]
    
    Gamify --> Community["👥 Community<br/>Savings Circles<br/>Peer Accountability<br/>Success Stories"]
    
    Community --> User["👤 User Touchpoint"]
    
    User --> Action{"Action?"}
    
    Action -->|ACCEPTED| Accept["✅ Track & Celebrate"]
    Action -->|REJECTED| Reject["👎 Learn & Adjust"]
    Action -->|IGNORED| Ignore["😶 Gentle Reminder"]
    
    Accept --> ToL5["🚀 To Learning Loop"]
    Reject --> ToL5
    Ignore --> ToL5
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Notify fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Timing fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Auto fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Gamify fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Community fill:#7c2d12,stroke:#9a3412,stroke-width:2px,color:#fff
    style User fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Accept fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Reject fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Ignore fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style ToL5 fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  phase5: {
    title: "Phase 5: Learning & Adaptation",
    description: "Continuous improvement through feedback and outcome tracking",
    icon: "TrendingUp",
    color: "from-purple-600 to-indigo-600",
    code: `graph TB
    Start["📊 User Feedback"]
    
    Start --> Track["📥 Track Feedback<br/>Acceptance | Rejection<br/>Satisfaction | Usage"]
    
    Track --> Outcome["📈 Outcome Verification<br/>Baseline Snapshot<br/>Continuous Measurement<br/>Attribution Analysis"]
    
    Outcome --> Success["✅ Success Dashboard<br/>Personal Results<br/>Peer Comparison<br/>Before/After"]
    
    Success --> Learning["🧠 Adaptive Learning<br/>Positive Reinforcement<br/>Negative Processing<br/>User-Specific Tuning"]
    
    Learning --> Update["🔄 Model Update<br/>Weekly Retraining<br/>New Data"]
    
    Update --> Behavior["🎭 Behavior Adapt<br/>Communication Style<br/>Empathetic Mode<br/>Direct Mode"]
    
    Behavior --> Complete["✅ Smarter System<br/>More Personalized"]
    
    Complete --> Monitor["🚀 To Monitoring Loop<br/>24/7 Surveillance"]
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Track fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Outcome fill:#ddd6fe,stroke:#8b5cf6,stroke-width:2px
    style Success fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Learning fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Update fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Behavior fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Complete fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px
    style Monitor fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff`
  },

  monitoring: {
    title: "24/7 Proactive Monitoring",
    description: "Continuous system surveillance and alert system",
    icon: "Shield",
    color: "from-green-600 to-teal-600",
    code: `graph TB
    Start["🔄 Continuous Operation"]
    
    Start --> Cron["⏰ Cron Job<br/>Every 6 Hours"]
    
    Cron --> Monitor["🔍 Multi-Dimensional Check<br/>Balance | Bills | Spending<br/>Income | Goals | Crises"]
    
    Monitor --> Assess{"Risk or<br/>Opportunity?"}
    
    Assess -->|RISK| RiskAlert["⚠️ Risk Alerts<br/>Overdraft | Unusual Spend<br/>Income Drought"]
    Assess -->|OPPORTUNITY| OppAlert["✨ Opportunities<br/>Govt Schemes | Better Rates<br/>Cashback | Tax Savings"]
    Assess -->|ALL GOOD| Sleep["😌 Sleep Mode<br/>Event Listeners Active"]
    
    RiskAlert --> Priority{"Severity?"}
    Priority -->|CRITICAL| Immediate["🚨 Immediate Alert<br/>Override Silent Hours"]
    Priority -->|MEDIUM| Scheduled["⏰ Scheduled Alert<br/>Optimal Time"]
    Priority -->|LOW| Gentle["💬 Gentle Nudge<br/>Daily Digest"]
    
    OppAlert --> Interest{"Interest<br/>Match?"}
    Interest -->|HIGH| Offer["🎯 Proactive Offer"]
    Interest -->|LOW| Skip["🙈 Skip"]
    
    Immediate --> ToOrch["🚀 To Orchestrator"]
    Scheduled --> ToOrch
    Gentle --> ToOrch
    Offer --> ToOrch
    Skip --> Sleep
    
    Sleep --> Next["⏰ Next Check<br/>In 6 Hours"]
    Next --> Cron
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Cron fill:#f0fdf4,stroke:#16a34a,stroke-width:2px
    style Monitor fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style RiskAlert fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style OppAlert fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Immediate fill:#dc2626,stroke:#991b1b,stroke-width:2px,color:#fff
    style Sleep fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style ToOrch fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  }
};
