export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-900/40 to-zinc-900 text-gray-200 pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif font-bold text-amber-300 mb-12">Datenschutzerklärung</h1>

        <div className="bg-gradient-to-br from-stone-900/50 to-stone-950/50 border border-stone-700/30 rounded-2xl p-8 backdrop-blur-sm space-y-8">

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-200 mb-4">1. Datenschutz auf einen Blick</h2>
            <p className="text-stone-300 font-sans mb-4">
              Die folgenden Informationen geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert.
            </p>
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Datenschutzbeauftragter</h3>
            <p className="text-stone-300 font-sans">
              Ergin Dedeoğlu, EdoFliesen, Kurfürstenstraße 123, 10119 Berlin, info@edofliesen.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-200 mb-4">2. Übermittlung personenbezogener Daten</h2>
            <p className="text-stone-300 font-sans mb-4">
              Wir übermitteln Daten an WhatsApp GmbH für die Kontaktaufnahme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-200 mb-4">3. Datenerhebung auf unserer Website</h2>
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Kontaktformular</h3>
            <p className="text-stone-300 font-sans mb-4">
              Wir erheben: Name, E-Mail, Telefon (optional), Nachricht. Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2">Speicherdauer</h3>
            <p className="text-stone-300 font-sans">
              Daten werden 90 Tage gespeichert und danach unwiderruflich gelöscht.
            </p>
            <h3 className="text-lg font-serif font-bold text-amber-300 mb-2 mt-4">WhatsApp-Integration</h3>
            <p className="text-stone-300 font-sans">
              Ihre Daten werden an +49 171 129 1791 über WhatsApp gesendet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-200 mb-4">4. Rechte nach der DSGVO</h2>
            <ul className="list-disc list-inside text-stone-300 font-sans space-y-2 ml-4">
              <li>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch</li>
            </ul>
            <p className="text-stone-300 font-sans mt-4">
              Wenden Sie sich an: info@edofliesen.de
            </p>
          </section>

          <div className="pt-6 border-t border-stone-700/30 text-stone-400 text-sm font-sans">
            <p>Stand: Juli 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}