import { useState } from 'react'

type Language = 'de' | 'en' | 'tr'

const translations = {
  de: {
    message: 'Wir verwenden Cookies, um die Website-Erfahrung zu verbessern. Sie können jederzeit Ihre Einwilligung widerrufen.',
    decline: 'Ablehnen',
    accept: 'Akzeptieren',
  },
  en: {
    message: 'We use cookies to improve your website experience. You can withdraw your consent at any time.',
    decline: 'Decline',
    accept: 'Accept',
  },
  tr: {
    message: 'Web sitesi deneyimini iyileştirmek için çerez kullanıyoruz. Onayınızı istediğiniz zaman geri çekebilirsiniz.',
    decline: 'Reddet',
    accept: 'Kabul Et',
  },
}

export default function CookieBanner({ language = 'de' }: { language?: Language }) {
  const [isVisible, setIsVisible] = useState(() => {
    const consent = localStorage.getItem('cookie-consent')
    return !consent
  })

  const t = translations[language]

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
          {t.message}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-stone-400 font-sans text-sm hover:text-stone-200 transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold rounded-lg text-sm transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}