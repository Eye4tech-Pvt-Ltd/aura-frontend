import * as Yup from 'yup'

export const emailSchema = Yup.string()
  .email('Invalid email format')
  .min(5, 'Email must be at least 5 characters')
  .max(50, 'Email must be at most 50 characters')

export const roleSchema = Yup.string()
  .oneOf(['admin', 'customer'], 'Please select a valid role')
  .required('Role is required')
