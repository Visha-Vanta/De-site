import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    const consent = localStorage.getItem('cookie-consent')
    return !consent
  })

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t border-stone-700/50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-stone-300 font-sans text-sm text-center sm:text-left">
          Wir verwenden Cookies, um die Website-Erfahrung zu verbessern.
          Sie können jederzeit Ihre Einwilligung widerrufen.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-stone-400 font-sans text-sm hover:text-stone-200 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold rounded-lg text-sm transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}