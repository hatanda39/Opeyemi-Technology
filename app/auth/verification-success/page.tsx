export default function VerificationSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white">Email Verified!</h2>
          <p className="text-gray-300">
            Your email has been successfully verified. You can now access your account and all features.
          </p>
          <div className="pt-4 space-y-3">
            <a
              href="/dashboard"
              className="block bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              Go to Dashboard
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
