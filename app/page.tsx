import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Palette,
  Globe,
  Rocket,
  Monitor,
  Code,
  Eye,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./components/contact-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px:8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* Main logo container with gradient background */}
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  {/* Inner geometric design */}
                  <div className="relative w-6 h-6">
                    {/* Central diamond */}
                    <div className="absolute inset-0 bg-white/90 rounded-sm rotate-45 transform scale-75"></div>
                    {/* Top accent */}
                    <div className="absolute top-0 left-1/2 w-1 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                    {/* Side accents */}
                    <div className="absolute top-1/2 left-0 w-2 h-1 bg-white/60 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-1 bg-white/60 rounded-full transform -translate-y-1/2"></div>
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur-sm opacity-30 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">Opeyemi</span>
                <span className="text-xs text-blue-300 font-medium tracking-wider uppercase">Technology</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-gray-800"
              >
                View Work
              </Button>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Creative Web Design
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  Beautiful Websites
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block">
                    That Convert
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your business with stunning, responsive websites that captivate your audience and drive
                  results. Professional web design services tailored to your unique brand.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 transform"
                  >
                    <Rocket className="mr-2 w-5 h-5" />
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 transform bg-transparent"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Portfolio
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Mobile Responsive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Fast Loading</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">Website Preview</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <Monitor className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs text-gray-300">Responsive</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <Zap className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-xs text-gray-300">Fast</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <Palette className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-xs text-gray-300">Beautiful</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Professional Web Design Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive web design solutions to elevate your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <Monitor className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                </div>
                <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">
                  Responsive Design
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Websites that look perfect on all devices - desktop, tablet, and mobile
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 border border-green-500/30 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                  <Code className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                </div>
                <CardTitle className="text-white group-hover:text-green-300 transition-colors duration-300">
                  Custom Development
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Tailored solutions built with modern technologies and best practices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 border border-purple-500/30 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                  <Palette className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                </div>
                <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">
                  UI/UX Design
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Beautiful interfaces designed for optimal user experience and engagement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/30 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                  <Globe className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                  SEO Optimization
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Search engine optimized websites to improve your online visibility
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Portfolio</h2>
            <p className="text-xl text-gray-400">Recent websites we've designed and developed</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 - E-Commerce Platform */}
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/ecommerce-sample.png"
                  alt="E-Commerce Platform with Multiple Retailers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/50 backdrop-blur rounded p-2 border border-white/10">
                    <p className="text-white text-sm font-medium">Modern Online Store</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-gray-700/50 transition-colors duration-300">
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Modern online store with payment integration and inventory management
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300">
                    React
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 hover:scale-105 transition-all duration-300">
                    Node.js
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300">
                    Stripe
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Item 2 - Corporate Website */}
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/corporate-website-sample.png"
                  alt="Corporate Website Sample"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/50 backdrop-blur rounded p-2 border border-white/10">
                    <p className="text-white text-sm font-medium">Professional Business Site</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-gray-700/50 transition-colors duration-300">
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Corporate Website
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Professional business website with CMS and contact forms
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300">
                    Next.js
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300">
                    Tailwind
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 hover:scale-105 transition-all duration-300">
                    CMS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Item 3 - Restaurant Website (Updated) */}
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/7793b4efdabee1a94bcfdc213d7912bd.jpg"
                  alt="Restaurant Website - Pizza & Burger"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/50 backdrop-blur rounded p-2 border border-white/10">
                    <p className="text-white text-sm font-medium">Modern Restaurant Site</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-gray-700/50 transition-colors duration-300">
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Restaurant Website
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Modern restaurant site with menu showcase and online ordering
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30 hover:scale-105 transition-all duration-300">
                    React
                  </Badge>
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30 hover:scale-105 transition-all duration-300">
                    UX Design
                  </Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-105 transition-all duration-300">
                    Branding
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Item 4 - Portfolio Website (Updated) */}
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/portfolio-website-sample.png"
                  alt="Portfolio Website - Willimes Parker"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/50 backdrop-blur rounded p-2 border border-white/10">
                    <p className="text-white text-sm font-medium">Elegant Portfolio Showcase</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-gray-700/50 transition-colors duration-300">
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Professional Portfolio
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Elegant portfolio website showcasing design and development skills
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300">
                    Vue.js
                  </Badge>
                  <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30 hover:scale-105 transition-all duration-300">
                    Design
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300">
                    Development
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Item 5 - SaaS Dashboard */}
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/saas-dashboard.jpg"
                  alt="SaaS Dashboard with Analytics and Real-time Data Visualization"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/50 backdrop-blur rounded p-2 border border-white/10">
                    <p className="text-white text-sm font-medium">Analytics Dashboard</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-gray-700/50 transition-colors duration-300">
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  SaaS Dashboard
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Analytics dashboard with real-time data visualization and sales metrics
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300">
                    Analytics
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300">
                    Dashboard
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 hover:scale-105 transition-all duration-300">
                    Real-time
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Item 6 - Educational Platform */}
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/images/educational-platform-sample.png"
                  alt="Educational Platform Sample"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-black/50 backdrop-blur rounded p-2 border border-white/10">
                    <p className="text-white text-sm font-medium">Online Learning Platform</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-gray-700/50 transition-colors duration-300">
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Educational Platform
                </h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Online learning platform with course management and progress tracking
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300">
                    Next.js
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300">
                    Prisma
                  </Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 hover:scale-105 transition-all duration-300">
                    Video.js
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Trusted by businesses worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  "Opeyemi delivered an exceptional website that perfectly captured our brand. The design is beautiful,
                  user-friendly, and has significantly improved our online presence."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">OA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Oluwaseun Adeyemi
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  "Professional, creative, and reliable. The website exceeded our expectations and has helped us attract
                  more customers. Highly recommend their services!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">CO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Chijioke Okonkwo
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Owner, Local Bistro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  "Outstanding work! The team understood our vision and created a website that truly represents our
                  brand. The attention to detail and customer service was exceptional."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Amina Ibrahim
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Director, Creative Agency
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  "Incredible transformation! Opeyemi Technology took our outdated website and turned it into a modern,
                  high-converting platform. The results speak for themselves - our online sales have tripled!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">BB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Bounty Babatunde
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Founder, E-Commerce Hub
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-gray-300">
              Let's create a stunning website that represents your brand and drives results. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                Get Free Quote
              </Button>
            </div>
            <p className="text-sm text-gray-400">Free consultation • Custom design • Ongoing support</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to start your web design project? Let's discuss your vision and bring it to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
                  <p className="text-gray-400 mt-2">
                    Ready to create an amazing website? Let's discuss your project and turn your vision into reality.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href="mailto:opeyemitechnology@gmail.com" className="text-blue-400 hover:text-blue-300">
                        opeyemitechnology@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <a href="tel:+2348126989184" className="text-blue-400 hover:text-blue-300">
                        +234 812 698 9184
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-gray-400">
                        Lagos, Nigeria
                        <br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-gray-400 mb-4">Follow our work</p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  {/* Main logo container with gradient background */}
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    {/* Inner geometric design */}
                    <div className="relative w-6 h-6">
                      {/* Central diamond */}
                      <div className="absolute inset-0 bg-white/90 rounded-sm rotate-45 transform scale-75"></div>
                      {/* Top accent */}
                      <div className="absolute top-0 left-1/2 w-1 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                      {/* Side accents */}
                      <div className="absolute top-1/2 left-0 w-2 h-1 bg-white/60 rounded-full transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-0 w-2 h-1 bg-white/60 rounded-full transform -translate-y-1/2"></div>
                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur-sm opacity-30 -z-10"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">Opeyemi</span>
                  <span className="text-xs text-blue-300 font-medium tracking-wider uppercase">Technology</span>
                </div>
              </div>
              <p className="text-gray-400">
                Creating beautiful, responsive websites that help businesses grow and succeed online.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SEO
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Opeyemi Technology. All rights reserved. Crafted with passion.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
