import Navbar from '../components/Navbar'
import NewsTicker from '../components/NewsTicker'
import Hero from '../components/Hero'
import ProductCards from '../components/ProductCards'
import { UpdateChangelog, UserReviews } from '../components/ChangelogReviews'
import BSODSection from '../components/BSODSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <NewsTicker />
      <Hero />
      <ProductCards />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <UpdateChangelog />
        <UserReviews />
      </div>
      <BSODSection />
      <Footer />
    </div>
  )
}
