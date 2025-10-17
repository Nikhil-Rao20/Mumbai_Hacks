import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Check } from 'lucide-react'

function LandingPage({ isDark, onThemeToggle, onNavigate }) {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])
  const trailRef = useRef([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse trail effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add to trail
      const newPoint = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        life: 1
      }

      trailRef.current.push(newPoint)

      // Keep trail limited to 30 points
      if (trailRef.current.length > 30) {
        trailRef.current.shift()
      }

      setTrail([...trailRef.current])
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Fade out trail
    const fadeInterval = setInterval(() => {
      trailRef.current = trailRef.current
        .map(point => ({ ...point, life: point.life - 0.02 }))
        .filter(point => point.life > 0)
      setTrail([...trailRef.current])
    }, 16)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(fadeInterval)
    }
  }, [])

  const techStack = [
    {
      category: 'Agent Orchestration & LLM',
      icon: '🧠',
      color: 'from-purple-600 to-blue-600',
      tools: ['Claude Sonnet 4.5', 'Claude Agent SDK', 'LangGraph', 'LangChain']
    },
    {
      category: 'Data Ingestion & Processing',
      icon: '📊',
      color: 'from-blue-600 to-cyan-600',
      tools: ['Google Cloud Speech-to-Text', 'Tesseract OCR', 'Plaid API', 'NPCI Gateway', 'Apache NiFi']
    },
    {
      category: 'Local Storage & Offline-First',
      icon: '💾',
      color: 'from-cyan-600 to-teal-600',
      tools: ['SQLite', 'AES-256 Encryption', 'Custom Sync Protocol', 'Redux Offline']
    },
    {
      category: 'Cloud Infrastructure',
      icon: '☁️',
      color: 'from-orange-600 to-red-600',
      tools: ['AWS EC2', 'Kubernetes (EKS)', 'PostgreSQL', 'Pinecone (Vector DB)', 'Redis']
    },
    {
      category: 'External Integrations',
      icon: '🔗',
      color: 'from-green-600 to-emerald-600',
      tools: ['OpenWeather API', 'ClearTax API', 'CIBIL', 'Zerodha', 'WhatsApp Business API', 'Twilio']
    },
    {
      category: 'ML & Analytics',
      icon: '📈',
      color: 'from-indigo-600 to-purple-600',
      tools: ['TensorFlow', 'Prophet', 'Scikit-learn', 'MLflow', 'Weights & Biases']
    },
    {
      category: 'Frontend & UI',
      icon: '🎨',
      color: 'from-pink-600 to-rose-600',
      tools: ['React Native', 'Streamlit', 'Redux', 'Plotly', 'Figma']
    },
    {
      category: 'Security & Compliance',
      icon: '🔐',
      color: 'from-red-600 to-orange-600',
      tools: ['Auth0', 'AWS KMS', 'TLS 1.3', 'Audit Logging', 'RBI/NPCI Compliance']
    },
    {
      category: 'Deployment & Operations',
      icon: '🚀',
      color: 'from-slate-600 to-gray-600',
      tools: ['GitHub Actions', 'ArgoCD', 'Docker', 'Prometheus', 'Grafana', 'ELK Stack']
    },
    {
      category: 'Development Tools',
      icon: '🛠️',
      color: 'from-gray-600 to-slate-600',
      tools: ['Docker Compose', 'VSCode', 'Postman', 'pytest', 'Jupyter', 'Terraform']
    }
  ]

  const team = [
    {
      name: 'Nikhileswara Rao Sulake',
      role: 'Medical Image Analysis Researcher | Computer Vision & Deep Learning',
      linkedin: 'https://www.linkedin.com/in/nikhileswara-rao-sulake/',
      image: '/nikhil.png',
      initials: 'NR'
    },
    {
      name: 'Sai Manikanta Eswar Machara',
      role: 'Computer Vision Researcher | Medical Imaging | Deep Learning',
      linkedin: 'https://www.linkedin.com/in/sai-manikanta-eswar-machara/',
      image: '/eswar.jpg',
      initials: 'SM'
    },
    {
      name: 'Siva Teja Reddy Annapureddy',
      role: 'Machine Learning Engineer | Generative AI',
      linkedin: 'https://www.linkedin.com/in/siva-teja-reddy-annapureddy/',
      image: '/siva.jpeg',
      initials: 'ST'
    },
    {
      name: 'Likhith Busam',
      role: 'Agentic AI Specialist | Generative AI',
      linkedin: 'https://www.linkedin.com/in/likhith-busam-7b465a31b/',
      image: '/likith.png',
      initials: 'LB'
    }
  ]

  const features = [
    { title: 'Pattern Recognition', desc: 'LSTM-based behavioral analysis' },
    { title: 'Budget Intelligence', desc: 'Feast/Famine scenario planning' },
    { title: 'Context Awareness', desc: 'Weather & cultural integration' },
    { title: 'Income Forecasting', desc: '30-day probability predictions' },
    { title: 'Scheme Matching', desc: '200+ government opportunities' },
    { title: 'Tax Automation', desc: 'Compliance & optimization' },
    { title: 'Smart Recommendations', desc: 'Claude-powered guidance' },
    { title: 'Human Escalation', desc: 'Expert advisor routing' },
    { title: 'Auto Execution', desc: 'User-controlled automation' },
    { title: 'Outcome Tracking', desc: 'Real-world verification' }
  ]

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Mouse Trail Effect */}
      <svg
        className="pointer-events-none fixed inset-0 z-50"
        width="100%"
        height="100%"
      >
        {trail.map((point) => {
          const size = 3 * point.life
          const opacity = point.life
          return (
            <circle
              key={point.id}
              cx={point.x}
              cy={point.y}
              r={size}
              fill="none"
              stroke={isDark ? '#60a5fa' : '#3b82f6'}
              strokeWidth="2"
              opacity={opacity}
              style={{
                filter: `drop-shadow(0 0 ${3 * point.life}px ${isDark ? '#60a5fa' : '#3b82f6'})`
              }}
            />
          )
        })}
      </svg>

      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50'}`}>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center mb-16 animate-fadeIn" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              FinTech Agent Bot <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Rudra</span>
            </h1>
            <p className={`text-xl sm:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              One Stop Solution for All Gig Workers
            </p>
            <p className={`text-lg mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering 230M+ gig workers with AI-powered financial intelligence, personalized guidance, and proactive wealth management in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('phases')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Explore Phase Flowcharts <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('features')}
                className={`px-8 py-3 ${isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-gray-900 hover:bg-gray-100'} rounded-lg transition-all border ${isDark ? 'border-slate-700' : 'border-gray-300'} flex items-center justify-center gap-2`}
              >
                View Feature Flowcharts <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          {/* <div className="mt-16 mb-20">
            <h3 className={`text-2xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              ✨ Core Capabilities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border-2 transition-all duration-300 hover:scale-105 h-32 ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 hover:border-purple-500 hover:bg-slate-750'
                      : 'bg-white border-gray-200 hover:border-purple-400 hover:shadow-lg'
                  }`}
                >
                  <div className={`text-2xl mb-2`}>
                    {['🔍', '💰', '🌍', '📈', '🏆', '📄', '💡', '🚨', '⚡', '✅'][idx]}
                  </div>
                  <h4 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h4>
                  <p className={`text-xs line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </section>

        {/* About Section */}
        <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-r from-purple-50 to-blue-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About Rudra
            </h2>
            
            {/* Main content with visual elements */}
            <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border rounded-2xl overflow-hidden`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left - Visual Element */}
                <div className={`${isDark ? 'bg-gradient-to-br from-purple-900 to-blue-900' : 'bg-gradient-to-br from-purple-600 to-blue-600'} p-8 flex items-center justify-center text-6xl`}>
                  🤖
                </div>

                {/* Center - Main content */}
                <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-center">
                  <p className={`text-base sm:text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className={`font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}>
                      Rudra
                    </span>
                    {' '} is a comprehensive <span className="font-semibold">AI-powered financial management system</span> designed specifically for India's gig economy workforce.
                  </p>
                  
                  <p className={`text-base sm:text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Unlike traditional fintech solutions built for salaried workers, we understand the unique challenges: <span className="font-semibold">daily volatility, seasonal fluctuations, weather dependencies</span>, and cultural spending cycles.
                  </p>

                  <p className={`text-base sm:text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our multi-agent AI processes financial decisions in <span className="font-semibold">real-time while maintaining 100% privacy</span> through offline-first design.
                  </p>

                  {/* Key benefits list */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Connects users to <span className="font-semibold">200+ government schemes</span> and opportunities
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-semibold">Tax compliance automation</span> with deduction optimization
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="font-semibold">Transparent, explainable</span> recommendations grounded in data
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section below */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className={`p-8 rounded-xl text-center ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'}`}>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">230M+</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Gig Workers in India</p>
                <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Our target market</p>
              </div>
              <div className={`p-8 rounded-xl text-center ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'}`}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">10</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Specialized AI Agents</p>
                <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Multi-domain experts</p>
              </div>
              <div className={`p-8 rounded-xl text-center ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'}`}>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-2">100%</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Offline-First System</p>
                <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Privacy-first design</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🛠️ Enterprise Technology Stack
          </h2>
          <p className={`text-center mb-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Built with industry-leading tools and frameworks for security, scalability, and performance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className={`group rounded-xl overflow-hidden transition-all hover:scale-105 h-full ${isDark ? 'bg-slate-800 hover:bg-slate-750' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-slate-700 hover:border-purple-500' : 'border-gray-200 hover:border-purple-400'} hover:shadow-xl`}
              >
                <div className={`bg-gradient-to-br ${tech.color} p-6 text-white h-full flex flex-col`}>
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="font-bold text-sm mb-4 line-clamp-2">{tech.category}</h3>
                  <ul className="space-y-2 flex-grow">
                    {tech.tools.map((tool, tidx) => (
                      <li key={tidx} className="text-xs flex items-start gap-2">
                        <Check size={14} className="flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              👥 Meet Our Expert Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {team.map((member, idx) => (
                <a
                  key={idx}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${isDark ? 'bg-slate-800 border-slate-700 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-purple-400'} border rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105`}
                >
                  {/* Profile Image Container */}
                  <div className={`w-full h-48 ${isDark ? 'bg-gradient-to-br from-purple-900 to-blue-900' : 'bg-gradient-to-br from-purple-200 to-blue-200'} overflow-hidden`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.initials}&background=random`
                      }}
                    />
                  </div>
                  {/* Info Container */}
                  <div className="p-6">
                    <h3 className={`font-bold text-center text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                    <p className={`text-sm text-center mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.role}</p>
                    <div className="flex justify-center mt-4 text-blue-600 group-hover:text-blue-700 transition-colors">
                      <Linkedin size={20} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`${isDark ? 'bg-gradient-to-r from-purple-900 to-blue-900 border-purple-700' : 'bg-gradient-to-r from-purple-600 to-blue-600'} rounded-2xl p-12 text-center border`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Explore Rudra?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Dive into our comprehensive flowcharts to understand how Rudra works across different phases and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('phases')}
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                System Phases →
              </button>
              <button
                onClick={() => onNavigate('features')}
                className="px-8 py-3 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-900 transition-all"
              >
                Core Features →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${isDark ? 'bg-slate-900 border-slate-800' : 'bg-gray-100 border-gray-200'} border-t py-12`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Rudra</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  AI-powered financial assistant for gig workers
                </p>
              </div>
              <div>
                <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => onNavigate('landing')} className={`text-sm hover:text-purple-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('phases')} className={`text-sm hover:text-purple-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Phases
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('features')} className={`text-sm hover:text-purple-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Features
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`text-sm hover:text-purple-600 flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Github size={16} /> GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`border-t ${isDark ? 'border-slate-800' : 'border-gray-300'} pt-8 text-center`}>
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                © 2024 Rudra FinTech Agent. Empowering Gig Workers Globally. 🚀
              </p>
              <p className={`text-xs mt-2 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                Built with React | Powered by Claude Sonnet 4.5 | Secure & Compliant with RBI/NPCI Standards
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage
