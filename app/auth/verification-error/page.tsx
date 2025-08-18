"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function VerificationErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const getErrorMessage = (errorCode: string | null) => {
    switch (errorCode) {
      case "no_code":
        return "No verification code was provided in the link."
      case "no_user_data":
        return "Verification completed but user data is missing."
      case "server_error":
        return "An unexpected server error occurred during verification."
      default:
        return error || "An unknown error occurred during email verification."
    }
  }

  const getErrorSolution = (errorCode: string | null) => {
    switch (errorCode) {
      case "no_code":
        return "Please make sure you clicked the complete verification link from your email."
      case "no_user_data":
        return "Please try signing up again or contact support if the issue persists."
      case "server_error":
        return "Please try the verification link again or contact support."
      default:
        return "Please try signing up again or use a new verification link."
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white">Verification Failed</h2>
          <div className="space-y-3">
            <p className="text-red-300 font-medium">{getErrorMessage(error)}</p>
            <p className="text-gray-300 text-sm">{getErrorSolution(error)}</p>
            {error && <p className="text-xs text-gray-400 bg-gray-800/50 p-2 rounded">Error Code: {error}</p>}
          </div>
          <div className="pt-4 space-y-3">
            <a
              href="/auth/signup"
              className="block bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              Try Signing Up Again
            </a>
            <a href="/" className="block text-gray-300 hover:text-white transition-colors duration-200">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VerificationErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <VerificationErrorContent />
    </Suspense>
  )
}
