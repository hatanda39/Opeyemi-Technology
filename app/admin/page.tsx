"use client"

import { Input } from "@/components/ui/input"

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

      const mockApplications = [
        {
          id: 1,
          fullName: "John Doe",
          email: "john@example.com",
          phone: "+2348123456789",
          address: "123 Lagos Street, Victoria Island, Lagos",
          course: "Computer Basics",
          experience: "Beginner",
          appliedDate: "2024-01-15",
          status: "Pending",
          paymentStatus: "Pending",
        },
        {
          id: 2,
          fullName: "Jane Smith",
          email: "jane@example.com",
          phone: "+2348987654321",
          address: "456 Abuja Road, Garki, FCT",
          course: "Microsoft Office",
          experience: "Intermediate",
          appliedDate: "2024-01-14",
          status: "Approved",
          paymentStatus: "Paid",
        },
        {
          id: 3,
          fullName: "David Johnson",
          email: "david@example.com",
          phone: "+2348555666777",
          address: "789 Port Harcourt Avenue, GRA, Rivers State",
          course: "Graphics Design",
          experience: "Beginner",
          appliedDate: "2024-01-13",
          status: "Pending",
          paymentStatus: "Pending",
        },
      ]

      setApplications(mockApplications)

      const savedLogs = localStorage.getItem("actionLogs")
      if (savedLogs) {
        setActionLogs(JSON.parse(savedLogs))
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const saveActionLog = (log) => {
    const updatedLogs = [...actionLogs, log]
    setActionLogs(updatedLogs)
    localStorage.setItem("actionLogs", JSON.stringify(updatedLogs))
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

  const handleApprove = async (id) => {
    const candidate = applications.find((app) => app.id === id)
    if (!candidate) return

    const updatedApplications = applications.map((app) => (app.id === id ? { ...app, status: "Approved" } : app))
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
      action: "Approved",
      actionDate: new Date().toLocaleDateString(),
      actionTime: new Date().toLocaleTimeString(),
      details: `Candidate approved for ${candidate.course}`,
      paymentStatus: candidate.paymentStatus,
      performedBy: "Admin",
    }

    saveActionLog(actionLog)
    await sendNotification(candidate, "approved")
  }

  const handleReject = async (id) => {
    const candidate = applications.find((app) => app.id === id)
    if (!candidate) return

    const updatedApplications = applications.map((app) => (app.id === id ? { ...app, status: "Rejected" } : app))
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
      action: "Rejected",
      actionDate: new Date().toLocaleDateString(),
      actionTime: new Date().toLocaleTimeString(),
      details: `Candidate rejected for ${candidate.course}`,
      paymentStatus: candidate.paymentStatus,
      performedBy: "Admin",
    }

    saveActionLog(actionLog)
    await sendNotification(candidate, "rejected")
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">OPEYEMI TECHNOLOGY</h1>
            <p className="text-gray-600">Admin Dashboard</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 bg-transparent">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Applications</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Rejected</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={currentView} onValueChange={setCurrentView} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="applications">Course Applications</TabsTrigger>
            <TabsTrigger value="history">Approved Candidates History</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Course Applications
                </CardTitle>
                <CardDescription>Manage student course applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search by name, email, or course..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Approved">Approved</SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {filteredApplications.map((app) => (
                    <Card key={app.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold text-lg">{app.fullName}</h3>
                              <Badge
                                variant={
                                  app.status === "Approved"
                                    ? "default"
                                    : app.status === "Rejected"
                                      ? "destructive"
                                      : "secondary"
                                }
                              >
                                {app.status}
                              </Badge>
                              <Badge variant={app.paymentStatus === "Paid" ? "default" : "outline"}>
                                {app.paymentStatus}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p>
                                <strong>Email:</strong> {app.email}
                              </p>
                              <p>
                                <strong>Phone:</strong> {app.phone}
                              </p>
                              <p>
                                <strong>Course:</strong> {app.course}
                              </p>
                              <p>
                                <strong>Experience:</strong> {app.experience}
                              </p>
                              <p>
                                <strong>Applied:</strong> {app.appliedDate}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            {app.status === "Pending" && (
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => handleApprove(app.id)}
                                  className="bg-green-600 hover:bg-green-700"
                                  size="sm"
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button onClick={() => handleReject(app.id)} variant="destructive" size="sm">
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </div>
                            )}

                            <div className="flex gap-2">
                              <Select
                                value={app.paymentStatus}
                                onValueChange={(value) => updatePaymentStatus(app.id, value)}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Pending">Pending</SelectItem>
                                  <SelectItem value="Paid">Paid</SelectItem>
                                  <SelectItem value="Overdue">Overdue</SelectItem>
                                </SelectContent>
                              </Select>

                              <Button onClick={() => setSelectedCandidate(app.id)} variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                Timeline
                              </Button>
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

          <TabsContent value="history" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  Approved Candidates History
                </CardTitle>
                <CardDescription>Complete action log for all candidates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search by candidate name or course..."
                        value={historySearchTerm}
                        onChange={(e) => setHistorySearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={historyFilterCourse} onValueChange={setHistoryFilterCourse}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filter by course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Courses</SelectItem>
                      <SelectItem value="Computer Basics">Computer Basics</SelectItem>
                      <SelectItem value="Microsoft Office">Microsoft Office</SelectItem>
                      <SelectItem value="Graphics Design">Graphics Design</SelectItem>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button onClick={exportToCSV} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      CSV
                    </Button>
                    <Button onClick={exportToPDF} variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredLogs.map((log) => (
                    <Card key={log.id} className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold">{log.candidateName}</h3>
                              <Badge variant="default">{log.action}</Badge>
                              {log.paymentStatus && (
                                <Badge variant={log.paymentStatus === "Paid" ? "default" : "outline"}>
                                  {log.paymentStatus}
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p>
                                <strong>Course:</strong> {log.serviceOrCourse}
                              </p>
                              <p>
                                <strong>Email:</strong> {log.candidateEmail}
                              </p>
                              <p>
                                <strong>Phone:</strong> {log.candidatePhone}
                              </p>
                              <p>
                                <strong>Action Date:</strong> {log.actionDate} at {log.actionTime}
                              </p>
                              <p>
                                <strong>Details:</strong> {log.details}
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

        {/* Timeline Modal */}
        {selectedCandidate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Candidate Timeline</CardTitle>
                <CardDescription>Complete action history for {candidateTimeline[0]?.candidateName}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidateTimeline.map((log, index) => (
                    <div key={log.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        {index < candidateTimeline.length - 1 && <div className="w-px h-16 bg-gray-300 mt-2"></div>}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{log.action}</Badge>
                          <span className="text-sm text-gray-500">
                            {log.actionDate} at {log.actionTime}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{log.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <Button onClick={() => setSelectedCandidate(null)} variant="outline">
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
