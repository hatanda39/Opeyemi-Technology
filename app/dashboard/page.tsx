import { getCurrentUser, signOut } from "@/lib/auth-actions"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome, {user.profile?.full_name || user.email}!
                </h1>
                <p className="text-gray-300">Manage your account and view your activities</p>
              </div>
              <form action={signOut}>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </form>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Account Information</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                  <p>
                    <span className="font-medium">Name:</span> {user.profile?.full_name || "Not set"}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> {user.profile?.phone || "Not set"}
                  </p>
                  <p>
                    <span className="font-medium">Role:</span> {user.profile?.role || "User"}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center transition-colors"
                  >
                    Back to Website
                  </a>
                  {user.profile?.role === "admin" && (
                    <a
                      href="/admin"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-center transition-colors"
                    >
                      Admin Dashboard
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
