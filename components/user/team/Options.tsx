import { Trash2, Edit3 } from 'lucide-react'
import React from 'react'

type OptionProps = {
  onEdit: () => void
  onDelete: () => void
}

const Options = ({ onEdit, onDelete }: OptionProps) => {
  const actions = [
    {
      label: 'Edit',
      icon: Edit3,
      onClick: onEdit,
      className: 'hover:bg-gray-100',
    },
    {
      label: 'Delete',
      icon: Trash2,
      onClick: onDelete,
      className: 'hover:bg-gray-100 text-red-500',
    },
  ]

  return (
    <div className="absolute left-7 top-2   w-32 bg-white border rounded-md shadow-lg flex flex-col ">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <button
            key={action.label}
            onClick={action.onClick}
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${action.className}`}
          >
            <Icon size={16} /> {action.label}
          </button>
        )
      })}
    </div>
  )
}

export default Options
