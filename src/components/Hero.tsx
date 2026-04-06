import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background gradient simulating image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-sm p-6 md:p-8 max-w-md mx-auto md:mx-0">
            <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
              Meet Wintendo 11
            </h1>
            <p className="text-gray-200 text-sm md:text-base mb-5 leading-relaxed">
              The operating system that demands TPM 2.0, runs AI ads in your taskbar, and somehow runs slower than Wintendo 10 on the same hardware. Now with even more mandatory updates.
            </p>
            <Link
              to="/wintendo"
              className="inline-block bg-[#0067b8] text-white px-5 py-2 text-sm font-medium hover:bg-blue-700 transition-colors rounded-sm"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Hero visual (mobile stacked image placeholder) */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-40 md:w-80 md:h-52 bg-white bg-opacity-5 border border-white border-opacity-20 rounded flex items-center justify-center text-5xl">
            🖥️
          </div>
        </div>
      </div>
    </section>
  )
}
