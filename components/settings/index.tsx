"use client"
import { useState } from 'react';
import { 
  Building, 
  Bell, 
  Phone, 
  Palette, 
  Lock, 
  Database,
  Upload,
  Moon,
  Sun,
  Download
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('business');
  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    { id: 'business', label: 'Business Info', icon: Building },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'calls', label: 'Call Settings', icon: Phone },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'data', label: 'Data & Privacy', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/30 to-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
          <p className="text-slate-600">Manage your account and workspace preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-2">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-slate-200/60 card-shadow">
              {/* Business Info */}
              {activeTab === 'business' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Business Information</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Acme Corporation"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Industry
                        </label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300">
                          <option>Healthcare</option>
                          <option>Retail</option>
                          <option>Finance</option>
                          <option>Technology</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Business Email
                      </label>
                      <input
                        type="email"
                        defaultValue="hello@acmecorp.com"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Business Address
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="123 Business Ave, San Francisco, CA 94105"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          defaultValue="https://acmecorp.com"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <Button variant="primary">Save Changes</Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Email Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { label: 'New calls received', desc: 'Get notified when a new call comes in' },
                          { label: 'Missed calls', desc: 'Alert when a call is missed' },
                          { label: 'Weekly summary', desc: 'Receive weekly performance reports' },
                          { label: 'Billing updates', desc: 'Payment and invoice notifications' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-slate-900">{item.label}</p>
                              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer ml-4">
                              <input type="checkbox" defaultChecked className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">In-App Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Desktop notifications', desc: 'Show browser notifications' },
                          { label: 'Sound alerts', desc: 'Play sound for new calls' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-slate-900">{item.label}</p>
                              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer ml-4">
                              <input type="checkbox" defaultChecked className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <Button variant="primary">Save Preferences</Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Call Settings */}
              {activeTab === 'calls' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Call Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Recording</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">Record all calls</p>
                            <p className="text-sm text-slate-600 mt-1">Automatically record inbound and outbound calls</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Business Hours
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-slate-600 mb-1">Start Time</label>
                          <input
                            type="time"
                            defaultValue="09:00"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-600 mb-1">End Time</label>
                          <input
                            type="time"
                            defaultValue="18:00"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Time Zone
                      </label>
                      <select className="w-full px-4 py-2 border border-slate-200 rounded-lg">
                        <option>Pacific Time (PT)</option>
                        <option>Eastern Time (ET)</option>
                        <option>Central Time (CT)</option>
                        <option>Mountain Time (MT)</option>
                      </select>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <Button variant="primary">Save Settings</Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Branding */}
              {activeTab === 'branding' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Branding & Appearance</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company Logo
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          AC
                        </div>
                        <div>
                          <Button variant="secondary" size="sm" icon={Upload}>
                            Upload Logo
                          </Button>
                          <p className="text-xs text-slate-600 mt-2">PNG, JPG up to 2MB</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Brand Color
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          defaultValue="#0ea5e9"
                          className="w-16 h-16 rounded-lg border-2 border-slate-200 cursor-pointer"
                        />
                        <div>
                          <input
                            type="text"
                            defaultValue="#0ea5e9"
                            className="px-4 py-2 border border-slate-200 rounded-lg font-mono text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Theme
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => setDarkMode(false)}
                          className={`p-4 border-2 rounded-lg transition-all ${
                            !darkMode ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <Sun className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                          <p className="font-medium text-slate-900">Light</p>
                        </button>
                        <button 
                          onClick={() => setDarkMode(true)}
                          className={`p-4 border-2 rounded-lg transition-all ${
                            darkMode ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <Moon className="w-6 h-6 mx-auto mb-2 text-slate-700" />
                          <p className="font-medium text-slate-900">Dark</p>
                        </button>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <Button variant="primary">Save Branding</Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security */}
              {activeTab === 'security' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Password</h3>
                      <div className="space-y-4">
                        <input
                          type="password"
                          placeholder="Current password"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                        />
                        <input
                          type="password"
                          placeholder="New password"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                        />
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                        />
                        <Button variant="primary" size="sm">Update Password</Button>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">Enable 2FA</p>
                          <p className="text-sm text-slate-600 mt-1">Add an extra layer of security</p>
                        </div>
                        <Badge variant="neutral" size="sm">Not Enabled</Badge>
                      </div>
                      <Button variant="secondary" size="sm" className="mt-4">Set Up 2FA</Button>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-4">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">Chrome on MacOS</p>
                            <p className="text-sm text-slate-600">San Francisco, CA • Active now</p>
                          </div>
                          <Badge variant="success" size="sm">Current</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Data & Privacy */}
              {activeTab === 'data' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Data & Privacy</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Data Retention</h3>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Call Recording Retention
                        </label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg">
                          <option>30 days</option>
                          <option>90 days</option>
                          <option>1 year</option>
                          <option>Forever</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-4">Export Data</h3>
                      <p className="text-sm text-slate-600 mb-4">Download all your data in JSON format</p>
                      <Button variant="secondary" icon={Download}>
                        Export All Data
                      </Button>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-2 text-red-600">Danger Zone</h3>
                      <div className="p-4 border-2 border-red-200 bg-red-50 rounded-lg">
                        <p className="font-medium text-slate-900 mb-2">Delete Workspace</p>
                        <p className="text-sm text-slate-600 mb-4">
                          Permanently delete this workspace and all associated data. This action cannot be undone.
                        </p>
                        <Button variant="danger" size="sm">
                          Delete Workspace
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
