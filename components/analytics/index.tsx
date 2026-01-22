"use client"
import { useState } from 'react';
import { TrendingUp, TrendingDown, Phone, Clock, DollarSign, Download } from 'lucide-react';
import Button from '../common/Button';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const callVolumeData = [
  { date: 'Jan 1', calls: 45, answered: 42, missed: 3 },
  { date: 'Jan 2', calls: 52, answered: 49, missed: 3 },
  { date: 'Jan 3', calls: 48, answered: 46, missed: 2 },
  { date: 'Jan 4', calls: 61, answered: 58, missed: 3 },
  { date: 'Jan 5', calls: 55, answered: 52, missed: 3 },
  { date: 'Jan 6', calls: 38, answered: 36, missed: 2 },
  { date: 'Jan 7', calls: 42, answered: 40, missed: 2 },
];

const outcomeData = [
  { name: 'Booked', value: 45, color: '#4caf50' },
  { name: 'Info Given', value: 30, color: '#00bcd4' },
  { name: 'Callback', value: 15, color: '#ff9800' },
  { name: 'Missed', value: 10, color: '#f44336' },
];

const peakHoursData = [
  { hour: '9 AM', calls: 12 },
  { hour: '10 AM', calls: 18 },
  { hour: '11 AM', calls: 24 },
  { hour: '12 PM', calls: 15 },
  { hour: '1 PM', calls: 10 },
  { hour: '2 PM', calls: 22 },
  { hour: '3 PM', calls: 28 },
  { hour: '4 PM', calls: 20 },
  { hour: '5 PM', calls: 14 },
];

const sentimentData = [
  { name: 'Positive', value: 65, color: '#4caf50' },
  { name: 'Neutral', value: 25, color: '#94a3b8' },
  { name: 'Negative', value: 10, color: '#f44336' },
];

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7d');

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Analytics</h1>
              <p className="text-slate-600">Comprehensive insights into your call center performance</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
                {['7d', '30d', '90d', 'All'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                      dateRange === range
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '90d' ? '90 Days' : 'All Time'}
                  </button>
                ))}
              </div>
              <Button variant="secondary" icon={Download}>
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-md">
                <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 text-accent-green-700 text-sm font-semibold bg-accent-green-50 px-2.5 py-1 rounded-lg border border-accent-green-200">
                <TrendingUp className="w-4 h-4" />
                +12%
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Total Calls</p>
            <p className="text-3xl font-bold text-slate-900">2,847</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent-green-400 to-accent-green-600 shadow-md">
                <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 text-accent-green-700 text-sm font-semibold bg-accent-green-50 px-2.5 py-1 rounded-lg border border-accent-green-200">
                <TrendingUp className="w-4 h-4" />
                +3.2%
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Answer Rate</p>
            <p className="text-3xl font-bold text-slate-900">96.8%</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent-orange-400 to-accent-orange-600 shadow-md">
                <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 text-accent-red-700 text-sm font-semibold bg-accent-red-50 px-2.5 py-1 rounded-lg border border-accent-red-200">
                <TrendingDown className="w-4 h-4" />
                -0:18
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Avg Duration</p>
            <p className="text-3xl font-bold text-slate-900">4:32</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent-purple-400 to-accent-purple-600 shadow-md">
                <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 text-accent-green-700 text-sm font-semibold bg-accent-green-50 px-2.5 py-1 rounded-lg border border-accent-green-200">
                <TrendingUp className="w-4 h-4" />
                +18%
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Revenue Impact</p>
            <p className="text-3xl font-bold text-slate-900">$24.5K</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Call Volume Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Call Volume Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={callVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="calls" stroke="#00bcd4" strokeWidth={2} name="Total Calls" />
                <Line type="monotone" dataKey="answered" stroke="#4caf50" strokeWidth={2} name="Answered" />
                <Line type="monotone" dataKey="missed" stroke="#f44336" strokeWidth={2} name="Missed" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Call Outcomes */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Call Outcomes</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={outcomeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {outcomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Peak Hours */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Peak Call Hours</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={peakHoursData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="hour" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="calls" fill="#ff9800" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sentiment Analysis */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Customer Sentiment</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <h3 className="font-semibold text-slate-900 mb-4">Top Performing Days</h3>
            <div className="space-y-3">
              {['Thursday', 'Tuesday', 'Wednesday'].map((day, idx) => (
                <div key={day} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-slate-900">{day}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{61 - idx * 3} calls</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md">
            <h3 className="font-semibold text-slate-900 mb-4">AI Agent Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Success Rate</span>
                  <span className="text-sm font-semibold text-accent-green-600">96.8%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-green-400 to-accent-green-600 rounded-full" style={{ width: '96.8%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Customer Satisfaction</span>
                  <span className="text-sm font-semibold text-primary-600">4.8/5.0</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Resolution Rate</span>
                  <span className="text-sm font-semibold text-accent-purple-600">92.3%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-purple-400 to-accent-purple-600 rounded-full" style={{ width: '92.3%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 shadow-md">
            <h3 className="font-semibold text-slate-900 mb-2">Insights Summary</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-2">
                <div className="p-1 rounded-full bg-accent-green-500 mt-1">
                  <div className="w-1 h-1"></div>
                </div>
                <p className="text-sm text-slate-700">Peak call times: 2-3 PM daily</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="p-1 rounded-full bg-primary-500 mt-1">
                  <div className="w-1 h-1"></div>
                </div>
                <p className="text-sm text-slate-700">45% of calls result in bookings</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="p-1 rounded-full bg-accent-orange-500 mt-1">
                  <div className="w-1 h-1"></div>
                </div>
                <p className="text-sm text-slate-700">Average response time: 1.2 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
