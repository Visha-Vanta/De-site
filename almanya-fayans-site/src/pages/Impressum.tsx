export default function Impressum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-900/40 to-zinc-900 text-gray-200 pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif font-bold text-amber-300 mb-12">Impressum</h1>

        <div className="bg-gradient-to-br from-stone-900/50 to-stone-950/50 border border-stone-700/30 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-serif font-bold text-stone-200 mb-6">Angaben gemäß § 5 TMG</h2>

          <div className="space-y-4 text-stone-300 font-sans">
            <p><strong>EdoFliesen</strong></p>
            <p>Kurfürstenstraße 123<br />10119 Berlin<br />Deutschland</p>

            <div className="pt-4 border-t border-stone-700/30">
              <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Vertreten durch:</h3>
              <p>Ergin Dedeoğlu<br />Inhaber & Meister Fliesenleger</p>
            </div>

            <div className="pt-4 border-t border-stone-700/30">
              <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Kontakt:</h3>
              <p>Telefon: +49 30 123 456 78<br />
              E-Mail: info@edofliesen.de<br />
              WhatsApp: +49 171 129 1791</p>
            </div>

            <div className="pt-4 border-t border-stone-700/30">
              <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Registergericht:</h3>
              <p>Amtsgericht Berlin</p>
            </div>

            <div className="pt-4 border-t border-stone-700/30">
              <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Steuernummer:</h3>
              <p>DE 27/123/45678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}