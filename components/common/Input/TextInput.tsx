import React, { useRef, useEffect } from 'react'
import Input from './Input'
import { useFormikContext } from 'formik'
import { Eye, EyeOff } from 'lucide-react'

const TextInput = ({
  icon,
  focus = false,

  placeHolder,

  name,
  label,
}: {
  label: string
  name: string

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
    <Input
      name={name}
      type={'text'}
      label={label}
      placeholder={placeHolder}
      Icon={icon}
      focus={false} // handled by ref
      value={values?.[name] || ''}
      touched={touched?.[name]}
      handleChange={handleChange}
      error={errors?.[name]}
      inputRef={inputRef} // pass ref to Input
    />
  )
}

export default TextInput
