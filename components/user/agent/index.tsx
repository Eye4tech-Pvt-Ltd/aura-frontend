import {
  Sparkles,
  Volume2,
  Settings,
  Brain,
  MessageSquare,
  Zap,
  Shield,
  Play,
} from 'lucide-react'
import Button from '../common/Button'
import Badge from '../common/Badge'

const toneAttributes = [
  { label: 'Professional', value: 90 },
  { label: 'Friendly', value: 85 },
  { label: 'Empathetic', value: 78 },
  { label: 'Confident', value: 92 },
]

const voiceOptions = [
  {
    id: 'sophia',
    name: 'Sophia',
    accent: 'American',
    gender: 'Female',
    active: true,
  },
  {
    id: 'james',
    name: 'James',
    accent: 'British',
    gender: 'Male',
    active: false,
  },
  {
    id: 'aria',
    name: 'Aria',
    accent: 'Australian',
    gender: 'Female',
    active: false,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    accent: 'American',
    gender: 'Male',
    active: false,
  },
]

const businessRules = [
  {
    id: 1,
    title: 'Always confirm appointment details',
    description: 'Repeat date, time, and service before booking',
    active: true,
  },
  {
    id: 2,
    title: 'Collect customer preferences',
    description: 'Ask about preferred contact method and time',
    active: true,
  },
  {
    id: 3,
    title: 'Handle objections gracefully',
    description: 'Use empathy and offer alternatives',
    active: true,
  },
  {
    id: 4,
    title: 'Transfer complex queries',
    description: 'Escalate to human agent when needed',
    active: true,
  },
]

const AIAgent = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                AI Agent Configuration
              </h1>
              <p className="text-slate-600">
                Customize your AI agent&apos;s personality and behavior
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" icon={Settings}>
                Advanced Settings
              </Button>
              <Button variant="primary" icon={Play}>
                Test Agent
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Identity Card */}
        <div className="bg-gradient-to-br from-accent-purple-500 to-accent-purple-700 rounded-2xl p-8 mb-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Sophia</h2>
                  <p className="text-purple-100">AI Customer Service Agent</p>
                </div>
              </div>
              <Badge variant="success">Active</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-semibold">Calls Handled</span>
                </div>
                <p className="text-3xl font-bold">2,847</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Success Rate</span>
                </div>
                <p className="text-3xl font-bold">96.8%</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5" />
                  <span className="font-semibold">Response Time</span>
                </div>
                <p className="text-3xl font-bold">1.2s</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Tone & Personality */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-accent-purple-400 to-accent-purple-600 shadow-md">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Tone & Personality
              </h2>
            </div>

            <div className="space-y-4">
              {toneAttributes.map((attr) => (
                <div key={attr.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      {attr.label}
                    </span>
                    <span className="text-sm font-semibold text-primary-600">
                      {attr.value}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-300"
                      style={{ width: `${attr.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600 mb-2 font-medium">
                Custom Instructions
              </p>
              <textarea
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                rows={3}
                placeholder="Add custom behavioral guidelines..."
                defaultValue="Always maintain a professional yet warm tone. Use active listening techniques and confirm understanding before proceeding."
              />
            </div>
          </div>

          {/* Voice Selection */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 shadow-md">
                <Volume2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Voice Selection
              </h2>
            </div>

            <div className="space-y-3">
              {voiceOptions.map((voice) => (
                <div
                  key={voice.id}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    voice.active
                      ? 'border-primary-500 bg-primary-50/50 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-900">
                          {voice.name}
                        </span>
                        {voice.active && (
                          <Badge variant="info" size="sm">
                            Active
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-600">
                        {voice.accent} • {voice.gender}
                      </p>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" className="w-full mt-4">
              Browse More Voices
            </Button>
          </div>
        </div>

        {/* Business Rules */}
        <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-accent-green-400 to-accent-green-600 shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Business Rules
              </h2>
            </div>
            <Button variant="ghost" size="sm">
              Add Rule
            </Button>
          </div>

          <div className="space-y-3">
            {businessRules.map((rule) => (
              <div
                key={rule.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={rule.active}
                  className="mt-1 w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-2 focus:ring-primary-500/20"
                  readOnly
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-slate-600">{rule.description}</p>
                </div>
                <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAgent
