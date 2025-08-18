export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white">Check Your Email</h2>
          <p className="text-gray-300">
            We've sent you a verification link. Please check your email and click the link to activate your account.
          </p>
          <div className="pt-4">
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
