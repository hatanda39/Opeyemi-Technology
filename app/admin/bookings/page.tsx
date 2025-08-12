"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Monitor, ArrowLeft, Calendar, Users, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

interface Booking {
  id: string
  fullName: string
  phone: string
  email: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  address: string
  description: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: string
}

export default function BookingsAdmin() {
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated")
    if (!isAuthenticated) {
      router.push("/admin/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    router.push("/admin/login")
  }

  // Mock data - in real app, fetch from API
  useEffect(() => {
    const mockBookings: Booking[] = [
      {
        id: "1",
        fullName: "John Doe",
        phone: "+2348123456789",
        email: "john@example.com",
        serviceType: "Computer Repair",
        preferredDate: "2024-01-15",
        preferredTime: "9:00 AM - 11:00 AM",
        address: "123 Lagos Street, Lagos",
        description: "Laptop not turning on",
        status: "pending",
        createdAt: "2024-01-10T10:00:00Z",
      },
      {
        id: "2",
        fullName: "Jane Smith",
        phone: "+2348987654321",
        email: "jane@example.com",
        serviceType: "Software Installation",
        preferredDate: "2024-01-16",
        preferredTime: "2:00 PM - 4:00 PM",
        address: "456 Abuja Road, FCT",
        description: "Need Microsoft Office installed",
        status: "confirmed",
        createdAt: "2024-01-11T14:30:00Z",
      },
    ]
    setBookings(mockBookings)
  }, [])

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateBookingStatus = (id: string, newStatus: Booking["status"]) => {
    setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: newStatus } : booking)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                OPEYEMI TECHNOLOGY - BOOKINGS
              </span>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleLogout} variant="outline" className="text-red-600 hover:bg-red-50 bg-transparent">
                Logout
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Admin
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{bookings.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Pending</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">
                {bookings.filter((b) => b.status === "pending").length}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Confirmed</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">
                {bookings.filter((b) => b.status === "confirmed").length}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">
                {bookings.filter((b) => b.status === "completed").length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800">Service Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                type="text"
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="border border-slate-200">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-bold text-lg text-slate-800 mb-2">{booking.fullName}</h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>
                            <strong>Email:</strong> {booking.email}
                          </p>
                          <p>
                            <strong>Phone:</strong> {booking.phone}
                          </p>
                          <p>
                            <strong>Address:</strong> {booking.address}
                          </p>
                          <p>
                            <strong>Description:</strong> {booking.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="space-y-1 text-sm text-slate-600 mb-4">
                          <p>
                            <strong>Service:</strong> {booking.serviceType}
                          </p>
                          <p>
                            <strong>Date:</strong> {booking.preferredDate}
                          </p>
                          <p>
                            <strong>Time:</strong> {booking.preferredTime}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              booking.status === "pending"
                                ? "bg-orange-100 text-orange-800"
                                : booking.status === "confirmed"
                                  ? "bg-blue-100 text-blue-800"
                                  : booking.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                          <div className="flex gap-2 ml-auto">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, "confirmed")}
                              className="text-blue-600 hover:bg-blue-50"
                            >
                              Confirm
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, "completed")}
                              className="text-green-600 hover:bg-green-50"
                            >
                              Complete
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, "cancelled")}
                              className="text-red-600 hover:bg-red-50"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBookings.length === 0 && (
              <div className="text-center py-8 text-slate-500">No bookings found matching your criteria.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
