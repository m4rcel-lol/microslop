import { Link } from 'react-router-dom'

const products = [
  {
    emoji: '🔥',
    title: 'Surface Pro (Heater Edition)',
    description: 'Doubles as a space heater. Throttles at 40°C. Perfect for warming your lap while "working" from home.',
    to: '/surface-hot',
    cta: 'Shop now',
  },
  {
    emoji: '📦',
    title: 'Slopware 365',
    description: 'Subscribe, unsubscribe, re-subscribe. The productivity suite that emails you daily reminders you\'re paying for it.',
    to: '/slopware-365',
    cta: 'Subscribe forever',
  },
  {
    emoji: '🤖',
    title: 'Crashpilot AI',
    description: 'Our AI assistant. Answers your questions with confident wrongness and occasionally opens Notepad unprompted.',
    to: '/crashpilot',
    cta: 'Enable Crashpilot',
  },
  {
    emoji: '🌐',
    title: 'Edge Browser',
    description: 'Set as your default browser every time you open another browser. Now with 47 prompts to try Bing.',
    to: '/edge',
    cta: 'You already have it',
  },
]

export default function ProductCards() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.to}
              className="bg-white border border-gray-200 p-5 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{product.emoji}</div>
              <h3 className="font-semibold text-gray-800 text-base mb-2">{product.title}</h3>
              <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">{product.description}</p>
              <Link
                to={product.to}
                className="text-[#0067b8] text-sm font-medium hover:underline"
              >
                {product.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
