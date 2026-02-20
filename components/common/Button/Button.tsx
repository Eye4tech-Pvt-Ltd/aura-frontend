import React, { useEffect } from 'react'

const Button = ({
  children,
  click,
  className,
  disabled,
}: {
  children: any
  click: () => void
  className?: string
  disabled?: boolean
}) => {
  return (
    <button
      onClick={click}
      className={`${className}  cursor-pointer  flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm  px-2 py-1 focus:outline-none`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
