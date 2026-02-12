"use client"
import { useState } from 'react';
import { Phone, Plus, Settings, BarChart2, Globe, MapPin } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const phoneNumbers = [
  { 
    id: 1, 
    number: '+1 (555) 123-4567', 
    type: 'Main Line',
    location: 'New York, US',
    status: 'active',
    assignedAgent: 'Sophia',
    callsToday: 47,
    isPrimary: true
  },
  { 
    id: 2, 
    number: '+1 (555) 987-6543', 
    type: 'Support Line',
    location: 'Los Angeles, US',
    status: 'active',
    assignedAgent: 'Sophia',
    callsToday: 23,
    isPrimary: false
  },
  { 
    id: 3, 
    number: '+44 20 7946 0958', 
    type: 'UK Office',
    location: 'London, UK',
    status: 'active',
    assignedAgent: 'James',
    callsToday: 15,
    isPrimary: false
  },
];

const availableNumbers = [
  { number: '+1 (555) 234-5678', location: 'New York, US', price: '$2/month' },
  { number: '+1 (555) 345-6789', location: 'Chicago, US', price: '$2/month' },
  { number: '+1 (555) 456-7890', location: 'Miami, US', price: '$2/month' },
  { number: '+44 20 7123 4567', location: 'London, UK', price: '$3/month' },
  { number: '+61 2 9876 5432', location: 'Sydney, AU', price: '$3/month' },
];

const Numbers = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Phone Numbers</h1>
              <p className="text-slate-600">Manage your phone numbers and routing</p>
            </div>
            <Button variant="primary" icon={Plus} onClick={() => setShowBuyModal(!showBuyModal)}>
              Buy Number
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Primary Number Highlight */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white card-shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="success" size="sm">Primary Number</Badge>
                  <h2 className="text-3xl font-bold mt-3 mb-2">+1 (555) 123-4567</h2>
                  <p className="text-primary-100">Main business line • New York, US</p>
                </div>
                <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <p className="text-primary-100 text-sm mb-1">Calls Today</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <p className="text-primary-100 text-sm mb-1">This Week</p>
                  <p className="text-3xl font-bold">312</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <p className="text-primary-100 text-sm mb-1">Uptime</p>
                  <p className="text-3xl font-bold">99.9%</p>
                </div>
              </div>
            </div>

            {/* Numbers List */}
            <div className="bg-white rounded-xl border border-slate-200/60 card-shadow">
              <div className="p-4 border-b border-slate-200">
                <h2 className="font-semibold text-slate-900">Active Numbers</h2>
              </div>
              <div className="divide-y divide-slate-200">
                {phoneNumbers.map((num) => (
                  <div key={num.id} className="p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-lg ${num.isPrimary ? 'bg-primary-50' : 'bg-slate-100'}`}>
                          <Phone className={`w-5 h-5 ${num.isPrimary ? 'text-primary-600' : 'text-slate-600'}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-slate-900">{num.number}</h3>
                            {num.isPrimary && <Badge variant="info" size="sm">Primary</Badge>}
                          </div>
                          <p className="text-sm text-slate-600">{num.type}</p>
                        </div>
                      </div>
                      <Badge variant="success" size="sm">{num.status}</Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Location</p>
                        <p className="text-sm font-medium text-slate-900 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {num.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Assigned To</p>
                        <p className="text-sm font-medium text-slate-900">{num.assignedAgent}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Calls Today</p>
                        <p className="text-sm font-medium text-slate-900">{num.callsToday}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <Button variant="ghost" size="sm" icon={Settings}>
                        Configure
                      </Button>
                      <Button variant="ghost" size="sm" icon={BarChart2}>
                        Analytics
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buy Numbers Panel */}
          <div className="space-y-6">
            {showBuyModal && (
              <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Available Numbers</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Search by Location</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="City or country..."
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                    />
                  </div>
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {availableNumbers.map((num, idx) => (
                    <div key={idx} className="p-3 border border-slate-200 rounded-lg hover:border-primary-300 hover:bg-primary-50/30 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-slate-900">{num.number}</p>
                          <p className="text-xs text-slate-600 flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {num.location}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-primary-600">{num.price}</span>
                      </div>
                      <Button variant="primary" size="sm" className="w-full">
                        Purchase
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Routing Rules</h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-900">Business Hours</span>
                    <Badge variant="success" size="sm">Active</Badge>
                  </div>
                  <p className="text-xs text-slate-600">Route to AI Agent during 9 AM - 6 PM</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-900">After Hours</span>
                    <Badge variant="neutral" size="sm">Active</Badge>
                  </div>
                  <p className="text-xs text-slate-600">Send to voicemail outside business hours</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-900">Emergency Routing</span>
                    <Badge variant="warning" size="sm">Active</Badge>
                  </div>
                  <p className="text-xs text-slate-600">Forward urgent calls to manager</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-4">
                Edit Rules
              </Button>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200/60">
              <h3 className="font-semibold text-slate-900 mb-2">Need International?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get phone numbers in 60+ countries worldwide
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Explore Locations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;