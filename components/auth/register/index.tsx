'use client'

import { Formik, Form } from 'formik'
import { useState } from 'react'
import { UserPlus, Eye, EyeOff, Mail, Lock, User } from 'lucide-react'
import Link from 'next/link'
import { registerSchema } from '@/src/schemas/register'
import { RegisterPayload } from '@/src/types/register'
import useRegister from '@/src/hooks/auth/useRegister'
import EmailInput from '@/components/common/Input/EmailInput'
import PasswordInput from '@/components/common/Input/PasswordInput'
import TextInput from '@/components/common/Input/TextInput'

const RegisterComponent = () => {
  const { register, loadingRegister, data } = useRegister()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false)

  const initialValues: RegisterPayload = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const handleSubmit = async (
    values: RegisterPayload,
    {
      setSubmitting,
    }: {
      setSubmitting: (isSubmitting: boolean) => void
    }
  ) => {
    try {
      await register(values)
      console.log('Registration successful:', data)
    } catch (error: any) {
      console.error('Registration error:', error?.response)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="h-screen flex items-center justify-center px-4 py-4 bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-100 overflow-y-auto">
      <div className="w-full max-w-md my-auto">
        {/* Card Container */}
        <div className="glass-effect rounded-2xl p-6 card-shadow-lg">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-2 shadow-lg">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">
              Create Account
            </h1>
            <p className="text-slate-600 text-sm">
              Sign up to get started with your account
            </p>
          </div>

          {/* Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              touched,
              values,
              handleChange,
              handleBlur,
              isSubmitting: formikSubmitting,
            }) => (
              <Form className="space-y-3">
                {/* Name Field */}

                <TextInput
                  name="name"
                  placeHolder="Enter your Name"
                  label="Full Name"
                  icon={User}
                />

                {/* Email Field */}

                <EmailInput icon={Mail} focus={true} />

                {/* Password Field */}

                <PasswordInput
                  name="password"
                  icon={Lock}
                  toggle={() => setIsPasswordVisible(!isPasswordVisible)}
                  placeHolder="Enter Password"
                  visible={isPasswordVisible}
                />
                <PasswordInput
                  name="password_confirmation"
                  icon={Lock}
                  toggle={() =>
                    setIsPasswordConfirmationVisible(
                      !isPasswordConfirmationVisible
                    )
                  }
                  placeHolder="Confirm your password Password"
                  visible={isPasswordConfirmationVisible}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formikSubmitting || loadingRegister}
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg active:scale-95 px-4 py-2 text-base"
                >
                  <UserPlus className="w-4 h-4" />
                  {loadingRegister || formikSubmitting
                    ? 'Creating account...'
                    : 'Sign Up'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Divider */}
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or</span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-3">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default RegisterComponent
