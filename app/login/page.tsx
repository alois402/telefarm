"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Eye, EyeOff, CheckCircle } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

type FormErrors = {
  email?: string
  password?: string
  confirmPassword?: string
  firstName?: string
  lastName?: string
  phone?: string
  terms?: string
}

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") === "register" ? "register" : "login")
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [loginErrors, setLoginErrors] = useState<FormErrors>({})
  const [loginSubmitting, setLoginSubmitting] = useState(false)

  // Registration form state
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  })
  const [registerErrors, setRegisterErrors] = useState<FormErrors>({})
  const [registerSubmitting, setRegisterSubmitting] = useState(false)

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginSubmitting(true)
    setLoginErrors({})

    // Validate form
    const errors: FormErrors = {}

    if (!loginForm.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!loginForm.password) {
      errors.password = "Password is required"
    }

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors)
      setLoginSubmitting(false)
      return
    }

    try {
      // Here you would normally make an API call to authenticate the user
      // For demo purposes, we'll simulate a successful login after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful login and redirect
      router.push("/")
    } catch (error) {
      setLoginErrors({
        email: "Invalid email or password. Please try again.",
      })
    } finally {
      setLoginSubmitting(false)
    }
  }

  // Handle registration form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setRegisterSubmitting(true)
    setRegisterErrors({})

    // Validate form
    const errors: FormErrors = {}

    if (!registerForm.firstName) {
      errors.firstName = "First name is required"
    }

    if (!registerForm.lastName) {
      errors.lastName = "Last name is required"
    }

    if (!registerForm.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!registerForm.password) {
      errors.password = "Password is required"
    } else if (registerForm.password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }

    if (!registerForm.confirmPassword) {
      errors.confirmPassword = "Please confirm your password"
    } else if (registerForm.password !== registerForm.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
    }

    if (!registerForm.terms) {
      errors.terms = "You must agree to the Terms of Service and Privacy Policy"
    }

    if (Object.keys(errors).length > 0) {
      setRegisterErrors(errors)
      setRegisterSubmitting(false)
      return
    }

    try {
      // Here you would normally make an API call to register the user
      // For demo purposes, we'll simulate a successful registration after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message and switch to login tab
      setRegistrationSuccess(true)
      setActiveTab("login")

      // Pre-fill the login form with the registered email
      setLoginForm({
        ...loginForm,
        email: registerForm.email,
      })

      // Reset registration form
      setRegisterForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
      })
    } catch (error) {
      setRegisterErrors({
        email: "An error occurred during registration. Please try again.",
      })
    } finally {
      setRegisterSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <div className="w-full max-w-md">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login to Telefarm</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>

              {registrationSuccess && (
                <div className="mx-6 mb-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Registration successful!</p>
                    <p className="text-xs text-green-700">Please login with your new account.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="name@example.com"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className={loginErrors.email ? "border-red-500" : ""}
                    />
                    {loginErrors.email && <p className="text-xs text-red-500 mt-1">{loginErrors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        className={loginErrors.password ? "border-red-500" : ""}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </div>
                    {loginErrors.password && <p className="text-xs text-red-500 mt-1">{loginErrors.password}</p>}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        checked={loginForm.rememberMe}
                        onChange={(e) => setLoginForm({ ...loginForm, rememberMe: e.target.checked })}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-500">
                      Forgot password?
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={loginSubmitting}>
                    {loginSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>Join Telefarm to access smart agricultural solutions</CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={registerForm.firstName}
                        onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })}
                        className={registerErrors.firstName ? "border-red-500" : ""}
                      />
                      {registerErrors.firstName && (
                        <p className="text-xs text-red-500 mt-1">{registerErrors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={registerForm.lastName}
                        onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })}
                        className={registerErrors.lastName ? "border-red-500" : ""}
                      />
                      {registerErrors.lastName && (
                        <p className="text-xs text-red-500 mt-1">{registerErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="name@example.com"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      className={registerErrors.email ? "border-red-500" : ""}
                    />
                    {registerErrors.email && <p className="text-xs text-red-500 mt-1">{registerErrors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+255 123 456 789"
                      value={registerForm.phone}
                      onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                      className={registerErrors.phone ? "border-red-500" : ""}
                    />
                    {registerErrors.phone && <p className="text-xs text-red-500 mt-1">{registerErrors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                        className={registerErrors.password ? "border-red-500" : ""}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </div>
                    {registerErrors.password && <p className="text-xs text-red-500 mt-1">{registerErrors.password}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      className={registerErrors.confirmPassword ? "border-red-500" : ""}
                    />
                    {registerErrors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1">{registerErrors.confirmPassword}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={registerForm.terms}
                      onChange={(e) => setRegisterForm({ ...registerForm, terms: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <Label htmlFor="terms" className={`text-sm ${registerErrors.terms ? "text-red-500" : ""}`}>
                      I agree to the{" "}
                      <Link href="/terms" className="text-green-600 hover:text-green-500">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-green-600 hover:text-green-500">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  {registerErrors.terms && <p className="text-xs text-red-500 mt-1">{registerErrors.terms}</p>}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={registerSubmitting}>
                    {registerSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
