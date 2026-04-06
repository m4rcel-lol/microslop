import { Link } from 'react-router-dom'

export default function NewsTicker() {
  return (
    <div className="bg-[#0067b8] text-white text-sm py-2 px-4 text-center">
      <Link to="/update-25h2" className="hover:underline">
        🚨 <strong>Microslop Update 25H2</strong> is now available — breaking more things than ever before. Click to learn what we ruined this time →
      </Link>
    </div>
  )
}
