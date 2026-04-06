import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Slopware 365', to: '/slopware-365' },
  { label: 'Teams (Forced)', to: '/teams-forced' },
  { label: 'Wintendo', to: '/wintendo' },
  { label: 'Surface (Hot)', to: '/surface-hot' },
  { label: 'Xbox', to: '/xbox' },
  { label: 'Support', to: '/support' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-6 shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
            <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
            <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
            <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
          </svg>
          <span className="font-semibold text-gray-800 text-sm">Microslop</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center ml-auto">
          <Link to="/all" className="text-sm text-gray-600 hover:text-gray-900">
            All Microslop →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-2 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/all"
            className="block px-2 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded"
            onClick={() => setMenuOpen(false)}
          >
            All Microslop →
          </Link>
        </div>
      )}
    </nav>
  )
}
