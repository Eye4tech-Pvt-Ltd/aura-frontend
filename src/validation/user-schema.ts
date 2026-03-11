import * as Yup from 'yup'
import { emailSchema, passwordSchema } from './common-schema'

// Login validation schema
export const loginSchema = Yup.object().shape({
  email: emailSchema.required('Email is required'),
  password: passwordSchema.required('Password is required'),
})
