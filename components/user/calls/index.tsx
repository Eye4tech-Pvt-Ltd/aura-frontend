'use client'
import { useState } from 'react'
import {
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Search,
  Filter,
  X,
  Play,
  Download,
  ThumbsUp,
  ThumbsDown,
  User,
} from 'lucide-react'
import Button from '../common/Button'
import Badge from '../common/Badge'

const calls = [
  {
    id: 1,
    caller: 'Sarah Johnson',
    number: '+1 (555) 123-4567',
    type: 'inbound',
    time: '2024-01-15 10:32 AM',
    duration: '3:42',
    outcome: 'Booked',
    sentiment: 'positive',
    transcript:
      'Customer called to schedule a dental cleaning appointment. Discussed available time slots and confirmed booking for next Tuesday at 2 PM.',
    intents: ['appointment_booking', 'service_inquiry'],
    aiSummary:
      'Successfully booked dental cleaning appointment for Sarah Johnson on Tuesday, Jan 23 at 2:00 PM. Customer was satisfied with the available time slot.',
  },
  {
    id: 2,
    caller: 'Michael Chen',
    number: '+1 (555) 987-6543',
    type: 'inbound',
    time: '2024-01-15 10:17 AM',
    duration: '2:18',
    outcome: 'Info',
    sentiment: 'neutral',
    transcript:
      'Customer inquired about office hours and services offered. Provided information about business hours and service packages.',
    intents: ['hours_inquiry', 'service_inquiry'],
    aiSummary:
      'Provided business information to Michael Chen. Shared office hours (Mon-Fri 9AM-6PM) and overview of available services.',
  },
  {
    id: 3,
    caller: 'Emma Williams',
    number: '+1 (555) 456-7890',
    type: 'inbound',
    time: '2024-01-15 9:48 AM',
    duration: '5:21',
    outcome: 'Booked',
    sentiment: 'positive',
    transcript:
      'Customer called regarding follow-up appointment. Discussed treatment plan and scheduled next visit.',
    intents: ['appointment_booking', 'follow_up'],
    aiSummary:
      'Scheduled follow-up appointment for Emma Williams on January 28 at 11:00 AM. Confirmed treatment plan details.',
  },
  {
    id: 4,
    caller: 'Unknown',
    number: '+1 (555) 234-5678',
    type: 'inbound',
    time: '2024-01-15 9:15 AM',
    duration: '0:00',
    outcome: 'Missed',
    sentiment: 'negative',
    transcript: '',
    intents: [],
    aiSummary:
      'Missed call - no voicemail left. Consider adding to callback queue.',
  },
]

const Calls = () => {
  const [selectedCall, setSelectedCall] = useState(calls[0])
  const [activeTab, setActiveTab] = useState<
    'all' | 'inbound' | 'outbound' | 'missed'
  >('all')

  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Call Inbox</h1>
          <p className="text-slate-600">Review and manage all call activity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calls List */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200/60 shadow-md">
            {/* Tabs & Filters */}
            <div className="p-4 border-b border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {(['all', 'inbound', 'outbound', 'missed'] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeTab === tab
                            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </div>
                <Button variant="ghost" size="sm" icon={Filter}>
                  Filters
                </Button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search calls..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                />
              </div>
            </div>

            {/* Calls List */}
            <div className="divide-y divide-slate-200 max-h-[600px] overflow-y-auto">
              {calls.map((call) => (
                <div
                  key={call.id}
                  onClick={() => setSelectedCall(call)}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedCall.id === call.id
                      ? 'bg-primary-50 border-l-4 border-l-primary-600'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg shadow-sm ${
                        call.type === 'inbound'
                          ? 'bg-gradient-to-br from-primary-400 to-primary-600'
                          : call.type === 'outbound'
                          ? 'bg-gradient-to-br from-accent-green-400 to-accent-green-600'
                          : 'bg-gradient-to-br from-accent-red-400 to-accent-red-600'
                      }`}
                    >
                      {call.type === 'inbound' ? (
                        <PhoneIncoming className="w-4 h-4 text-white" />
                      ) : call.type === 'outbound' ? (
                        <PhoneOutgoing className="w-4 h-4 text-white" />
                      ) : (
                        <PhoneMissed className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-slate-900 truncate">
                          {call.caller}
                        </h3>
                        <Badge
                          variant={
                            call.outcome === 'Booked'
                              ? 'success'
                              : call.outcome === 'Missed'
                              ? 'error'
                              : 'neutral'
                          }
                          size="sm"
                        >
                          {call.outcome}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">
                        {call.number}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>{call.time}</span>
                        <span>•</span>
                        <span>{call.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call Detail Drawer */}
          <div className="bg-white rounded-xl border border-slate-200/60 shadow-md p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Call Details
              </h2>
              <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Caller Info */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold shadow-md">
                  {selectedCall.caller.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {selectedCall.caller}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {selectedCall.number}
                  </p>
                </div>
              </div>

              {/* Recording Player */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <button className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center hover:from-primary-600 hover:to-primary-700 transition-all shadow-md">
                    <Play className="w-5 h-5 ml-0.5" />
                  </button>
                  <div className="flex-1">
                    <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {selectedCall.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" icon={Download}>
                    Download
                  </Button>
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-600 mb-1">Date & Time</p>
                  <p className="font-medium text-slate-900">
                    {selectedCall.time}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Duration</p>
                  <p className="font-medium text-slate-900">
                    {selectedCall.duration}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Outcome</p>
                  <Badge
                    variant={
                      selectedCall.outcome === 'Booked' ? 'success' : 'neutral'
                    }
                  >
                    {selectedCall.outcome}
                  </Badge>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Sentiment</p>
                  <div className="flex items-center gap-1">
                    {selectedCall.sentiment === 'positive' ? (
                      <ThumbsUp className="w-4 h-4 text-accent-green-600" />
                    ) : selectedCall.sentiment === 'negative' ? (
                      <ThumbsDown className="w-4 h-4 text-accent-red-600" />
                    ) : (
                      <User className="w-4 h-4 text-slate-600" />
                    )}
                    <span className="font-medium text-slate-900 capitalize">
                      {selectedCall.sentiment}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Summary */}
            {selectedCall.aiSummary && (
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <div className="p-1 rounded bg-gradient-to-br from-accent-purple-400 to-accent-purple-600 shadow-sm">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  AI Summary
                </h3>
                <div className="bg-gradient-to-r from-accent-purple-50 to-accent-purple-100 rounded-lg p-4 border border-accent-purple-200">
                  <p className="text-sm text-slate-700">
                    {selectedCall.aiSummary}
                  </p>
                </div>
              </div>
            )}

            {/* Detected Intents */}
            {selectedCall.intents.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Detected Intents
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCall.intents.map((intent, index) => (
                    <Badge key={index} variant="info">
                      {intent.replace(/_/g, ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Transcript */}
            {selectedCall.transcript && (
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  Transcript
                </h3>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-sm text-slate-700 leading-relaxed">
                  {selectedCall.transcript}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calls
