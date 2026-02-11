"use client"

import { Formik, Form, Field } from "formik"
import { useState } from "react"
import { LogIn } from "lucide-react"
import Link from "next/link"
import Input from "../common/Input"
import useLogin from "@/src/hooks/useLogin"
import { loginSchema } from "@/src/schemas/login"

interface LoginFormValues {
  email: string
  password: string
}

const LoginComponent = () => {
  const { login, loadingLogin } = useLogin()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  }

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: {
      setSubmitting: (isSubmitting: boolean) => void
    }
  ) => {
    try {
      await login({ email: values.email, password: values.password })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-100">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="glass-effect rounded-2xl p-8 card-shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-4 shadow-lg">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-600 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting: formikSubmitting }) => (
              <Form className="space-y-5">
                {/* Email Field */}
                <Field name="email">
                  {({
                    field,
                  }: {
                    field: {
                      name: string
                      value: string
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
                      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
                    }
                  }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="Enter your email"
                      error={
                        touched.email && errors.email ? errors.email : undefined
                      }
                      className="w-full"
                      disabled={loadingLogin || formikSubmitting}
                    />
                  )}
                </Field>

                {/* Password Field */}
                <Field name="password">
                  {({
                    field,
                  }: {
                    field: {
                      name: string
                      value: string
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
                      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
                    }
                  }) => (
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="Enter your password"
                      error={
                        touched.password && errors.password
                          ? errors.password
                          : undefined
                      }
                      showPasswordToggle
                      isPasswordVisible={isPasswordVisible}
                      onTogglePassword={() =>
                        setIsPasswordVisible(!isPasswordVisible)
                      }
                      className="w-full"
                      disabled={loadingLogin || formikSubmitting}
                    />
                  )}
                </Field>

                {/* Forgot Password Link */}
                <div className="flex items-center justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formikSubmitting || loadingLogin}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg active:scale-95 px-6 py-3 text-base"
                >
                  <LogIn className="w-4 h-4" />
                  {loadingLogin || formikSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </Form>
            )}
          </Formik>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or</span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default LoginComponent