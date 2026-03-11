import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  type?: 'button' | 'submit' | 'reset'
  iconPosition?: 'left' | 'right'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg active:scale-95',
    secondary:
      'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 hover:border-slate-300',
    ghost: 'text-slate-700 hover:bg-slate-100',
    danger:
      'bg-gradient-to-r from-accent-red-500 to-accent-red-600 text-white hover:from-accent-red-600 hover:to-accent-red-700 shadow-md hover:shadow-lg active:scale-95',
  }[variant]

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size]

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  )
}
