import React from 'react'

const Label = ({ id, text }: { id: string; text: string }) => {
  return (
    <label
      htmlFor={id}
      className="cursor-pointer block text-sm font-medium text-slate-700"
    >
      {text}
    </label>
  )
}

export default Label
