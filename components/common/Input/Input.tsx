import { useRef, useEffect } from 'react'
import Label from '../Label'

const Input = ({
  label,
  name,
  placeholder,
  Icon,
  focus,
  type,
  value,
  error,
  handleChange,
  touched,
}: any) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input if "focus" prop is true
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [focus])

  return (
    <div className="flex flex-col gap-1">
      {label && <Label text={label} id={name} />}

      <div
        className={`w-full px-3 py-2 text-base border rounded-lg flex gap-2 items-center transition-all duration-200 ${
          touched && error
            ? 'border-red-500 focus-within:ring-red-500 focus-within:border-red-500'
            : 'border-slate-300 focus-within:ring-primary-500 focus-within:border-primary-500'
        }`}
      >
        {Icon && <Icon size={18} />}
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type || 'text'}
          value={value}
          onChange={handleChange}
          ref={inputRef}
          className="flex-1 outline-none"
        />
      </div>

      {touched && error && (
        <p className="text-red-500 text-sm">{error as string}</p>
      )}
    </div>
  )
}

export default Input
