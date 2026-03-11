import React, { useRef, useEffect } from 'react'
import Input from './Input'
import { useFormikContext } from 'formik'
import { Eye, EyeOff } from 'lucide-react'

const PasswordInput = ({
  icon,
  focus = false,
  visible,
  placeHolder,
  toggle,
  name,
}: {
  visible: boolean
  name: string
  toggle: () => void
  icon: any
  placeHolder: string
  focus?: boolean
}) => {
  const { values, handleChange, errors, touched } = useFormikContext<any>()

  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the input if "focus" prop is true
  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [focus])

  return (
    <div className="relative">
      <Input
        name={name}
        type={visible ? 'text' : 'password'}
        label="Password"
        placeholder={placeHolder}
        Icon={icon}
        focus={false} // handled by ref
        value={values?.[name] || ''}
        touched={touched?.[name]}
        handleChange={handleChange}
        error={errors?.[name]}
        inputRef={inputRef} // pass ref to Input
      />

      <button
        type="button"
        onClick={toggle}
        className="absolute right-3 top-[38px] text-slate-500 hover:text-slate-700 transition-colors"
        tabIndex={-1}
      >
        {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  )
}

export default PasswordInput
