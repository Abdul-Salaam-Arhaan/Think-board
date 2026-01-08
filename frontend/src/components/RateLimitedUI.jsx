import { ZapIcon } from "lucide-react"

const RateLimitedUI = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-base-100 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <ZapIcon className="size-6 text-yellow-500" />
          <h2 className="text-xl font-bold">Rate Limited</h2>
        </div>
        <p className="mt-2">You've hit the rate limit. Please try again later.</p>
      </div>
    </div>
    
  )
}

export default RateLimitedUI
