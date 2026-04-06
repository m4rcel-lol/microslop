const updateNotes = [
  'Fixed the bug that caused your printer to work — reverted immediately after complaints',
  'Taskbar now randomly repositions itself to build character',
  'Added 3 new mandatory "Getting Started" pop-ups you cannot dismiss',
  'Start Menu search now returns Bing results for local files',
  'Forced Cortana reinstall on all systems. She says hi.',
  'Sleep mode now installs updates mid-REM cycle for efficiency',
  'Telemetry now includes your "private" browsing. For improvement purposes.',
]

export function UpdateChangelog() {
  return (
    <div className="bg-white border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Updates (KB4048953)</h2>
      <ul className="space-y-2">
        {updateNotes.map((note, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-600">
            <span className="text-red-400 mt-0.5">●</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const reviews = [
  {
    author: 'TechDave99',
    rating: 1,
    text: '"My PC used to boot in 30 seconds. After the update it takes 4 minutes and plays a jingle. Two stars — one for the jingle."',
  },
  {
    author: 'CindyFromAccounting',
    rating: 2,
    text: '"Teams launched itself during my vacation photo slideshow. Displayed all 47 unread notifications. In 48pt font."',
  },
  {
    author: 'xXProGamer2077Xx',
    rating: 1,
    text: '"Edge opened itself mid-game to ask if I wanted to switch from Chrome. I don\'t even have Chrome. 0/10."',
  },
]

export function UserReviews() {
  return (
    <div className="bg-white border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">User Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-700">{review.author}</span>
              <span className="text-yellow-400 text-sm">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </span>
            </div>
            <p className="text-sm text-gray-500 italic">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
