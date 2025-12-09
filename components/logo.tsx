import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  href?: string
  className?: string
}

export function Logo({ size = "md", href = "/", className = "" }: LogoProps) {
  const sizes = {
    sm: {
      container: "w-8 h-8",
      inner: "w-5 h-5",
      text: "text-lg",
      subtext: "text-xs",
    },
    md: {
      container: "w-10 h-10",
      inner: "w-6 h-6",
      text: "text-xl",
      subtext: "text-xs",
    },
    lg: {
      container: "w-12 h-12",
      inner: "w-7 h-7",
      text: "text-2xl",
      subtext: "text-sm",
    },
  }

  const currentSize = sizes[size]

  const LogoContent = () => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Main logo container with gradient background */}
        <div
          className={`${currentSize.container} bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25`}
        >
          {/* Inner geometric design */}
          <div className={`relative ${currentSize.inner}`}>
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
        <div
          className={`absolute inset-0 ${currentSize.container} bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur-sm opacity-30 -z-10`}
        ></div>
      </div>
      <div className="flex flex-col">
        <span className={`${currentSize.text} font-bold text-white tracking-tight`}>Opeyemi</span>
        <span className={`${currentSize.subtext} text-blue-300 font-medium tracking-wider uppercase`}>Technology</span>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
