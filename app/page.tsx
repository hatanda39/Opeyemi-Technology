"use client"

import type React from "react"
import { Download } from "lucide-react"
import { useState } from "react"
import { Link } from "next/link"
import {
  Monitor,
  Wrench,
  Laptop,
  Network,
  GraduationCap,
  Users,
  Star,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  User,
  BookOpen,
  Clock,
  CheckCircle,
  Code,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function HomePage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [enrollmentForm, setEnrollmentForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    passport: null as File | null,
    course: "",
    experience: "",
  })

  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
    description: "",
  })

  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const handleServiceBooking = (serviceType: string) => {
    setBookingForm({ ...bookingForm, serviceType })
    setShowBookingForm(true)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:opeyemitechnology@gmail.com?subject=Contact from ${contactForm.name}&body=Name: ${contactForm.name}%0AEmail: ${contactForm.email}%0A%0AMessage:%0A${contactForm.message}`
    window.location.href = mailtoLink
    setContactForm({ name: "", email: "", message: "" })
  }

  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("fullName", enrollmentForm.fullName)
      formData.append("email", enrollmentForm.email)
      formData.append("phone", enrollmentForm.phone)
      formData.append("address", enrollmentForm.address)
      formData.append("course", enrollmentForm.course)
      formData.append("experience", enrollmentForm.experience)
      if (enrollmentForm.passport) {
        formData.append("passport", enrollmentForm.passport)
      }

      const response = await fetch("/api/enroll", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setShowEnrollmentForm(false)
        setShowThankYou(true)
        setTimeout(() => setShowThankYou(false), 3000)

        // Reset form
        setEnrollmentForm({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          passport: null,
          course: "",
          experience: "",
        })
      }
    } catch (error) {
      console.error("Error submitting enrollment:", error)
    }
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/book-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      })

      if (response.ok) {
        setShowBookingForm(false)
        setShowThankYou(true)
        setTimeout(() => setShowThankYou(false), 3000)

        // Reset form
        setBookingForm({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "",
          preferredDate: "",
          preferredTime: "",
          address: "",
          description: "",
        })
      }
    } catch (error) {
      console.error("Error submitting booking:", error)
    }
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Dark tech background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tech-dark-background-Qq5b1WsDhgKzChdaHQYqT4HHa7tyOr.png')",
        }}
      ></div>
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-green-900/80"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OPEYEMI%20TECHNOLOGY%20LOGO-YLededpDCP5YFZLdCFBCroWfbUQrGI.png"
                alt="OPEYEMI TECHNOLOGY Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              OPEYEMI TECHNOLOGY
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="font-bold text-white hover:text-[#00aaff] transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#00aaff] after:w-0 after:transition-all after:duration-300 [&.active]:text-[#00aaff] [&.active]:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-bold text-white hover:text-[#00aaff] transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#00aaff] after:w-0 after:transition-all after:duration-300 [&.active]:text-[#00aaff] [&.active]:after:w-full"
            >
              About
            </a>
            <a
              href="#services"
              className="font-bold text-white hover:text-[#00aaff] transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#00aaff] after:w-0 after:transition-all after:duration-300 [&.active]:text-[#00aaff] [&.active]:after:w-full"
            >
              Services
            </a>
            <a
              href="#courses"
              className="font-bold text-white hover:text-[#00aaff] transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#00aaff] after:w-0 after:transition-all after:duration-300 [&.active]:text-[#00aaff] [&.active]:after:w-full"
            >
              Courses
            </a>
            <a
              href="#contact"
              className="font-bold text-white hover:text-[#00aaff] transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#00aaff] after:w-0 after:transition-all after:duration-300 [&.active]:text-[#00aaff] [&.active]:after:w-full"
            >
              Contact
            </a>
          </nav>

          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link href="/auth/login">
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Your Trusted
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    {" "}
                    Technology
                  </span>
                  <br />
                  Partner in Nigeria
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed">
                  Professional computer services, repairs, sales, and comprehensive training courses to empower your
                  digital journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setShowEnrollmentForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Enroll in Courses
                </Button>
                <Button
                  onClick={() => setShowBookingForm(true)}
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl bg-transparent"
                >
                  <Wrench className="h-5 w-5 mr-2" />
                  Book Service
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="/modern-computer-setup.png"
                alt="Computer Technology Services"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">About OPEYEMI TECHNOLOGY</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Bridging the digital divide in Nigeria through quality technology services and education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  To provide accessible, high-quality technology services and training that empower individuals and
                  businesses to thrive in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  To become Nigeria's most trusted technology partner, known for excellence, innovation, and
                  transforming lives through technology education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Founded in 2018, we've served over 5,000 customers and trained 2,000+ students across Nigeria,
                  building a reputation for reliability and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-200">Comprehensive technology solutions for all your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Computer Repairs & Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Expert diagnosis and repair of desktops, laptops, and hardware components with quick turnaround times.
                </p>
                <button
                  onClick={() => handleServiceBooking("Computer Repair")}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Laptop className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                  Laptop & Accessories Sales
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Quality laptops, computers, and accessories from trusted brands at competitive prices.
                </p>
                <button
                  onClick={() => handleServiceBooking("Laptop Sales")}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Software Installation & Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Professional installation and setup of operating systems, applications, and security software.
                </p>
                <button
                  onClick={() => handleServiceBooking("Software Installation")}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Network className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                  Networking & Internet Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Network setup, configuration, troubleshooting, and maintenance for homes and businesses.
                </p>
                <button
                  onClick={() => handleServiceBooking("Networking Setup")}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Courses Section */}
      <section id="courses" className="py-20 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Training Courses</h2>
            <p className="text-xl text-gray-200">Professional training programs to advance your career</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Computer Basics</CardTitle>
                <CardDescription className="text-slate-600">
                  Learn fundamental computer skills and digital literacy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="h-4 w-4" />
                  <span>6 months</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>₦60,000</span>
                </div>
                <Button
                  onClick={() => {
                    setEnrollmentForm({ ...enrollmentForm, course: "Computer Basics" })
                    setShowEnrollmentForm(true)
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Microsoft Office</CardTitle>
                <CardDescription className="text-slate-600">
                  Master Word, Excel, PowerPoint, and Outlook
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="h-4 w-4" />
                  <span>2 months</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>₦25,000</span>
                </div>
                <Button
                  onClick={() => {
                    setEnrollmentForm({ ...enrollmentForm, course: "Microsoft Office" })
                    setShowEnrollmentForm(true)
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Graphics Design</CardTitle>
                <CardDescription className="text-slate-600">
                  Create stunning visuals with Paint and design principles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="h-4 w-4" />
                  <span>3 months</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>₦35,000</span>
                </div>
                <Button
                  onClick={() => {
                    setEnrollmentForm({ ...enrollmentForm, course: "Graphics Design" })
                    setShowEnrollmentForm(true)
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 transition-colors"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Web Development</CardTitle>
                <CardDescription className="text-slate-600">
                  Learn HTML, CSS, JavaScript, and web development fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="h-4 w-4" />
                  <span>4 months</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>₦80,000</span>
                </div>
                <Button
                  onClick={() => {
                    setEnrollmentForm({ ...enrollmentForm, course: "Web Development" })
                    setShowEnrollmentForm(true)
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-200">Hear from satisfied customers and students</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600">
                  "OPEYEMI TECHNOLOGY fixed my laptop in just 2 days! Professional service and fair pricing. Highly
                  recommended for anyone needing computer repairs."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Adebayo Johnson</p>
                    <p className="text-sm text-slate-500">Business Owner, Lagos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600">
                  "The graphics design course was excellent! I learned Paint and design principles from scratch. Now I'm
                  running my own design business. Thank you OPEYEMI TECHNOLOGY!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    F
                  </div>
                  <div>
                    <p className="font-semibold">Fatima Abdullahi</p>
                    <p className="text-sm text-slate-500">Graphic Designer, Abuja</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600">
                  "Amazing coding bootcamp! The instructors are knowledgeable and patient. I got a job as a web
                  developer 3 months after completing the course."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    C
                  </div>
                  <div>
                    <p className="font-semibold">Chinedu Okafor</p>
                    <p className="text-sm text-slate-500">Web Developer, Port Harcourt</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-200">Ready to start your tech journey? Contact us today!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-200">+2348126989184</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-gray-200">+2348126989184</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-200">opeyemitechnology@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-200">Suite 14, Ramdat Shopping Complex, Elega, Abeokuta, Ogun State</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                <div className="space-y-1 text-gray-200">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Phone</label>
                  <Input placeholder="+234 803 123 4567" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Service Interest</label>
                  <select className="w-full p-2 border border-slate-300 rounded-md">
                    <option>Computer Repair</option>
                    <option>Training Course</option>
                    <option>Laptop Purchase</option>
                    <option>Networking Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Message</label>
                  <Textarea placeholder="Tell us how we can help you..." rows={4} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-600 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Monitor className="h-8 w-8 text-yellow-300" />
                <span className="text-xl font-bold text-white">OPEYEMI TECHNOLOGY</span>
              </div>
              <p className="text-cyan-100">
                Your trusted partner for all technology needs in Nigeria. Quality service, expert training, and reliable
                support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-yellow-300">Services</h3>
              <ul className="space-y-2 text-cyan-100">
                <li>Computer Repairs</li>
                <li>Laptop Sales</li>
                <li>Software Installation</li>
                <li>Networking Services</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-yellow-300">Training</h3>
              <ul className="space-y-2 text-cyan-100">
                <li>Computer Basics</li>
                <li>Microsoft Office</li>
                <li>Graphics Design</li>
                <li>Web Development</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-yellow-300">Contact Info</h3>
              <ul className="space-y-2 text-cyan-100">
                <li>+2348126989184</li>
                <li>opeyemitechnology@gmail.com</li>
                <li>Suite 14, Ramdat Shopping Complex, Elega, Abeokuta, Ogun State</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-400 mt-8 pt-8 text-center text-white">
            <p>&copy; 2024 OPEYEMI TECHNOLOGY. All rights reserved. | Empowering Nigeria through Technology</p>
          </div>
        </div>
      </footer>

      {/* Thank You Popup Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
            <p className="text-slate-600">Thanks for applying! We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Enrollment Form Popup */}
      {showEnrollmentForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Course Enrollment</h3>
              <Button
                variant="ghost"
                onClick={() => setShowEnrollmentForm(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                ✕
              </Button>
            </div>

            <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
              <div>
                <Label htmlFor="passport">Upload Passport Photo</Label>
                <input
                  id="passport"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEnrollmentForm({ ...enrollmentForm, passport: e.target.files?.[0] || null })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {enrollmentForm.passport && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <img
                      src={URL.createObjectURL(enrollmentForm.passport) || "/placeholder.svg"}
                      alt="Passport preview"
                      className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                    />
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={enrollmentForm.fullName}
                  onChange={(e) => setEnrollmentForm({ ...enrollmentForm, fullName: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={enrollmentForm.email}
                  onChange={(e) => setEnrollmentForm({ ...enrollmentForm, email: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={enrollmentForm.phone}
                  onChange={(e) => setEnrollmentForm({ ...enrollmentForm, phone: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="address">Full Address</Label>
                <Textarea
                  id="address"
                  value={enrollmentForm.address}
                  onChange={(e) => setEnrollmentForm({ ...enrollmentForm, address: e.target.value })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <Label htmlFor="course">Select Course</Label>
                <select
                  id="course"
                  value={enrollmentForm.course}
                  onChange={(e) => setEnrollmentForm({ ...enrollmentForm, course: e.target.value })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a course</option>
                  <option value="Computer Basics">Computer Basics (6 months - ₦60,000)</option>
                  <option value="Microsoft Office">Microsoft Office (2 months - ₦25,000)</option>
                  <option value="Graphics Design">Graphics Design (3 months - ₦35,000)</option>
                  <option value="Web Development">Web Development (4 months - ₦80,000)</option>
                </select>
              </div>

              <div>
                <Label htmlFor="experience">Experience Level</Label>
                <select
                  id="experience"
                  value={enrollmentForm.experience}
                  onChange={(e) => setEnrollmentForm({ ...enrollmentForm, experience: e.target.value })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select experience level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                Submit Enrollment
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Booking Form Popup */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Book a Service</h3>
              <Button
                variant="ghost"
                onClick={() => setShowBookingForm(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                ✕
              </Button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <Label htmlFor="bookingFullName">Full Name</Label>
                <Input
                  id="bookingFullName"
                  type="text"
                  value={bookingForm.fullName}
                  onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bookingEmail">Email Address</Label>
                <Input
                  id="bookingEmail"
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bookingPhone">Phone/WhatsApp Number</Label>
                <Input
                  id="bookingPhone"
                  type="tel"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="serviceType">Service Type</Label>
                <select
                  id="serviceType"
                  value={bookingForm.serviceType}
                  onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="Computer Repair">Computer Repair</option>
                  <option value="Laptop Repair">Laptop Repair</option>
                  <option value="Laptop Sales">Laptop Sales</option>
                  <option value="Software Installation">Software Installation</option>
                  <option value="Networking Setup">Networking Setup</option>
                  <option value="Hardware Upgrade">Hardware Upgrade</option>
                  <option value="Data Recovery">Data Recovery</option>
                  <option value="Virus Removal">Virus Removal</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="preferredDate">Preferred Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={bookingForm.preferredDate}
                  onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <select
                  id="preferredTime"
                  value={bookingForm.preferredTime}
                  onChange={(e) => setBookingForm({ ...bookingForm, preferredTime: e.target.value })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select time slot</option>
                  <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                  <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
                  <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
                  <option value="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</option>
                </select>
              </div>

              <div>
                <Label htmlFor="bookingAddress">Service Address</Label>
                <Textarea
                  id="bookingAddress"
                  value={bookingForm.address}
                  onChange={(e) => setBookingForm({ ...bookingForm, address: e.target.value })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                  placeholder="Enter the address where service is needed"
                />
              </div>

              <div>
                <Label htmlFor="description">Problem Description</Label>
                <Textarea
                  id="description"
                  value={bookingForm.description}
                  onChange={(e) => setBookingForm({ ...bookingForm, description: e.target.value })}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                  placeholder="Describe the issue or service needed"
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 transition-colors">
                Book Service
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
