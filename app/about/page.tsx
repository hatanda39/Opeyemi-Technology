"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  Mail,
  Users,
  Target,
  Award,
  CheckCircle,
  Monitor,
  Laptop,
  Settings,
  GraduationCap,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Monitor className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                OPEYEMI TECHNOLOGY
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="text-blue-600 font-bold px-3 py-2 rounded-md text-sm font-medium relative"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                </Link>
                <Link
                  href="/#services"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/#courses"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  Courses
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/#contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <img
          src="/modern-tech-workspace.png"
          alt="Tech Workspace"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent">
              About OPEYEMI TECHNOLOGY
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Empowering Nigeria's Digital Future Through Technology Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                OPEYEMI TECHNOLOGY is Nigeria's premier computer service and training center, established in 2018 with a
                vision to bridge the digital divide across the nation. We are a team of passionate technology experts
                dedicated to providing world-class computer services and comprehensive digital education.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From our humble beginnings, we have grown to become a trusted name in technology solutions, serving over
                5,000 satisfied customers and training more than 2,000 students in essential digital skills.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">5,000+</div>
                  <div className="text-gray-700">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">2,000+</div>
                  <div className="text-gray-700">Students Trained</div>
                </div>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <img src="/modern-office-team.png" alt="Our Team" className="rounded-lg shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`order-2 lg:order-1 transform transition-all duration-1000 delay-600 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <img src="/modern-classroom-computing.png" alt="Our Mission" className="rounded-lg shadow-2xl w-full h-auto" />
            </div>
            <div
              className={`order-1 lg:order-2 transform transition-all duration-1000 delay-800 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-green-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To democratize technology access and education across Nigeria by providing affordable, high-quality
                computer services and comprehensive training programs that empower individuals and businesses to thrive
                in the digital age.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Provide accessible technology education for all skill levels</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Deliver reliable computer repair and maintenance services</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Bridge the digital divide in Nigerian communities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Foster innovation and digital entrepreneurship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <Award className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We provide a comprehensive range of technology services and educational programs designed to meet the
                diverse needs of individuals, students, and businesses across Nigeria.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <Monitor className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Computer Repairs</h3>
                  <p className="text-gray-700 text-sm">Professional repair and maintenance services</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <Laptop className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Sales & Accessories</h3>
                  <p className="text-gray-700 text-sm">Quality laptops and computer accessories</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <Settings className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Software Installation</h3>
                  <p className="text-gray-700 text-sm">Complete software setup and updates</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <GraduationCap className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Training Courses</h3>
                  <p className="text-gray-700 text-sm">Comprehensive digital skills education</p>
                </div>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-1200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <img
                src="/computer-repair-tech.png"
                alt="Our Services"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`order-2 lg:order-1 transform transition-all duration-1000 delay-1400 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <img
                src="/satisfied-customers-certificates.png"
                alt="Why Choose Us"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div
              className={`order-1 lg:order-2 transform transition-all duration-1000 delay-1600 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <Star className="h-12 w-12 text-green-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With years of experience and a commitment to excellence, we stand out as Nigeria's most trusted
                technology partner. Here's what makes us different:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast & Reliable Service</h3>
                    <p className="text-gray-700">Quick turnaround times with guaranteed quality results</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-700">Certified professionals with extensive industry experience</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Affordable Pricing</h3>
                    <p className="text-gray-700">Competitive rates without compromising on quality</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Comprehensive Support</h3>
                    <p className="text-gray-700">Ongoing support and maintenance for all our services</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Digital Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust OPEYEMI TECHNOLOGY for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </Link>
            <Link
              href="/#courses"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Our Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">OPEYEMI TECHNOLOGY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering Nigeria's digital future through technology excellence and comprehensive education.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/#services" className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/#courses" className="block text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+2348126989184</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>opeyemitechnology@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OPEYEMI TECHNOLOGY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
