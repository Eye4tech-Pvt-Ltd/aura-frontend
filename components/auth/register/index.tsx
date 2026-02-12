"use client"

import { Formik, Form } from "formik"
import { useState } from "react"
import { UserPlus, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { registerSchema } from "@/src/schemas/register"
import { RegisterPayload } from "@/src/types/register"
import useRegister from "@/src/hooks/auth/useRegister"

const RegisterComponent = () => {
  const { register, loadingRegister } = useRegister()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] = useState(false)

  const initialValues: RegisterPayload = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }

  const handleSubmit = async (
    values: RegisterPayload,
    { setSubmitting }: {
      setSubmitting: (isSubmitting: boolean) => void
    }
  ) => {
    try {
      await register(values)
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
            {({ errors, touched, values, handleChange, handleBlur, isSubmitting: formikSubmitting }) => (
              <Form className="space-y-3">
                {/* Name Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    disabled={loadingRegister || formikSubmitting}
                    className={`w-full px-3 py-2 text-base border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      touched.name && errors.name
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-slate-300 focus:ring-primary-500 focus:border-primary-500"
                    } ${loadingRegister || formikSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-sm text-red-600 mt-0.5">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                    disabled={loadingRegister || formikSubmitting}
                    className={`w-full px-3 py-2 text-base border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      touched.email && errors.email
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-slate-300 focus:ring-primary-500 focus:border-primary-500"
                    } ${loadingRegister || formikSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-sm text-red-600 mt-0.5">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordVisible ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your password"
                      disabled={loadingRegister || formikSubmitting}
                      className={`w-full px-3 py-2 pr-10 text-base border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                        touched.password && errors.password
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-slate-300 focus:ring-primary-500 focus:border-primary-500"
                      } ${loadingRegister || formikSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-700 transition-colors"
                      tabIndex={-1}
                    >
                      {isPasswordVisible ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {touched.password && errors.password && (
                    <p className="text-sm text-red-600 mt-0.5">{errors.password}</p>
                  )}
                </div>

                {/* Password Confirmation Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="password_confirmation"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="password_confirmation"
                      name="password_confirmation"
                      type={isPasswordConfirmationVisible ? "text" : "password"}
                      value={values.password_confirmation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Confirm your password"
                      disabled={loadingRegister || formikSubmitting}
                      className={`w-full px-3 py-2 pr-10 text-base border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                        touched.password_confirmation && errors.password_confirmation
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-slate-300 focus:ring-primary-500 focus:border-primary-500"
                      } ${loadingRegister || formikSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-700 transition-colors"
                      tabIndex={-1}
                    >
                      {isPasswordConfirmationVisible ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {touched.password_confirmation && errors.password_confirmation && (
                    <p className="text-sm text-red-600 mt-0.5">{errors.password_confirmation}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formikSubmitting || loadingRegister}
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg active:scale-95 px-4 py-2 text-base"
                >
                  <UserPlus className="w-4 h-4" />
                  {loadingRegister || formikSubmitting ? "Creating account..." : "Sign Up"}
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
              Already have an account?{" "}
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