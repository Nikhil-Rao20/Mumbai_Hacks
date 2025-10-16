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
    code: `graph TB
    Input["📥 INPUT CHANNELS"]
    
    Input --> Voice["🎤 Voice Input<br/>Speech-to-Text<br/>Transcription"]
    Input --> Text["📝 Text Input<br/>Manual Entry<br/>Chat Interface"]
    Input --> Photo["📸 Photo Input<br/>Receipt OCR<br/>Document Scan"]
    Input --> Auto["🔄 Auto Input<br/>Bank APIs<br/>Gig App Sync"]
    
    Voice --> LocalStore["💾 LOCAL STORAGE LAYER<br/>SQLite Database"]
    Text --> LocalStore
    Photo --> LocalStore
    Auto --> LocalStore
    
    LocalStore --> Cache["⚡ Smart Cache<br/>Recent Data<br/>Frequent Queries<br/>User Preferences"]
    
    LocalStore --> Validation["✅ Data Validation<br/>Format Check<br/>Duplicate Detection<br/>Integrity Verify"]
    
    Validation --> Valid{"Data Valid?"}
    Valid -->|NO| ErrorHandle["⚠️ Error Handler<br/>User Notification<br/>Retry Logic"]
    Valid -->|YES| Process
    
    ErrorHandle --> Process["🔧 Data Processing<br/>Normalize Values<br/>Categorize Types<br/>Add Timestamps"]
    
    Cache --> Process
    
    Process --> Sync{"📡 Check Network"}
    
    Sync -->|ONLINE| CloudSync["☁️ Cloud Sync<br/>AWS/Azure Upload<br/>Conflict Resolution<br/>Bi-directional Sync"]
    Sync -->|OFFLINE| Queue["� Sync Queue<br/>Store Instructions<br/>Retry Later"]
    
    CloudSync --> Verification["✓ Verification<br/>Checksum Validate<br/>Encryption Verify"]
    Queue --> LocalFeatures
    
    Verification --> LocalFeatures["✨ Offline Features<br/>View History<br/>Search Data<br/>View Alerts<br/>See Budgets"]
    
    LocalFeatures --> Ready["✅ Data Ready<br/>For Processing"]
    
    Ready --> Next["🚀 To Phase 1<br/>Data Analysis"]
    
    style Input fill:#e0f2fe,stroke:#0369a1,stroke-width:3px
    style Voice fill:#bae6fd,stroke:#0284c7,stroke-width:2px
    style Text fill:#bae6fd,stroke:#0284c7,stroke-width:2px
    style Photo fill:#bae6fd,stroke:#0284c7,stroke-width:2px
    style Auto fill:#bae6fd,stroke:#0284c7,stroke-width:2px
    style LocalStore fill:#0284c7,stroke:#0369a1,stroke-width:3px,color:#fff
    style Cache fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#fff
    style Validation fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style Valid fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style ErrorHandle fill:#fecaca,stroke:#dc2626,stroke-width:2px
    style Process fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Sync fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style CloudSync fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Queue fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Verification fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style LocalFeatures fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style Ready fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
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
  },

  // FEATURE 1: Pattern Recognition Engine
  feature1: {
    title: "Feature 1: Pattern Recognition Engine",
    description: "LSTM-based behavioral and income pattern identification",
    icon: "BarChart3",
    color: "from-indigo-600 to-blue-600",
    code: `graph TB
    Start["📊 Raw Transaction Data<br/>3+ Months History"]
    
    Start --> Load["💾 Load Historical Data<br/>Transactions | Income<br/>Expenses | Timestamps"]
    
    Load --> Preprocess["🧹 Data Preprocessing<br/>Normalize Values<br/>Handle Missing Data<br/>Time Series Formatting"]
    
    Preprocess --> LSTM["🧠 LSTM Neural Network<br/>Pattern Detection<br/>Temporal Dependencies<br/>Sequence Modeling"]
    
    LSTM --> Patterns["🔍 Extract Patterns<br/>Weekday Income: ₹800-1,200<br/>Weekend: ₹600-900<br/>Rainy Days: ₹300-500"]
    
    Patterns --> Spending["💳 Spending Analysis<br/>High Spend: Sundays<br/>Grocery: Every 4th Day<br/>Bonus Month: +30% Spend"]
    
    Spending --> Confidence["📊 Confidence Scoring<br/>Calculate Accuracy<br/>Pattern Reliability<br/>Prediction Confidence"]
    
    Confidence --> Score{"Confidence<br/>≥ 60%?"}
    
    Score -->|NO| Alert["⚠️ Low Confidence<br/>Need More Data"]
    Score -->|YES| Anomaly
    
    Alert --> End["❌ Wait for More Data"]
    
    Anomaly["🎯 Anomaly Detection<br/>Unusual Spending<br/>Income Spikes<br/>Pattern Changes"]
    
    Anomaly --> Output["📤 Output Insights<br/>Pattern Profile<br/>Confidence Score<br/>Anomalies List"]
    
    Output --> Next["🚀 To Budget Agent"]
    
    style Start fill:#e0f2fe,stroke:#0369a1,stroke-width:2px
    style Load fill:#bfdbfe,stroke:#1e40af,stroke-width:2px
    style Preprocess fill:#93c5fd,stroke:#1e3a8a,stroke-width:2px
    style LSTM fill:#4f46e5,stroke:#3730a3,stroke-width:2px,color:#fff
    style Patterns fill:#6366f1,stroke:#4f46e5,stroke-width:2px,color:#fff
    style Spending fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style Confidence fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Score fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Alert fill:#fecaca,stroke:#dc2626,stroke-width:2px
    style Anomaly fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Output fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Next fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style End fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff`
  },

  // FEATURE 2: Budget Analysis Engine
  feature2: {
    title: "Feature 2: Budget Analysis Engine",
    description: "Context-specific budget allocation for feast/famine scenarios",
    icon: "PieChart",
    color: "from-green-600 to-emerald-600",
    code: `graph TB
    Start["💰 Income + Pattern Data"]
    
    Start --> Costs["📋 Categorize Costs<br/>Fixed: Rent, Insurance<br/>Variable: Food, Fuel<br/>Discretionary"]
    
    Costs --> High["📈 High-Income Scenario<br/>Earned: ₹1,200+"]
    Costs --> Low["📉 Low-Income Scenario<br/>Earned: ₹600-"]
    
    High --> HighAlloc["✅ High-Income Budget<br/>Savings: ₹300-400<br/>Expenses: ₹850<br/>Discretionary: ₹50"]
    
    Low --> LowAlloc["⚠️ Low-Income Budget<br/>Savings: ₹75<br/>Expenses: ₹450<br/>Discretionary: ₹0"]
    
    HighAlloc --> Feast["🎉 Feast-Week Plan<br/>Build Emergency Fund<br/>Goal-Specific Savings<br/>Investment Opportunities"]
    
    LowAlloc --> Famine["😐 Famine-Week Plan<br/>Minimum Savings<br/>Essential Only<br/>Preserve Liquidity"]
    
    Feast --> Compare["🔄 Sustainability Check<br/>Can User Follow?<br/>Historical Success?<br/>Realistic?"]
    
    Famine --> Compare
    
    Compare --> Valid{"Sustainable?"}
    
    Valid -->|NO| Adjust["🔧 Adjust Allocation<br/>Lower Targets<br/>More Flexibility"]
    Valid -->|YES| Final
    
    Adjust --> Final["✅ Final Budget<br/>Feast: Days 1-10<br/>Famine: Days 11-20<br/>Buffer: Days 21-30"]
    
    Final --> Next["🚀 To Context Agent"]
    
    style Start fill:#f0fdf4,stroke:#15803d,stroke-width:2px
    style Costs fill:#bbf7d0,stroke:#16a34a,stroke-width:2px
    style High fill:#86efac,stroke:#22c55e,stroke-width:2px
    style Low fill:#fbca04,stroke:#f59e0b,stroke-width:2px
    style HighAlloc fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style LowAlloc fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Feast fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Famine fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style Compare fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Adjust fill:#fecaca,stroke:#dc2626,stroke-width:2px
    style Final fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  // FEATURE 3: Context Intelligence Engine
  feature3: {
    title: "Feature 3: Context Intelligence Engine",
    description: "Weather, cultural calendars, and event integration",
    icon: "Cloud",
    color: "from-sky-600 to-cyan-600",
    code: `graph TB
    Start["🌍 Context Data"]
    
    Start --> Weather["🌤️ Weather APIs<br/>OpenWeather Data<br/>Rain Forecast<br/>Monsoon Schedule"]
    
    Start --> Cultural["🎉 Cultural Calendars<br/>Diwali | Holi | Eid<br/>New Year | Navratri<br/>Regional Festivals"]
    
    Start --> Economic["📰 Economic Events<br/>Market News<br/>Policy Changes<br/>Market Crashes"]
    
    Weather --> Analysis["🔍 Impact Analysis"]
    Cultural --> Analysis
    Economic --> Analysis
    
    Analysis --> Rain{"Rain<br/>Coming?"}
    Rain -->|YES| RainImpact["📉 Rain Impact<br/>Uber Rides -40%<br/>Income ↓ 30-50%<br/>Spending ↑ 20%"]
    Rain -->|NO| NoRain["✅ Normal Conditions"]
    
    Analysis --> Festival{"Festival<br/>≤30 Days?"}
    Festival -->|YES| FestivalPlan["🎁 Festival Plan<br/>Diwali Fund Goal<br/>Save ₹200/day<br/>25-Day Target"]
    Festival -->|NO| Regular["📅 Regular Days"]
    
    RainImpact --> Model
    NoRain --> Model
    FestivalPlan --> Model
    Regular --> Model
    
    Model["🧮 Context Model<br/>Adjust Forecasts<br/>Update Budgets<br/>Recalculate Goals"]
    
    Model --> Output["📤 Context Insights<br/>Impact Factors<br/>Adjusted Budgets<br/>Event Alerts"]
    
    Output --> Next["🚀 To Volatility Forecaster"]
    
    style Start fill:#e0f7ff,stroke:#0369a1,stroke-width:2px
    style Weather fill:#a5f3fc,stroke:#0891b2,stroke-width:2px
    style Cultural fill:#f0abfc,stroke:#d946ef,stroke-width:2px
    style Economic fill:#fecaca,stroke:#dc2626,stroke-width:2px
    style Analysis fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Rain fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style RainImpact fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style NoRain fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Festival fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style FestivalPlan fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Regular fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Model fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Output fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Next fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff`
  },

  // FEATURE 4: Income Volatility Forecaster
  feature4: {
    title: "Feature 4: Income Volatility Forecaster",
    description: "30-day income scenarios with probability distributions",
    icon: "TrendingUp",
    color: "from-pink-600 to-rose-600",
    code: `graph TB
    Start["📊 Historical Income<br/>+ Context Data"]
    
    Start --> Prepare["🧹 Time Series Data<br/>Income History<br/>Seasonal Factors<br/>Context Adjustments"]
    
    Prepare --> Model["🔮 Forecasting Models<br/>ARIMA Analysis<br/>Exponential Smoothing<br/>Regression Models"]
    
    Model --> Scenarios["📊 Generate Scenarios<br/>Best Case<br/>Expected Case<br/>Worst Case"]
    
    Scenarios --> Probability["📈 Probability Dist<br/>70% Confidence: ₹35,000<br/>20% Confidence: ₹28,000<br/>10% Confidence: ₹42,000"]
    
    Probability --> Confidence{"Forecast<br/>Confidence<br/>≥ 80%?"}
    
    Confidence -->|HIGH| Aggressive["🚀 High Confidence<br/>→ Aggressive Strategy<br/>Recommend Higher Savings"]
    Confidence -->|MEDIUM| Balanced["⚖️ Medium Confidence<br/>→ Balanced Strategy<br/>Moderate Targets"]
    Confidence -->|LOW| Conservative["🛡️ Low Confidence<br/>→ Conservative Strategy<br/>Lower Expectations"]
    
    Aggressive --> Details["💡 Strategic Details<br/>Save ₹300 Daily<br/>School Fee: ₹5,000 in 10 Days"]
    Balanced --> Details
    Conservative --> Details
    
    Details --> Track["📊 Tracking Plan<br/>Daily Income Check<br/>Adjust if Needed<br/>Alert if Diverges"]
    
    Track --> Output["📤 Volatility Report<br/>Scenarios | Probabilities<br/>Recommendations<br/>Risk Assessment"]
    
    Output --> Next["🚀 To Recommendation Engine"]
    
    style Start fill:#fdf2f8,stroke:#be185d,stroke-width:2px
    style Prepare fill:#fbcfe8,stroke:#ec4899,stroke-width:2px
    style Model fill:#f472b6,stroke:#ec4899,stroke-width:2px,color:#fff
    style Scenarios fill:#ec4899,stroke:#be185d,stroke-width:2px,color:#fff
    style Probability fill:#f43f5e,stroke:#e11d48,stroke-width:2px,color:#fff
    style Confidence fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Aggressive fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Balanced fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Conservative fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Details fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Track fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Output fill:#ec4899,stroke:#be185d,stroke-width:2px,color:#fff
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  // FEATURE 5: Knowledge Integration
  feature5: {
    title: "Feature 5: Knowledge Integration & Opportunities",
    description: "Match users to 200+ government schemes and programs",
    icon: "Award",
    color: "from-orange-600 to-amber-600",
    code: `graph TB
    Start["👤 User Profile<br/>Income | Age | Location<br/>Employment | Dependents"]
    
    Start --> Calculate["📊 Calculate Eligibility<br/>Annual Income: ₹5.4L<br/>Income Category<br/>Location Tier"]
    
    Calculate --> DB["🗄️ Schemes Database<br/>200+ Opportunities"]
    
    DB --> Match["🔍 Matching Algorithm<br/>Cross-reference Criteria<br/>Verify Eligibility<br/>Check Documentation"]
    
    Match --> Results["🏆 Matched Schemes"]
    
    Results --> Mudra["💳 PM Mudra Yojana<br/>Loan: ₹10L<br/>Interest: 0% Year 1<br/>Use Case: Vehicle"]
    
    Results --> Insurance["🛡️ Suraksha Bima<br/>Cost: ₹12/year<br/>Coverage: ₹5-10L<br/>Use Case: Accident"]
    
    Results --> NPS["🏦 National Pension<br/>Gov Co-contrib: 50%<br/>Tax Benefits<br/>Retirement Security"]
    
    Mudra --> Impact["📈 Impact Analysis<br/>Loan → Vehicle<br/>Commission ↓ -₹2,000/mo<br/>Earnings ↑ +₹2,000/mo"]
    
    Insurance --> Impact
    
    NPS --> Impact
    
    Impact --> Recommended["✅ Recommended Actions<br/>1. Apply for Mudra<br/>2. Get Insurance<br/>3. Start NPS"]
    
    Recommended --> Output["📤 Opportunities Report<br/>Schemes | Details<br/>Application Links<br/>Expected Benefits"]
    
    Output --> Next["🚀 To Tax Engine"]
    
    style Start fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style Calculate fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style DB fill:#fed7aa,stroke:#f97316,stroke-width:2px
    style Match fill:#fb923c,stroke:#f97316,stroke-width:2px,color:#fff
    style Results fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style Mudra fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#fff
    style Insurance fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#fff
    style NPS fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#fff
    style Impact fill:#86efac,stroke:#22c55e,stroke-width:2px
    style Recommended fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Output fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff,stroke-width:3px
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  // FEATURE 6: Tax and Compliance Engine
  feature6: {
    title: "Feature 6: Tax & Compliance Engine",
    description: "Automated income tax filing and deduction optimization",
    icon: "FileText",
    color: "from-cyan-600 to-teal-600",
    code: `graph TB
    Start["💼 Income Data<br/>Gig Worker Income<br/>Multiple Sources"]
    
    Start --> Aggregate["➕ Aggregate Income<br/>3+ Income Streams<br/>Bonus | Tips | Referral<br/>Total: ₹5.4L"]
    
    Aggregate --> Deduction["📋 Identify Deductions<br/>Vehicle Fuel: 40%<br/>Maintenance: 8%<br/>Insurance: 5%<br/>Phone/Internet: 3%"]
    
    Deduction --> Calculate["🧮 Calculate Taxable<br/>Gross: ₹5.4L<br/>Deductions: ₹1.3L<br/>Taxable: ₹4.1L"]
    
    Calculate --> Tax["💰 Calculate Tax<br/>Tax Rate: 5-30%<br/>Tax Liability: ₹8,000"]
    
    Tax --> Exemptions["🎁 Check Exemptions<br/>Section 80C<br/>Section 80D<br/>Special Provisions"]
    
    Exemptions --> Optimized["✨ Optimized Tax<br/>After Exemptions: ₹2,000<br/>Savings: ₹6,000"]
    
    Optimized --> ITR["📄 Generate ITR<br/>ITR Form 2 or 3<br/>Auto-filled Fields<br/>Ready to File"]
    
    ITR --> File{"File<br/>Mode?"}
    
    File -->|AUTO| AutoFile["🤖 Auto-File (Portal)<br/>Direct to Income Tax"]
    File -->|MANUAL| ManualFile["✍️ Manual Submission<br/>Download | Print | File"]
    
    AutoFile --> Process["⏳ Processing"]
    ManualFile --> Process
    
    Process --> Refund["💵 Refund Generated<br/>Amount: ₹1,800<br/>Timeline: 2-4 Weeks"]
    
    Refund --> Compliance["✅ Compliance Status<br/>All Clear | No Penalties<br/>Future Tax Prepared"]
    
    Compliance --> Output["📤 Compliance Report<br/>ITR Filed | Tax Paid<br/>Refund Status | Documents"]
    
    Output --> Next["🚀 To Recommendation Engine"]
    
    style Start fill:#ecf0f1,stroke:#34495e,stroke-width:2px
    style Aggregate fill:#d5dbdb,stroke:#566573,stroke-width:2px
    style Deduction fill:#a9ccce,stroke:#1e8449,stroke-width:2px
    style Calculate fill:#85c1e2,stroke:#1b4f72,stroke-width:2px
    style Tax fill:#f8b88b,stroke:#ba4a00,stroke-width:2px
    style Exemptions fill:#fad7a0,stroke:#d68910,stroke-width:2px
    style Optimized fill:#82e0aa,stroke:#186a3b,stroke-width:2px,color:#fff
    style ITR fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style File fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style AutoFile fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style ManualFile fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Process fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Refund fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Compliance fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px
    style Output fill:#1b4f72,stroke:#154360,stroke-width:2px,color:#fff
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  // FEATURE 7: Recommendation Engine
  feature7: {
    title: "Feature 7: Recommendation & Reasoning Engine",
    description: "Claude-powered transparent personalized guidance",
    icon: "Lightbulb",
    color: "from-yellow-600 to-amber-600",
    code: `graph TB
    Start["📊 All Agent Outputs<br/>Patterns | Budget | Context<br/>Volatility | Opportunities<br/>Tax | Risk Assessment"]
    
    Start --> Sync["🔄 Unified Context<br/>Consolidate All Data<br/>Verify Consistency<br/>Identify Conflicts"]
    
    Sync --> Claude["🧠 Claude Advanced Reasoning<br/>Multi-Step Thinking<br/>Cross-Domain Analysis<br/>Personalization"]
    
    Claude --> Reasoning["💭 Reasoning Process<br/>Need: ₹5,000 School Fee<br/>Target: 10 Days<br/>Current: ₹2,450<br/>Daily Income: ₹1,100"]
    
    Reasoning --> Simulate["🎮 Simulate Scenarios<br/>What-if Analysis<br/>Success Probability<br/>Failure Cases"]
    
    Simulate --> Decision["🎯 Final Decision<br/>Save ₹300 Daily<br/>Success Probability: 87%"]
    
    Decision --> Explain["📚 Generate Explanation<br/>Why? Strong income days<br/>Historical Success: 87%<br/>Risk Level: Low<br/>Data Sources: cited"]
    
    Explain --> Personalize["🎨 Personalization<br/>Language: Simple<br/>Literacy: Adapted<br/>Tone: Encouraging<br/>Delivery: SMS + App"]
    
    Personalize --> Recommend["✅ Final Recommendation<br/>Save ₹300 daily<br/>By: School Fee Deadline<br/>Confidence: HIGH"]
    
    Recommend --> Output["📤 Recommendation Package<br/>Action | Reasoning<br/>Success Rate | Timeline<br/>Alternatives | Risks"]
    
    Output --> Next["🚀 To Risk Assessment"]
    
    style Start fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style Sync fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Claude fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Reasoning fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#fff
    style Simulate fill:#fb923c,stroke:#f97316,stroke-width:2px,color:#fff
    style Decision fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
    style Explain fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Personalize fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Recommend fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Output fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff,stroke-width:3px
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  // FEATURE 8: Risk Assessment & Human Escalation
  feature8: {
    title: "Feature 8: Risk Assessment & Human Escalation",
    description: "Routes high-risk cases to qualified financial advisors",
    icon: "AlertCircle",
    color: "from-red-600 to-orange-600",
    code: `graph TB
    Start["📋 Recommendation Ready"]
    
    Start --> Assessment["🔍 Risk Assessment<br/>Confidence Check<br/>Data Quality Check<br/>Edge Case Detection"]
    
    Assessment --> Risk{"Risk<br/>Level?"}
    
    Risk -->|LOW| Low["✅ Low Risk<br/>Confidence: ≥ 80%<br/>Financial Stability<br/>Clear Path Forward"]
    Risk -->|MEDIUM| Medium["⚠️ Medium Risk<br/>Confidence: 60-80%<br/>Moderate Uncertainty<br/>Expert Review Needed"]
    Risk -->|HIGH| High["🚨 High Risk<br/>Confidence: < 60%<br/>Emergency Situation<br/>Immediate Escalation"]
    
    Low --> Deliver["📤 Direct Delivery<br/>Send to User"]
    
    Medium --> Queue["📋 Expert Queue<br/>Assign to Advisor<br/>Priority: Medium<br/>SLA: 2 Hours"]
    
    High --> Immediate["🔴 Immediate Escalation<br/>Emergency Alert<br/>Call Available Advisor<br/>SLA: 10 Minutes"]
    
    Queue --> Expert["👨‍💼 Advisor Review<br/>Analyze Recommendation<br/>Add Expert Insight<br/>Modify if Needed"]
    
    Immediate --> Emergency["🚑 Emergency Support<br/>Crisis Management<br/>Immediate Assistance<br/>24/7 Support"]
    
    Expert --> Approved["✅ Expert Approved<br/>Enhanced Recommendation"]
    Emergency --> Approved
    
    Approved --> Output["📤 Final Recommendation<br/>Delivery Ready"]
    
    Output --> Deliver
    
    Deliver --> Next["🚀 To Action Execution"]
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Assessment fill:#dbeafe,stroke:#1e3a8a,stroke-width:2px
    style Risk fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Low fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Medium fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style High fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style Queue fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Immediate fill:#dc2626,stroke:#991b1b,stroke-width:2px,color:#fff
    style Expert fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Emergency fill:#f87171,stroke:#b91c1c,stroke-width:2px,color:#fff
    style Approved fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px
    style Output fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Deliver fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  // FEATURE 9: Action Execution
  feature9: {
    title: "Feature 9: Action Execution & Control",
    description: "Automates approved financial actions with user control",
    icon: "Zap",
    color: "from-green-600 to-lime-600",
    code: `graph TB
    Start["📦 Recommendation Ready"]
    
    Start --> Approval["✋ User Approval<br/>Review Action<br/>Modify Amount<br/>Accept | Reject"]
    
    Approval --> UserDecision{"User<br/>Decision?"}
    
    UserDecision -->|REJECT| Rejected["👎 Action Rejected<br/>Log Rejection Reason<br/>Alternative Offered"]
    UserDecision -->|MODIFY| Modified["✏️ Modified Action<br/>User Input Saved<br/>New Targets Applied"]
    UserDecision -->|ACCEPT| Accepted["✅ Action Accepted"]
    
    Rejected --> Feedback["📊 Collect Feedback"]
    Modified --> Accepted
    
    Accepted --> Verify["🔐 Security Verification<br/>2FA | Biometric<br/>UPI PIN | Password"]
    
    Verify --> Execute["⚡ Execute Action<br/>Auto-Save ₹300 Daily<br/>Via UPI Transfer<br/>Every 6:00 AM"]
    
    Execute --> Schedule["📅 Schedule Jobs<br/>Recurring Automation<br/>Bill Payments: Automatic<br/>SIP Investments: Auto"]
    
    Schedule --> Track["📊 Real-Time Tracking<br/>Balance Update<br/>Transaction Log<br/>Goal Progress"]
    
    Track --> Monitor["🔔 Monitoring<br/>Auto-notify User<br/>Daily Update:<br/>Saved: ₹1,800 (60%)"]
    
    Monitor --> Success{"Goal<br/>Achieved?"}
    
    Success -->|YES| Complete["🎉 Celebrate Success<br/>Badge Unlocked<br/>Streak Counter<br/>Achievement Share"]
    Success -->|NO| Adjust["🔧 Adjust Course<br/>Recommendation Update<br/>Reality Check<br/>New Strategy"]
    
    Complete --> Output["📤 Success Report<br/>Results | Learning<br/>Next Milestone"]
    Adjust --> Output
    Feedback --> Output
    
    Output --> Next["🚀 To Outcome Verification"]
    
    style Start fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
    style Approval fill:#d1fae5,stroke:#047857,stroke-width:2px
    style UserDecision fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Rejected fill:#fecaca,stroke:#dc2626,stroke-width:2px
    style Modified fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#fff
    style Accepted fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Verify fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Execute fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Schedule fill:#86efac,stroke:#22c55e,stroke-width:2px
    style Track fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Monitor fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#fff
    style Success fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Complete fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px
    style Adjust fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style Output fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Next fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff`
  },

  // FEATURE 10: Outcome Verification
  feature10: {
    title: "Feature 10: Outcome Verification & Learning",
    description: "Tracks real financial results and drives continuous learning",
    icon: "CheckCircle",
    color: "from-teal-600 to-green-600",
    code: `graph TB
    Start["📊 Action Execution Results"]
    
    Start --> Baseline["📸 Baseline Snapshot<br/>Starting Balance<br/>Goals | Timelines<br/>Historical Baseline"]
    
    Baseline --> Track["📈 Real-Time Tracking<br/>Daily Transactions<br/>Goal Progress<br/>Deviation Detection"]
    
    Track --> Measure["📊 Measurement Period<br/>Week 1 | Week 2<br/>Week 3 | Week 4"]
    
    Measure --> Attribution["🎯 Attribution Analysis<br/>Success Rate<br/>System Impact<br/>User Behavior"]
    
    Attribution --> Results["✅ Actual Results<br/>Saved: ₹3,000/₹5,000 (60%)<br/>On Track? Yes/No<br/>Timeline: 10 Days → 13 Days"]
    
    Results --> Success{"Goal<br/>Success?"}
    
    Success -->|YES| Positive["🎉 Positive Outcome<br/>Recommendation Works<br/>Reinforce Pattern<br/>Increase Confidence"]
    Success -->|NO| Negative["❌ Negative Outcome<br/>Find Root Cause<br/>Income Drop? Unexpected Expense?<br/>Adjust Strategy"]
    
    Positive --> Learn["🧠 Learning Processing<br/>Update Model<br/>Boost Similar Recs<br/>Add Success Pattern"]
    Negative --> Learn
    
    Learn --> Adapt["🔄 Adaptive Behavior<br/>New Communication Style<br/>Adjusted Targets<br/>Alternative Strategies"]
    
    Adapt --> Dashboard["📊 Dashboard Update<br/>Before/After Metrics<br/>Impact Visualization<br/>Peer Comparison"]
    
    Dashboard --> Feedback["💬 Feedback Collection<br/>What Helped Most?<br/>What Was Hard?<br/>What to Improve?"]
    
    Feedback --> Next_Cycle["🔁 Next Recommendation<br/>Smarter | More Personalized<br/>Better Success Rate"]
    
    Next_Cycle --> Final["✅ Continuous Learning<br/>System Improves Daily<br/>More Accurate<br/>More Trustworthy"]
    
    style Start fill:#ccfbf1,stroke:#0d9488,stroke-width:2px
    style Baseline fill:#99f6e4,stroke:#0f766e,stroke-width:2px
    style Track fill:#5eead4,stroke:#0d9488,stroke-width:2px
    style Measure fill:#2dd4bf,stroke:#0d9488,stroke-width:2px,color:#fff
    style Attribution fill:#14b8a6,stroke:#0f766e,stroke-width:2px,color:#fff
    style Results fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Success fill:#fde68a,stroke:#f59e0b,stroke-width:2px
    style Positive fill:#86efac,stroke:#22c55e,stroke-width:2px
    style Negative fill:#fecaca,stroke:#dc2626,stroke-width:2px
    style Learn fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Adapt fill:#bfdbfe,stroke:#3b82f6,stroke-width:2px
    style Dashboard fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#fff
    style Feedback fill:#e9d5ff,stroke:#c084fc,stroke-width:2px
    style Next_Cycle fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style Final fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,stroke-width:3px`
  }
};

export default flowchartData;
