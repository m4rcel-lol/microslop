import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
    .join(' ')
}

export default function GenericPage() {
  const { pageId } = useParams<{ pageId: string }>()
  const title = slugToTitle(pageId ?? 'unknown')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-500 text-lg mb-2">This page is currently under construction.</p>
        <p className="text-gray-400 text-sm mb-8">
          Our engineers are busy installing Wintendo updates. Please try again in 6–8 business decades.
        </p>
        <Link
          to="/"
          className="bg-[#0067b8] text-white px-6 py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors rounded-sm"
        >
          Return to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
