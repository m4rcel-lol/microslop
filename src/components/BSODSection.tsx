import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function BSODModal({ onClose }: { onClose: () => void }) {
  const [percent, setPercent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 99) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          return 99
        }
        return prev + 1
      })
    }, 60)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0078D7] text-white flex flex-col items-center justify-center px-8 py-12 font-mono"
    >
      <div className="max-w-xl w-full">
        {/* Sad face */}
        <div className="text-7xl mb-6">:(</div>

        <h1 className="text-2xl font-bold mb-4 leading-tight">
          Your PC ran into a problem and needs to restart. We're<br />
          just collecting some error info, and then we'll restart for you.
        </h1>

        <div className="text-4xl font-bold mb-8">{percent}% complete</div>

        {/* Fake QR code */}
        <div className="flex gap-6 items-start mb-8">
          <div className="w-24 h-24 bg-white rounded flex items-center justify-center text-3xl">
            📱
          </div>
          <div className="text-sm leading-relaxed opacity-90">
            <p>For more information about this issue and possible fixes, visit</p>
            <p className="text-blue-200">https://microslop.fake/bsod-help</p>
            <p className="mt-2">
              If you call a support person, give them this info:<br />
              Stop code: <strong>DEFINITELY_NOT_OUR_FAULT</strong>
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="border border-white border-opacity-50 px-6 py-2 text-sm hover:bg-white hover:bg-opacity-20 transition-colors"
        >
          Force Restart (Close)
        </button>
      </div>
    </motion.div>
  )
}

export default function BSODSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="bg-[#0078D7] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Experience the Signature Wintendo Feature
        </h2>
        <p className="text-blue-100 text-base mb-2 leading-relaxed">
          The Blue Screen of Death — now with 40% more cryptic error codes and zero actionable advice.
          Your productivity documents? Gone. Your unsaved work? Character building.
        </p>
        <p className="text-blue-200 text-sm mb-8">
          Rated "Most Immersive Panic Experience" by PC Gamer, 2024.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-[#0078D7] font-semibold px-8 py-3 hover:bg-blue-50 transition-colors rounded-sm"
        >
          Preview BSOD
        </button>
      </div>

      <AnimatePresence>
        {showModal && <BSODModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  )
}
