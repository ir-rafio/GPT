import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bair Ho",
}

export default function AuthenticationPage() {
    return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="image-center">
            <img src="hold_up.jpg" alt="Bair Ho" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              You're not allowed here chottobondhu :3
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
