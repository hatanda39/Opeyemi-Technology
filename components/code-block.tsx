"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase font-medium">{language}</span>
        <Button size="sm" variant="ghost" className="h-6 text-gray-400 hover:text-white" onClick={copyToClipboard}>
          {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
      <pre className="bg-gray-900 p-3 rounded-lg overflow-x-auto text-sm">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  )
}
