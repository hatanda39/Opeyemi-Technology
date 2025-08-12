"use client"

import { Input } from "@/components/ui/input"
import { Mail, Phone } from "lucide-react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  BookOpen,
  Calendar,
  LogOut,
  FileText,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react"

// Mock data for demonstration - in a real app, this would come from a database
interface ActionLog {
  id: string
  candidateId: number
  candidateName: string
  candidateEmail: string
  candidatePhone: string
  candidateAddress: string
  serviceOrCourse: string
  enrollmentDate: string
  action: string
  actionDate: string
  actionTime: string
  details: string
  paymentStatus?: string
  performedBy: string
}

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [applications, setApplications] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [actionLogs, setActionLogs] = useState([])
  const [currentView, setCurrentView] = useState("applications")
  const [historySearchTerm, setHistorySearchTerm] = useState("")
  const [historyFilterCourse, setHistoryFilterCourse] = useState("All")
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("adminAuthenticated")
      if (!authStatus) {
        router.push("/admin/login")
        return
      }

      setIsAuthenticated(true)

      const loadData = () => {
        // Load enrollments from localStorage or API
        const enrollments = JSON.parse(localStorage.getItem("enrollments") || "[]")
        const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")

        // Combine enrollments and bookings into applications
        const combinedApplications = [
          ...enrollments.map((enrollment) => ({
            id: `enrollment_${enrollment.id || Date.now()}`,
            fullName: enrollment.fullName,
            email: enrollment.email,
            phone: enrollment.phone,
            course: enrollment.course,
            address: enrollment.address,
            type: "Course Enrollment",
            status: enrollment.status || "Pending",
            paymentStatus: enrollment.paymentStatus || "Pending",
            appliedDate: enrollment.appliedDate || new Date().toLocaleDateString(),
            appliedTime: enrollment.appliedTime || new Date().toLocaleTimeString(),
          })),
          ...bookings.map((booking) => ({
            id: `booking_${booking.id || Date.now()}`,
            fullName: booking.fullName,
            email: booking.email,
            phone: booking.phone,
            course: booking.serviceType,
            address: booking.address,
            type: "Service Booking",
            status: booking.status || "Pending",
            paymentStatus: booking.paymentStatus || "Pending",
            appliedDate: booking.appliedDate || new Date().toLocaleDateString(),
            appliedTime: booking.appliedTime || new Date().toLocaleTimeString(),
          })),
        ]

        setApplications(combinedApplications)

        // Load action logs
        const logs = JSON.parse(localStorage.getItem("actionLogs") || "[]")
        setActionLogs(logs)
      }

      loadData()
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-600 border-t-blue-500 mx-auto mb-6"></div>
            <div
              className="absolute inset-0 rounded-full h-16 w-16 border-4 border-transparent border-t-green-500 animate-spin mx-auto"
              style={{ animationDelay: "0.5s", animationDuration: "1.5s" }}
            ></div>
          </div>
          <p className="text-slate-300 text-lg font-medium">Loading admin dashboard...</p>
          <p className="text-slate-500 text-sm mt-2">Preparing your workspace</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const saveActionLog = (log) => {
    const timestamp = new Date().getTime()
    const logKey = `adminLog_${timestamp}`
    const updatedLogs = [...actionLogs, { ...log, logId: logKey }]
    setActionLogs(updatedLogs)

    localStorage.setItem("newAdminLogs", JSON.stringify(updatedLogs))
    localStorage.setItem(logKey, JSON.stringify(log))
  }

  const sendNotification = async (candidate, action) => {
    try {
      const response = await fetch("/api/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: candidate.email,
          candidateName: candidate.fullName,
          action: action,
          course: candidate.course,
        }),
      })

      if (response.ok) {
        console.log("Notification sent successfully")
      }
    } catch (error) {
      console.error("Failed to send notification:", error)
    }
  }

  const handleApprove = (applicationId) => {
    const updatedApplications = applications.map((app) =>
      app.id === applicationId ? { ...app, status: "Approved", paymentStatus: "Paid" } : app,
    )
    setApplications(updatedApplications)

    // Save back to appropriate storage
    const enrollments = updatedApplications.filter((app) => app.type === "Course Enrollment")
    const bookings = updatedApplications.filter((app) => app.type === "Service Booking")

    localStorage.setItem("enrollments", JSON.stringify(enrollments))
    localStorage.setItem("bookings", JSON.stringify(bookings))

    const application = applications.find((app) => app.id === applicationId)
    const log = {
      id: Date.now(),
      candidateName: application.fullName,
      candidateEmail: application.email,
      course: application.course,
      action: "Approved",
      actionDate: new Date().toLocaleDateString(),
      actionTime: new Date().toLocaleTimeString(),
      details: `Application approved for ${application.course}. Payment status updated to Paid.`,
      paymentStatus: "Paid",
    }

    saveActionLog(log)
  }

  const handleReject = (applicationId) => {
    const updatedApplications = applications.map((app) =>
      app.id === applicationId ? { ...app, status: "Rejected" } : app,
    )
    setApplications(updatedApplications)

    // Save back to appropriate storage
    const enrollments = updatedApplications.filter((app) => app.type === "Course Enrollment")
    const bookings = updatedApplications.filter((app) => app.type === "Service Booking")

    localStorage.setItem("enrollments", JSON.stringify(enrollments))
    localStorage.setItem("bookings", JSON.stringify(bookings))

    const application = applications.find((app) => app.id === applicationId)
    const log = {
      id: Date.now(),
      candidateName: application.fullName,
      candidateEmail: application.email,
      course: application.course,
      action: "Rejected",
      actionDate: new Date().toLocaleDateString(),
      actionTime: new Date().toLocaleTimeString(),
      details: `Application rejected for ${application.course}. Reason: Did not meet requirements.`,
      paymentStatus: application.paymentStatus,
    }

    saveActionLog(log)
  }

  const updatePaymentStatus = (id, status) => {
    const candidate = applications.find((app) => app.id === id)
    if (!candidate) return

    const updatedApplications = applications.map((app) => (app.id === id ? { ...app, paymentStatus: status } : app))
    setApplications(updatedApplications)

    const actionLog = {
      id: Date.now().toString(),
      candidateId: id,
      candidateName: candidate.fullName,
      candidateEmail: candidate.email,
      candidatePhone: candidate.phone,
      candidateAddress: candidate.address,
      serviceOrCourse: candidate.course,
      enrollmentDate: candidate.appliedDate,
      action: "Payment Status Updated",
      actionDate: new Date().toLocaleDateString(),
      actionTime: new Date().toLocaleTimeString(),
      details: `Payment status changed to ${status}`,
      paymentStatus: status,
      performedBy: "Admin",
    }

    saveActionLog(actionLog)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    localStorage.removeItem("newAdminLogs")
    const keys = Object.keys(localStorage).filter((key) => key.startsWith("adminLog_"))
    keys.forEach((key) => localStorage.removeItem(key))
    router.push("/admin/login")
  }

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Name,Email,Phone,Course,Action,Date,Time,Details\n" +
      actionLogs
        .map(
          (log) =>
            `${log.candidateName},${log.candidateEmail},${log.candidatePhone},${log.serviceOrCourse},${log.action},${log.actionDate},${log.actionTime},"${log.details}"`,
        )
        .join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "approved_candidates_history.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportToPDF = () => {
    const printWindow = window.open("", "_blank")
    const htmlContent = `
      <html>
        <head>
          <title>Approved Candidates History</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            h1 { color: #333; text-align: center; }
          </style>
        </head>
        <body>
          <h1>OPEYEMI TECHNOLOGY - Approved Candidates History</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Course</th>
                <th>Action</th>
                <th>Date</th>
                <th>Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              ${actionLogs
                .map(
                  (log) => `
                <tr>
                  <td>${log.candidateName}</td>
                  <td>${log.candidateEmail}</td>
                  <td>${log.candidatePhone}</td>
                  <td>${log.serviceOrCourse}</td>
                  <td>${log.action}</td>
                  <td>${log.actionDate}</td>
                  <td>${log.actionTime}</td>
                  <td>${log.details}</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `

    printWindow.document.write(htmlContent)
    printWindow.document.close()
    printWindow.print()
  }

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.course.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "All" || app.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const filteredLogs = actionLogs.filter((log) => {
    const matchesSearch =
      log.candidateName.toLowerCase().includes(historySearchTerm.toLowerCase()) ||
      log.serviceOrCourse.toLowerCase().includes(historySearchTerm.toLowerCase())
    const matchesFilter = historyFilterCourse === "All" || log.serviceOrCourse === historyFilterCourse
    return matchesSearch && matchesFilter
  })

  const candidateTimeline = selectedCandidate
    ? actionLogs
        .filter((log) => log.candidateId === selectedCandidate)
        .sort((a, b) => new Date(b.actionDate + " " + b.actionTime) - new Date(a.actionDate + " " + a.actionTime))
    : []

  const stats = {
    total: applications.length,
    pending: applications.filter((app) => app.status === "Pending").length,
    approved: applications.filter((app) => app.status === "Approved").length,
    rejected: applications.filter((app) => app.status === "Rejected").length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/tech-background-dark.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="space-y-3">
              <h1 className="text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                OPEYEMI TECHNOLOGY
              </h1>
              <p className="text-2xl text-slate-400 font-light tracking-wide">Admin Dashboard</p>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Online</span>
                </div>
                <div className="w-px h-4 bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-slate-400" />
                  <span>Real-time Management</span>
                </div>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-0 shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-slate-300 tracking-wide">Total Applications</CardTitle>
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/20">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-2">{stats.total}</div>
                <div className="flex items-center text-xs text-slate-400">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-400" />
                  <span>+12% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-slate-300 tracking-wide">Pending Review</CardTitle>
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/20">
                  <Clock className="h-6 w-6 text-orange-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-2">{stats.pending}</div>
                <div className="flex items-center text-xs text-slate-400">
                  <Clock className="h-3 w-3 mr-1 text-orange-400" />
                  <span>Awaiting action</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-slate-300 tracking-wide">Approved</CardTitle>
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/20">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-2">{stats.approved}</div>
                <div className="flex items-center text-xs text-slate-400">
                  <Award className="h-3 w-3 mr-1 text-green-400" />
                  <span>Successfully processed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-semibold text-slate-300 tracking-wide">Rejected</CardTitle>
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-red-500/20">
                  <XCircle className="h-6 w-6 text-red-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-2">{stats.rejected}</div>
                <div className="flex items-center text-xs text-slate-400">
                  <XCircle className="h-3 w-3 mr-1 text-red-400" />
                  <span>Declined applications</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={currentView} onValueChange={setCurrentView} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-slate-800/80 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 shadow-xl">
              <TabsTrigger
                value="applications"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-blue-500/30 text-slate-400 hover:text-slate-200 transition-all duration-300 rounded-xl py-3 font-medium"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Applications
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-green-600/20 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-green-500/30 text-slate-400 hover:text-slate-200 transition-all duration-300 rounded-xl py-3 font-medium"
              >
                <Calendar className="h-4 w-4 mr-2" />
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="applications" className="space-y-8">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-slate-800/90 to-slate-800/70 rounded-t-2xl border-b border-slate-700/50">
                  <CardTitle className="flex items-center gap-4 text-white text-2xl font-bold">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/20">
                      <BookOpen className="h-7 w-7 text-blue-400" />
                    </div>
                    Course Applications
                    <Badge className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 border border-slate-600/50 px-3 py-1">
                      {applications.length} Total
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-base mt-2">
                    Manage and review student course applications with advanced filtering and real-time updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1">
                      <div className="relative group">
                        <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                        <Input
                          placeholder="Search by name, email, or course..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-12 h-14 bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-lg border border-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-300"
                        />
                      </div>
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-full md:w-64 h-14 bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-lg border border-slate-700/50 text-white rounded-xl">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl">
                        <SelectItem value="All">All Status</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Approved">Approved</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-6">
                    {filteredApplications.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="p-4 bg-slate-800/50 rounded-lg inline-block mb-4">
                          <BookOpen className="h-12 w-12 text-gray-400 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No Applications Found</h3>
                        <p className="text-gray-400">
                          {searchTerm || filterStatus !== "All"
                            ? "No applications match your current filters."
                            : "No course applications have been submitted yet."}
                        </p>
                      </div>
                    ) : (
                      filteredApplications.map((app) => (
                        <Card
                          key={app.id}
                          className="bg-white/5 backdrop-blur-lg border-l-4 border-l-blue-400 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                              <div className="space-y-3">
                                <div className="flex items-center gap-4 flex-wrap">
                                  <h3 className="font-bold text-xl text-white">{app.fullName}</h3>
                                  <Badge
                                    className={
                                      app.status === "Approved"
                                        ? "bg-green-500/30 text-green-200 border-green-400/30"
                                        : app.status === "Rejected"
                                          ? "bg-red-500/30 text-red-200 border-red-400/30"
                                          : "bg-yellow-500/30 text-yellow-200 border-yellow-400/30"
                                    }
                                  >
                                    {app.status}
                                  </Badge>
                                  <Badge
                                    className={
                                      app.paymentStatus === "Paid"
                                        ? "bg-green-500/30 text-green-200 border-green-400/30"
                                        : "bg-orange-500/30 text-orange-200 border-orange-400/30"
                                    }
                                  >
                                    {app.paymentStatus}
                                  </Badge>
                                  <Badge className="bg-blue-500/30 text-blue-200 border-blue-400/30">{app.type}</Badge>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-center gap-2 text-gray-300">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                    <span>{app.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-300">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <span>{app.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-300">
                                    <BookOpen className="h-4 w-4 text-gray-400" />
                                    <span>{app.course}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-300">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span>
                                      {app.appliedDate} at {app.appliedTime}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                  onClick={() => handleApprove(app.id)}
                                  disabled={app.status !== "Pending"}
                                  className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Approve
                                </Button>
                                <Button
                                  onClick={() => handleReject(app.id)}
                                  disabled={app.status !== "Pending"}
                                  variant="destructive"
                                  className="bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                >
                                  <XCircle className="h-4 w-4 mr-2" />
                                  Reject
                                </Button>
                                <Button
                                  onClick={() => setSelectedCandidate(app.id)}
                                  variant="outline"
                                  className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  Timeline
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-slate-800/90 to-slate-800/70 rounded-t-2xl border-b border-slate-700/50">
                  <CardTitle className="flex items-center gap-4 text-white text-2xl font-bold">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/20">
                      <Calendar className="h-7 w-7 text-green-400" />
                    </div>
                    Approved Candidates History
                    <Badge className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 border border-slate-600/50 px-3 py-1">
                      {actionLogs.length} Records
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-base mt-2">
                    Complete action log and timeline for all approved candidates with detailed tracking
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1">
                      <div className="relative group">
                        <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                        <Input
                          placeholder="Search by candidate name or course..."
                          value={historySearchTerm}
                          onChange={(e) => setHistorySearchTerm(e.target.value)}
                          className="pl-12 h-14 bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-lg border border-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-300"
                        />
                      </div>
                    </div>
                    <Select value={historyFilterCourse} onValueChange={setHistoryFilterCourse}>
                      <SelectTrigger className="w-full md:w-64 h-14 bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-lg border border-slate-700/50 text-white rounded-xl">
                        <SelectValue placeholder="Filter by course" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl">
                        <SelectItem value="All">All Courses</SelectItem>
                        <SelectItem value="Computer Basics">Computer Basics</SelectItem>
                        <SelectItem value="Microsoft Office">Microsoft Office</SelectItem>
                        <SelectItem value="Graphics Design">Graphics Design</SelectItem>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex gap-3">
                      <Button
                        onClick={exportToCSV}
                        className="bg-slate-700 hover:bg-slate-600 text-white shadow-lg transition-all duration-300"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        CSV
                      </Button>
                      <Button
                        onClick={exportToPDF}
                        className="bg-slate-700 hover:bg-slate-600 text-white shadow-lg transition-all duration-300"
                        size="sm"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {filteredLogs.map((log) => (
                      <Card
                        key={log.id}
                        className="bg-slate-800/30 backdrop-blur-lg border-l-4 border-l-green-500 border border-slate-700 hover:bg-slate-800/50 transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="space-y-3">
                              <div className="flex items-center gap-4 flex-wrap">
                                <h3 className="font-bold text-xl text-white">{log.candidateName}</h3>
                                <Badge className="bg-green-600/30 text-green-300 border-green-500/30">
                                  <Award className="h-3 w-3 mr-1" />
                                  {log.action}
                                </Badge>
                                {log.paymentStatus && (
                                  <Badge
                                    className={
                                      log.paymentStatus === "Paid"
                                        ? "bg-green-600/30 text-green-300 border-green-500/30"
                                        : "bg-orange-600/30 text-orange-300 border-orange-500/30"
                                    }
                                  >
                                    {log.paymentStatus}
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-gray-300 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <p className="flex items-center gap-2">
                                  <span className="font-semibold text-green-300">Course:</span>
                                  <span className="text-gray-200">{log.serviceOrCourse}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="font-semibold text-green-300">Email:</span>
                                  <span className="text-gray-200">{log.candidateEmail}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="font-semibold text-green-300">Phone:</span>
                                  <span className="text-gray-200">{log.candidatePhone}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span className="font-semibold text-green-300">Action Date:</span>
                                  <span className="text-gray-200">
                                    {log.actionDate} at {log.actionTime}
                                  </span>
                                </p>
                                <p className="flex items-center gap-2 md:col-span-2">
                                  <span className="font-semibold text-green-300">Details:</span>
                                  <span className="text-gray-200">{log.details}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {selectedCandidate && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
              <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-800/95 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl">
                <CardHeader className="bg-gradient-to-r from-slate-800/90 to-slate-800/70 rounded-t-2xl border-b border-slate-700/50">
                  <CardTitle className="text-white text-2xl font-bold flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg border border-blue-500/20">
                      <Eye className="h-6 w-6 text-blue-400" />
                    </div>
                    Candidate Timeline
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-base">
                    Complete action history for {candidateTimeline[0]?.candidateName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {candidateTimeline.map((log, index) => (
                      <div key={log.id} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-lg border-2 border-slate-700"></div>
                          {index < candidateTimeline.length - 1 && (
                            <div className="w-px h-24 bg-gradient-to-b from-slate-600 to-transparent mt-4"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center gap-4 mb-4">
                            <Badge className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 border border-slate-600/50 px-3 py-1">
                              {log.action}
                            </Badge>
                            <span className="text-sm text-slate-400 font-medium">
                              {log.actionDate} at {log.actionTime}
                            </span>
                          </div>
                          <p className="text-slate-300 bg-gradient-to-r from-slate-800/60 to-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                            {log.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-8 pt-6 border-t border-slate-700/50">
                    <Button
                      onClick={() => setSelectedCandidate(null)}
                      className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Close Timeline
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
