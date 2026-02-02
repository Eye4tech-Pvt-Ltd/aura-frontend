import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
}

export default function KPICard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon,
  iconColor = 'text-white',
  iconBg = 'bg-gradient-to-br from-primary-400 to-primary-600'
}: KPICardProps) {
  const changeColorClass = {
    positive: 'text-accent-green-700 bg-accent-green-50 border border-accent-green-200',
    negative: 'text-accent-red-700 bg-accent-red-50 border border-accent-red-200',
    neutral: 'text-slate-700 bg-slate-100 border border-slate-200'
  }[changeType];

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-md hover:shadow-lg transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${iconBg} group-hover:scale-110 transition-transform duration-200 shadow-md`}>
          <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={2.5} />
        </div>
        {change && (
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${changeColorClass}`}>
            {change}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
        <p className="text-3xl font-bold text-slate-900 tracking-tight">{value}</p>
      </div>
    </div>
  );
}
