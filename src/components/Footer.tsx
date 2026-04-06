import { Link } from 'react-router-dom'

const columns = [
  {
    title: "What's new",
    links: [
      { label: 'Wintendo 11', to: '/wintendo' },
      { label: 'Slopware 365', to: '/slopware-365' },
      { label: 'Crashpilot AI', to: '/crashpilot' },
      { label: 'Update 25H2', to: '/update-25h2' },
    ],
  },
  {
    title: 'Microslop Store',
    links: [
      { label: 'Account profile', to: '/auth' },
      { label: 'Surface (Hot)', to: '/surface-hot' },
      { label: 'Xbox controllers', to: '/xbox' },
      { label: 'Gift a subscription', to: '/gift' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Microslop', to: '/about' },
      { label: 'Careers (lol)', to: '/careers' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Contact Support', to: '/support' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Columns */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">{col.title}</h3>
            <ul className="space-y-1.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-500 hover:text-gray-800 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span>🌐</span>
            <span>English (United Slates)</span>
          </span>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Trademarks</a>
          <span className="ml-auto">© 2025 Microslop Corporation. All bugs reserved.</span>
        </div>
      </div>
    </footer>
  )
}
