import { Link } from 'react-router-dom'

export default function Auth() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-sm shadow-lg w-full max-w-sm p-8">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
            <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
            <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
            <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
          </svg>
          <span className="text-sm font-semibold text-gray-700">Microslop</span>
        </div>

        <h1 className="text-2xl font-light text-gray-800 mb-6">Sign in</h1>

        {/* Warning box */}
        <div className="bg-red-50 border border-red-300 text-red-700 text-sm p-3 rounded mb-4">
          ⚠️ Authentication is currently locked for regular users. This is a parody site — no real accounts exist here.
        </div>

        {/* Input */}
        <input
          type="text"
          disabled
          placeholder="Email, phone, or Skype"
          className="w-full border border-gray-300 px-3 py-2 text-sm mb-2 opacity-60 cursor-not-allowed bg-gray-50 rounded-sm"
        />

        <p className="text-sm text-gray-500 mb-6">
          No account?{' '}
          <span className="text-blue-600 underline cursor-pointer">Create one!</span>{' '}
          (just kidding)
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="block w-full text-center bg-[#0067b8] text-white py-2 px-4 text-sm font-medium hover:bg-blue-700 transition-colors rounded-sm"
        >
          Return to Microslop Home
        </Link>

        {/* Legal */}
        <div className="mt-6 flex gap-3 flex-wrap text-xs text-gray-500">
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Privacy &amp; cookies</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>
      </div>
    </div>
  )
}
