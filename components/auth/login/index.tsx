"use client"

import { Formik, Form } from "formik"
import { useState } from "react"
import { LogIn, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { loginSchema } from "@/src/schemas/login"
import { LoginPayload } from "@/src/types/login"
import useLogin from "@/src/hooks/auth/useLogin"

const LoginComponent = () => {
  const { login, loadingLogin } = useLogin()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const initialValues: LoginPayload = {
    email: "",
    password: "",
  }

  const handleSubmit = async (
    values: LoginPayload,
    { setSubmitting }: {
      setSubmitting: (isSubmitting: boolean) => void
    }
  ) => {
    try {
      await login(values)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="h-screen flex items-center justify-center px-4 py-4 bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-100">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="glass-effect rounded-2xl p-6 card-shadow-lg">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-2 shadow-lg">
              <LogIn className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">
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
            {({ errors, touched, values, handleChange, handleBlur, isSubmitting: formikSubmitting }) => (
              <Form className="space-y-3">
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
                    disabled={loadingLogin || formikSubmitting}
                    className={`w-full px-3 py-2 text-base border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      touched.email && errors.email
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-slate-300 focus:ring-primary-500 focus:border-primary-500"
                    } ${loadingLogin || formikSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
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
                      disabled={loadingLogin || formikSubmitting}
                      className={`w-full px-3 py-2 pr-10 text-base border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                        touched.password && errors.password
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-slate-300 focus:ring-primary-500 focus:border-primary-500"
                      } ${loadingLogin || formikSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
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

                {/* Forgot Password Link */}
                <div className="flex items-center justify-end -mt-1">
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
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg active:scale-95 px-4 py-2 text-base"
                >
                  <LogIn className="w-4 h-4" />
                  {loadingLogin || formikSubmitting ? "Signing in..." : "Sign In"}
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
        <p className="text-center text-sm text-slate-500 mt-3">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default LoginComponent