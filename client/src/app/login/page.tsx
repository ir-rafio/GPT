import { Metadata } from "next"
import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Sign Up",
}

export default function AuthenticationPage() {
    return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign In
            </h1>
          </div>
          <div className="mt-4">
            <UserAuthForm />
          </div>
        </div>
      </div>
    </div>
  )
}
