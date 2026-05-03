import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen bg-base">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 bg-elevated">
        <div className="max-w-xs">
          <h1 className="text-xl font-semibold text-copy-primary mb-1">Ghost AI</h1>
          <p className="text-sm text-copy-secondary mb-8">
            Real-time collaborative system design
          </p>
          <ul className="space-y-2 text-sm text-copy-muted">
            <li>AI-powered architecture generation</li>
            <li>Real-time collaborative canvas</li>
            <li>Markdown technical spec export</li>
            <li>Prebuilt system design templates</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <SignUp />
      </div>
    </div>
  )
}
