import React from 'react'
import Input from './Input'
import { useFormikContext } from 'formik'

const EmailInput = ({ icon, focus }: { icon: any; focus: boolean }) => {
  const { values, handleChange, errors, touched } = useFormikContext<any>()
  const name = 'email'

  return (
    <Input
      
      name={name}
      type="email"
      label="Email Address"
      placeholder="colleague@company.com"
      Icon={icon}
      focus={true}
      value={values?.[name]}
      touched={touched?.[name]}
      handleChange={handleChange}
      error={errors?.[name]}
    />
  )
}

export default EmailInput
