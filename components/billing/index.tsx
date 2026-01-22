"use client"
import { Download, CreditCard, Check, AlertCircle, Calendar } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const plans = [
  {
    name: 'Starter',
    price: 49,
    period: 'month',
    description: 'Perfect for small businesses',
    features: [
      '500 calls/month',
      '1 phone number',
      '1 AI agent',
      'Basic analytics',
      'Email support'
    ],
    current: false
  },
  {
    name: 'Pro',
    price: 149,
    period: 'month',
    description: 'For growing businesses',
    features: [
      '2,000 calls/month',
      '5 phone numbers',
      '3 AI agents',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Flow builder'
    ],
    current: true,
    popular: true
  },
  {
    name: 'Business',
    price: 399,
    period: 'month',
    description: 'For enterprise teams',
    features: [
      'Unlimited calls',
      'Unlimited numbers',
      'Unlimited agents',
      'Advanced analytics',
      '24/7 phone support',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee'
    ],
    current: false
  },
];

const invoices = [
  { id: 'INV-2024-001', date: 'Jan 15, 2024', amount: 149.00, status: 'paid', plan: 'Pro Plan' },
  { id: 'INV-2023-012', date: 'Dec 15, 2023', amount: 149.00, status: 'paid', plan: 'Pro Plan' },
  { id: 'INV-2023-011', date: 'Nov 15, 2023', amount: 149.00, status: 'paid', plan: 'Pro Plan' },
  { id: 'INV-2023-010', date: 'Oct 15, 2023', amount: 149.00, status: 'paid', plan: 'Pro Plan' },
];

const usageData = [
  { metric: 'Calls This Month', current: 1247, limit: 2000, unit: 'calls' },
  { metric: 'Phone Numbers', current: 3, limit: 5, unit: 'numbers' },
  { metric: 'AI Agents', current: 1, limit: 3, unit: 'agents' },
  { metric: 'Team Members', current: 4, limit: 10, unit: 'seats' },
];

const Billing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Billing & Usage</h1>
          <p className="text-slate-600">Manage your subscription and billing information</p>
        </div>

        {/* Current Plan */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 mb-8 text-white card-shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <Badge variant="success" size="sm">Current Plan</Badge>
              <h2 className="text-3xl font-bold mt-3 mb-2">Pro Plan</h2>
              <p className="text-primary-100">$149/month • Renews on Feb 15, 2024</p>
            </div>
            <Button variant="secondary" size="sm">
              Change Plan
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {usageData.map((item, idx) => {
              const percentage = (item.current / item.limit) * 100;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <p className="text-primary-100 text-sm mb-2">{item.metric}</p>
                  <p className="text-2xl font-bold mb-2">
                    {item.current} <span className="text-lg text-primary-200">/ {item.limit}</span>
                  </p>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Payment Method */}
          <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Payment Method</h3>
              <Button variant="ghost" size="sm">
                Update
              </Button>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg text-white mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs opacity-70">Credit Card</div>
                <CreditCard className="w-8 h-8 opacity-50" />
              </div>
              <div className="text-lg font-mono tracking-wider mb-3">•••• •••• •••• 4242</div>
              <div className="flex items-center justify-between text-xs">
                <span>JOHN DOE</span>
                <span>12/25</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Autopay enabled</span>
            </div>
          </div>

          {/* Next Invoice */}
          <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-slate-900">Next Invoice</h3>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Pro Plan</span>
                <span className="font-semibold text-slate-900">$149.00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Additional calls</span>
                <span className="font-semibold text-slate-900">$0.00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Tax (8%)</span>
                <span className="font-semibold text-slate-900">$11.92</span>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="text-xl font-bold text-slate-900">$160.92</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
              <AlertCircle className="w-4 h-4" />
              <span>Due on February 15, 2024</span>
            </div>
          </div>

          {/* Billing Info */}
          <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Billing Information</h3>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-600 mb-1">Company</p>
                <p className="font-medium text-slate-900">Acme Corporation</p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">Email</p>
                <p className="font-medium text-slate-900">billing@acmecorp.com</p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">Address</p>
                <p className="font-medium text-slate-900">
                  123 Business Ave<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">Tax ID</p>
                <p className="font-medium text-slate-900">XX-XXXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border-2 p-6 transition-all ${
                  plan.current
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="mb-3"><Badge variant="info" size="sm">Most Popular</Badge></div>
                )}
                {plan.current && (
                  <div className="mb-3"><Badge variant="success" size="sm">Current Plan</Badge></div>
                )}
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-600">/{plan.period}</span>
                </div>

                <Button 
                  variant={plan.current ? 'secondary' : 'primary'} 
                  className="w-full mb-6"
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white rounded-xl border border-slate-200/60 card-shadow">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Invoice History</h2>
              <Button variant="ghost" size="sm" icon={Download}>
                Download All
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-medium text-slate-900">{invoice.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {invoice.plan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">
                      ${invoice.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="success" size="sm">Paid</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Button variant="ghost" size="sm" icon={Download}>
                        PDF
                      </Button>
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
};

export default Billing;
