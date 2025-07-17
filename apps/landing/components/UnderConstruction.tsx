import { Construction, Clock, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function UnderConstruction() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--color-custom-background)" }}
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        {/* Main Icon */}
        <div className="flex justify-center">
          <div className="p-6 rounded-full shadow-lg" style={{ backgroundColor: "var(--color-custom-primary)" }}>
            <Construction className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: "var(--color-custom-text)" }}>
            Under Construction
          </h1>
          <p
            className="text-lg md:text-xl max-w-md mx-auto leading-relaxed"
            style={{ color: "var(--color-custom-gray)" }}
          >
            This section is currently under development. We’re getting it ready for you—stay tuned!
          </p>
        </div>

        {/* Progress Card */}
        <Card
          className="border-2 shadow-lg"
          style={{
            borderColor: "var(--color-custom-border)",
            backgroundColor: "var(--color-custom-bg)",
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="w-5 h-5" style={{ color: "var(--color-custom-primary)" }} />
              <span className="font-semibold" style={{ color: "var(--color-custom-text)" }}>
                Coming Soon
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="h-3 rounded-full transition-all duration-1000 ease-out"
                style={{
                  backgroundColor: "var(--color-custom-green)",
                  width: "75%",
                }}
              ></div>
            </div>

            <p className="text-sm" style={{ color: "var(--color-custom-gray)" }}>
              Development Progress: 75% Complete
            </p>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="space-y-4">
          <p className="text-sm font-medium" style={{ color: "var(--color-custom-text)" }}>
            Have questions? Get in touch with us.
          </p>

           <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                    href="mailto:appletephilippines@gmail.com"
                    className="group border-2 hover:shadow-md transition-all duration-200 bg-transparent flex items-center px-4 py-2 rounded-md"
                    style={{
                    borderColor: "var(--color-custom-border)",
                    color: "var(--color-custom-text)",
                    }}
                >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t" style={{ borderColor: "var(--color-custom-border)" }}>
          <p className="text-sm" style={{ color: "var(--color-custom-gray)" }}>
            © 2025 Applete. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
