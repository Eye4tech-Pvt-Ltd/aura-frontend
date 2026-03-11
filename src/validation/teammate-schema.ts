import * as Yup from 'yup'
import { emailSchema, roleSchema } from './common-schema'

export const inviteMemberSchema = Yup.object({
  email: emailSchema.required('Email is required'),

  role: roleSchema.required('Role is required'),
})
