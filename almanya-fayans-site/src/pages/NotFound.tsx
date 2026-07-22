export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-900/40 to-zinc-900 text-gray-200 flex items-center justify-center pt-24">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-serif font-bold text-amber-400 mb-8">404</h1>
        <h2 className="text-3xl font-serif font-bold text-stone-200 mb-4">Seite nicht gefunden</h2>
        <p className="text-stone-400 font-sans mb-8">
          Die von Ihnen gesuchte Seite existiert leider nicht.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-bold px-6 py-3 rounded-xl transition-all duration-300"
        >
          Zur Startseite
        </a>
      </div>
    </div>
  )
}