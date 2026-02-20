"use client"
import { useState } from 'react';
import { Search, Check, ExternalLink, Settings, ShoppingBag, Package, DollarSign, TrendingUp } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const integrations = [
  {
    id: 1,
    name: 'Shopify',
    category: 'E-commerce',
    description: 'Complete POS integration with product, inventory, and order management',
    logo: '🛍️',
    color: 'from-emerald-500 to-teal-600',
    connected: true,
    status: 'Active',
    features: [
      'POS System Access',
      'Real-time Inventory Sync',
      'Product Catalog Training',
      'Draft Order Creation',
      'Customer Lookup',
      'Payment Processing',
      'Order Status Updates',
      'Returns & Exchanges'
    ],
    advanced: true,
    stats: {
      products: '1,247',
      orders: '3,891',
      revenue: '$124,567'
    }
  },
  {
    id: 2,
    name: 'Salesforce',
    category: 'CRM',
    description: 'Sync customer data and call logs with Salesforce',
    logo: '☁️',
    color: 'from-sky-500 to-blue-600',
    connected: true,
    status: 'Active',
    features: ['Contact sync', 'Call logging', 'Lead creation']
  },
  {
    id: 3,
    name: 'HubSpot',
    category: 'CRM',
    description: 'Integrate with HubSpot CRM and Marketing Hub',
    logo: '🟠',
    color: 'from-orange-500 to-red-600',
    connected: true,
    status: 'Active',
    features: ['Contact sync', 'Deal tracking', 'Email integration']
  },
  {
    id: 4,
    name: 'Slack',
    category: 'Communication',
    description: 'Receive call notifications in Slack channels',
    logo: '💬',
    color: 'from-purple-500 to-pink-600',
    connected: true,
    status: 'Active',
    features: ['Real-time notifications', 'Call summaries', 'Team alerts']
  },
  {
    id: 5,
    name: 'Google Calendar',
    category: 'Scheduling',
    description: 'Automatically create calendar events from bookings',
    logo: '📅',
    color: 'from-blue-400 to-indigo-500',
    connected: false,
    status: 'Available',
    features: ['Auto-scheduling', 'Reminder sync', 'Availability check']
  },
  {
    id: 6,
    name: 'Zendesk',
    category: 'Support',
    description: 'Create support tickets from missed calls',
    logo: '🎫',
    color: 'from-green-500 to-emerald-600',
    connected: false,
    status: 'Available',
    features: ['Ticket creation', 'Customer lookup', 'Call history']
  },
  {
    id: 7,
    name: 'Microsoft Teams',
    category: 'Communication',
    description: 'Send call alerts to Teams channels',
    logo: '👥',
    color: 'from-indigo-500 to-violet-600',
    connected: false,
    status: 'Available',
    features: ['Channel notifications', 'Call forwarding', 'Team collaboration']
  },
  {
    id: 8,
    name: 'Stripe',
    category: 'Payments',
    description: 'Process payments during calls',
    logo: '💳',
    color: 'from-violet-500 to-purple-600',
    connected: false,
    status: 'Available',
    features: ['Payment processing', 'Invoice creation', 'Subscription management']
  },
  {
    id: 9,
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect with 5000+ apps via Zapier',
    logo: '⚡',
    color: 'from-amber-400 to-orange-500',
    connected: false,
    status: 'Available',
    features: ['Custom workflows', 'Data mapping', 'Trigger actions']
  },
  {
    id: 10,
    name: 'Airtable',
    category: 'Database',
    description: 'Log calls and data to Airtable bases',
    logo: '📊',
    color: 'from-yellow-500 to-amber-600',
    connected: false,
    status: 'Available',
    features: ['Database sync', 'Custom fields', 'Automated logging']
  },
  {
    id: 11,
    name: 'WooCommerce',
    category: 'E-commerce',
    description: 'WordPress e-commerce platform integration',
    logo: '🛒',
    color: 'from-purple-600 to-pink-600',
    connected: false,
    status: 'Available',
    features: ['Product sync', 'Order management', 'Customer data']
  },
];

const categories = ['All', 'E-commerce', 'CRM', 'Communication', 'Scheduling', 'Support', 'Payments', 'Automation', 'Database'];

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const shopifyIntegration = integrations.find(i => i.name === 'Shopify');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Integrations</h1>
          <p className="text-slate-600">Connect Project Aura with your favorite tools</p>
        </div>

        {/* Shopify Featured Integration */}
        {shopifyIntegration && (
          <div className="mb-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl shadow-xl">
                    {shopifyIntegration.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">Shopify POS Integration</h2>
                      <div className="px-2 py-1 bg-white rounded-md text-emerald-600 text-xs font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Connected
                      </div>
                    </div>
                    <p className="text-emerald-100 text-sm">Full access to products, inventory, and order creation</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingBag className="w-5 h-5 text-emerald-100" />
                      <span className="text-xs font-medium text-emerald-100 uppercase">Products</span>
                    </div>
                    <p className="text-2xl font-bold">{shopifyIntegration.stats?.products}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-5 h-5 text-emerald-100" />
                      <span className="text-xs font-medium text-emerald-100 uppercase">Orders</span>
                    </div>
                    <p className="text-2xl font-bold">{shopifyIntegration.stats?.orders}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-emerald-100" />
                      <span className="text-xs font-medium text-emerald-100 uppercase">Revenue</span>
                    </div>
                    <p className="text-2xl font-bold">{shopifyIntegration.stats?.revenue}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {shopifyIntegration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-emerald-50">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-80 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  AI Training Status
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-emerald-100">Product Catalog</span>
                      <span className="font-semibold">100%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-emerald-100">Inventory Data</span>
                      <span className="font-semibold">100%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-emerald-100">POS Workflows</span>
                      <span className="font-semibold">100%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    icon={Settings} 
                    className="w-full !bg-white !text-emerald-600 hover:!bg-emerald-50"
                  >
                    Configure Settings
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full !text-white hover:!bg-white/10"
                  >
                    View Integration Logs
                  </Button>
                  <button className="w-full px-4 py-2 text-sm text-white hover:bg-white/10 rounded-lg transition-colors">
                    Retrain AI Model
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search & Filter */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Connected Integrations */}
        {integrations.filter(i => i.connected && i.name !== 'Shopify').length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              Other Connected Integrations ({integrations.filter(i => i.connected && i.name !== 'Shopify').length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations.filter(i => i.connected && i.name !== 'Shopify').map((integration) => (
                <div
                  key={integration.id}
                  className="bg-white rounded-xl border border-slate-200/60 card-shadow hover:shadow-lg transition-all p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {integration.logo}
                    </div>
                    <Badge variant="success" size="sm">
                      <Check className="w-3 h-3" />
                      Active
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-slate-900 mb-1">{integration.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{integration.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {integration.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" icon={Settings} className="flex-1">
                      Configure
                    </Button>
                    <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      Disconnect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Integrations */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Available Integrations ({filteredIntegrations.filter(i => !i.connected).length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIntegrations.filter(i => !i.connected).map((integration) => (
              <div
                key={integration.id}
                className="bg-white rounded-xl border border-slate-200/60 card-shadow hover:shadow-lg transition-all p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {integration.logo}
                  </div>
                  <Badge variant="neutral" size="sm">{integration.category}</Badge>
                </div>
                
                <h3 className="font-semibold text-slate-900 mb-1">{integration.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{integration.description}</p>
                
                <div className="space-y-2 mb-4">
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="primary" size="sm" className="flex-1">
                    Connect
                  </Button>
                  <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-600">No integrations found matching your search</p>
          </div>
        )}

        {/* Request Integration */}
        <div className="mt-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 border border-violet-400/60 text-center shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">Can&apos;t find what you need?</h3>
          <p className="text-violet-100 mb-4">Request a custom integration and we&apos;ll build it for you</p>
          <Button variant="secondary" className="!bg-white !text-violet-600 hover:!bg-violet-50">
            Request Integration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
