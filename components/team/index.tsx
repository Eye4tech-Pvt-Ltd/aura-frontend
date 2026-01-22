"use client"
import { useState } from 'react';
import { UserPlus, Mail, Shield, Crown, User, MoreVertical, Search } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const teamMembers = [
  { 
    id: 1, 
    name: 'John Doe', 
    email: 'john@acmecorp.com', 
    role: 'Owner',
    avatar: 'JD',
    status: 'active',
    lastActive: '2 hours ago',
    callsHandled: 0
  },
  { 
    id: 2, 
    name: 'Sarah Johnson', 
    email: 'sarah@acmecorp.com', 
    role: 'Admin',
    avatar: 'SJ',
    status: 'active',
    lastActive: '5 minutes ago',
    callsHandled: 12
  },
  { 
    id: 3, 
    name: 'Michael Chen', 
    email: 'michael@acmecorp.com', 
    role: 'Agent',
    avatar: 'MC',
    status: 'active',
    lastActive: '1 hour ago',
    callsHandled: 45
  },
  { 
    id: 4, 
    name: 'Emma Williams', 
    email: 'emma@acmecorp.com', 
    role: 'Agent',
    avatar: 'EW',
    status: 'inactive',
    lastActive: '2 days ago',
    callsHandled: 23
  },
];

const roles = [
  { 
    name: 'Owner', 
    description: 'Full access to all features and settings',
    permissions: ['Manage billing', 'Delete workspace', 'Invite members', 'Manage AI agents', 'View analytics'],
    icon: Crown,
    color: 'text-accent-orange-600 bg-gradient-to-br from-accent-orange-400 to-accent-orange-600'
  },
  { 
    name: 'Admin', 
    description: 'Manage team and AI agent settings',
    permissions: ['Invite members', 'Manage AI agents', 'View analytics', 'Edit flows'],
    icon: Shield,
    color: 'text-primary-600 bg-gradient-to-br from-primary-400 to-primary-600'
  },
  { 
    name: 'Agent', 
    description: 'Handle calls and view reports',
    permissions: ['Handle calls', 'View analytics', 'Update knowledge base'],
    icon: User,
    color: 'text-slate-600 bg-gradient-to-br from-slate-400 to-slate-600'
  },
];

const Team = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Team Management</h1>
              <p className="text-slate-600">Manage team members and permissions</p>
            </div>
            <Button variant="primary" icon={UserPlus} onClick={() => setShowInviteModal(!showInviteModal)}>
              Invite Member
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Team Members */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200/60 shadow-md">
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-slate-900">Team Members ({teamMembers.length})</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search members..."
                      className="pl-9 pr-3 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                {teamMembers.map((member) => {
                  const roleInfo = roles.find(r => r.name === member.role);
                  const RoleIcon = roleInfo?.icon || User;
                  
                  return (
                    <div key={member.id} className="p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold shadow-md">
                            {member.avatar}
                          </div>
                          {member.status === 'active' && (
                            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-accent-green-500 rounded-full border-2 border-white"></span>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-slate-900">{member.name}</h3>
                            <div className={`p-1 rounded ${roleInfo?.color} shadow-sm`}>
                              <RoleIcon className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{member.email}</p>
                          
                          <div className="flex items-center gap-4 text-xs text-slate-600">
                            <Badge variant={member.status === 'active' ? 'success' : 'neutral'} size="sm">
                              {member.role}
                            </Badge>
                            <span>Last active: {member.lastActive}</span>
                            <span>Calls: {member.callsHandled}</span>
                          </div>
                        </div>

                        <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {showInviteModal && (
              <div className="bg-white rounded-xl border border-slate-200/60 shadow-md p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Invite New Member</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="colleague@company.com"
                        className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300">
                      <option>Admin</option>
                      <option>Agent</option>
                    </select>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="primary" className="flex-1">
                      Send Invitation
                    </Button>
                    <Button variant="ghost" onClick={() => setShowInviteModal(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Roles & Permissions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200/60 shadow-md p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Roles & Permissions</h3>
              
              <div className="space-y-4">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <div key={role.name} className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-1.5 rounded ${role.color} shadow-md`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-slate-900">{role.name}</span>
                      </div>
                      <p className="text-xs text-slate-600 mb-3">{role.description}</p>
                      <div className="space-y-1">
                        {role.permissions.map((perm, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <div className="w-1 h-1 rounded-full bg-primary-500"></div>
                            <span>{perm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-2">Team Plan</h3>
              <p className="text-sm text-slate-600 mb-4">
                Pro Plan - 4 of 10 seats used
              </p>
              <div className="h-2 bg-white/60 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
