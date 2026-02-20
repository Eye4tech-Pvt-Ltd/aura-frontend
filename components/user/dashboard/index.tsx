"use client"
import { Phone, PhoneIncoming, PhoneMissed, Clock, Calendar, Play } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import KPICard from '../common/KPICard';
import Badge from '../common/Badge';
import Button from '../common/Button';

const callsData = [
  { date: 'Mon', calls: 45 },
  { date: 'Tue', calls: 52 },
  { date: 'Wed', calls: 48 },
  { date: 'Thu', calls: 61 },
  { date: 'Fri', calls: 55 },
  { date: 'Sat', calls: 38 },
  { date: 'Sun', calls: 42 },
];

const recentCalls = [
  { id: 1, caller: 'Sarah Johnson', number: '+1 (555) 123-4567', time: '2 min ago', duration: '3:42', outcome: 'Booked', sentiment: 'positive' },
  { id: 2, caller: 'Michael Chen', number: '+1 (555) 987-6543', time: '15 min ago', duration: '2:18', outcome: 'Info', sentiment: 'neutral' },
  { id: 3, caller: 'Emma Williams', number: '+1 (555) 456-7890', time: '32 min ago', duration: '5:21', outcome: 'Booked', sentiment: 'positive' },
  { id: 4, caller: 'Unknown', number: '+1 (555) 234-5678', time: '1 hr ago', duration: '0:00', outcome: 'Missed', sentiment: 'negative' },
  { id: 5, caller: 'David Martinez', number: '+1 (555) 345-6789', time: '2 hr ago', duration: '4:15', outcome: 'Callback', sentiment: 'neutral' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Overview</h1>
          <p className="text-slate-600">Monitor your AI call center performance</p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Calls Today"
            value="124"
            change="+12%"
            changeType="positive"
            icon={Phone}
            iconColor="text-white"
            iconBg="bg-gradient-to-br from-primary-400 to-primary-600"
          />
          <KPICard
            title="Answer Rate"
            value="94.2%"
            change="+3.1%"
            changeType="positive"
            icon={PhoneIncoming}
            iconColor="text-white"
            iconBg="bg-gradient-to-br from-accent-green-400 to-accent-green-600"
          />
          <KPICard
            title="Avg Duration"
            value="4:32"
            change="-0:18"
            changeType="neutral"
            icon={Clock}
            iconColor="text-white"
            iconBg="bg-gradient-to-br from-accent-orange-400 to-accent-orange-600"
          />
          <KPICard
            title="Missed Calls"
            value="7"
            change="-2"
            changeType="positive"
            icon={PhoneMissed}
            iconColor="text-white"
            iconBg="bg-gradient-to-br from-accent-red-400 to-accent-red-600"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calls Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-1">Call Volume</h2>
                <p className="text-sm text-slate-600">Last 7 days</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-md transition-all hover:shadow-lg">
                  7D
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                  30D
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                  90D
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={callsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="calls" 
                  stroke="#00bcd4" 
                  strokeWidth={3}
                  dot={{ fill: '#00bcd4', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Agent Status */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">AI Agent Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-accent-green-50 to-accent-green-100/50 rounded-lg border border-accent-green-200/60">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-green-400 to-accent-green-600 flex items-center justify-center text-white font-semibold shadow-md">
                      AI
                    </div>
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Sophia</p>
                    <p className="text-sm text-slate-600">Active</p>
                  </div>
                </div>
                <Badge variant="success" size="sm">Online</Badge>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Calls Handled</span>
                  <span className="font-semibold text-slate-900">117</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Success Rate</span>
                  <span className="font-semibold text-accent-green-600">96.8%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Avg Response Time</span>
                  <span className="font-semibold text-slate-900">1.2s</span>
                </div>
              </div>

              <Button variant="secondary" size="sm" className="w-full mt-4">
                Configure Agent
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Calls */}
        <div className="mt-6 bg-white rounded-xl border border-slate-200/60 shadow-md">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-1">Recent Calls</h2>
                <p className="text-sm text-slate-600">Latest inbound and outbound activity</p>
              </div>
              <Button variant="ghost" size="sm" icon={Calendar}>
                View All
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Caller</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Number</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Outcome</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentCalls.map((call) => (
                  <tr key={call.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-medium shadow-sm">
                          {call.caller.charAt(0)}
                        </div>
                        <span className="font-medium text-slate-900">{call.caller}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{call.number}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{call.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{call.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge 
                        variant={call.outcome === 'Booked' ? 'success' : call.outcome === 'Missed' ? 'error' : 'neutral'}
                        size="sm"
                      >
                        {call.outcome}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
                        <Play className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
