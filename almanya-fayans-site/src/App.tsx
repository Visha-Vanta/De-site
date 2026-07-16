import { Play, Pause, Mail, Phone, MapPin, Send, User, Calendar, Award, Users, Shield, Zap, Globe } from 'lucide-react'
import { useState, useRef } from 'react'

// --- ÇEVİRİ SÖZLÜĞÜ (TRANSLATIONS) ---
type Language = 'de' | 'en' | 'tr'

const translations = {
  de: {
    nav: {
      offer: "Kostenloses Angebot"
    },
    hero: {
      title: "Präzision, die man spürt.",
      subtitle: "EdoFliesen - Hochwertige Naturstein und Marmor Verlegung mit über 18 Jahren Erfahrung",
      stats: {
        exp: "Jahre Erfahrung",
        proj: "Abgeschlossene Projekte",
        sat: "Kundenzufriedenheit"
      },
      tagline: "Meisterbetrieb, Premium Qualität, Innovative Lösungen"
    },
    portfolio: {
      title: "Portfolio Galerie",
      desc: "Hochwertige Fliesen aus Keramik, Porzellan und Naturstein in maßgerechter Ausführung. Jedes Projekt wird mit höchster Präzision und Liebe zum Detail realisiert.",
      v1: "Premium Fliesen Ausführung",
      v2: "Badezimmer Renovierung",
      v3: "Badezimmer Arbeit",
      v4: "Naturstein Öffentlichkeit"
    },
    services: {
      title: "Handwerk mit System",
      cards: [
        { title: "Großformat-Fliesen", desc: "Präziser Zuschnitt und Verlegung für großformatige Fliesen mit nahtloser Optik." },
        { title: "Naturstein & Marmor", desc: "Hochwertige Naturstein- und Marmorverlegung mit meisterhafter Handwerkskunst." },
        { title: "Bodenheizung", desc: "Effiziente Fußbodenheizungssysteme, perfekt integriert in Ihre Fliesen." },
        { title: "Wasserdichte Systeme", desc: "Abdichtungslösungen für langlebige Sicherheit in Nassbereichen." }
      ]
    },
    quote: {
      text: "Qualität ist kein Zufall, sondern das Ergebnis bewährter Technik und Leidenschaft für das Material.",
      author: "— Markus König, Gründer & Master Fliesenleger"
    },
    contact: {
      title: "Kontaktieren Sie Uns",
      subtitle: "Für ein unverbindliches Angebot und professionelle Beratung",
      address: "Adresse",
      addressText: "Kurfürstenstraße 123, 10119 Berlin",
      phone: "Telefon",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      hoursText1: "Mo-Fr: 8:00-18:00 Uhr",
      hoursText2: "Sa: Nach Termin",
      form: {
        nameLabel: "Name *",
        namePlace: "Ihr vollständiger Name",
        emailLabel: "E-Mail *",
        emailPlace: "Ihre E-Mail Adresse",
        phoneLabel: "Telefon",
        phonePlace: "+49 ...",
        msgLabel: "Anfrage",
        msgPlace: "Ihr Anliegen oder Projektbeschreibung...",
        btn: "Nachricht senden"
      }
    },
    footer: "© 2026 EdoFliesen • Alle Rechte vorbehalten"
  },
  en: {
    nav: {
      offer: "Free Quote"
    },
    hero: {
      title: "Precision you can feel.",
      subtitle: "EdoFliesen - Premium natural stone and marble installation with over 18 years of experience",
      stats: {
        exp: "Years Experience",
        proj: "Completed Projects",
        sat: "Client Satisfaction"
      },
      tagline: "Master Craftsmen, Premium Quality, Innovative Solutions"
    },
    portfolio: {
      title: "Portfolio Gallery",
      desc: "High-quality ceramic, porcelain, and natural stone tiles customized to your needs. Every project is realized with the highest precision and attention to detail.",
      v1: "Premium Tile Execution",
      v2: "Bathroom Renovation",
      v3: "Bathroom Tile Work",
      v4: "Public Natural Stone"
    },
    services: {
      title: "Systematic Craftsmanship",
      cards: [
        { title: "Large Format Tiles", desc: "Precision cutting and installation for large-format tiles with seamless finishes." },
        { title: "Natural Stone & Marble", desc: "Premium natural stone and marble installation with expert craftsmanship." },
        { title: "Underfloor Heating", desc: "Efficient underfloor heating systems integrated with tile installations." },
        { title: "Waterproofing Systems", desc: "Waterproofing solutions ensuring long-lasting durability and protection." }
      ]
    },
    quote: {
      text: "Quality is not a coincidence, but the result of proven techniques and passion for the material.",
      author: "— Markus König, Founder & Master Tiler"
    },
    contact: {
      title: "Contact Us",
      subtitle: "For a free quote and professional consultation",
      address: "Address",
      addressText: "Kurfürstenstraße 123, 10119 Berlin",
      phone: "Phone",
      email: "Email",
      hours: "Opening Hours",
      hoursText1: "Mon-Fri: 8:00 AM - 6:00 PM",
      hoursText2: "Sat: By Appointment",
      form: {
        nameLabel: "Name *",
        namePlace: "Your Full Name",
        emailLabel: "Email *",
        emailPlace: "Your Email Address",
        phoneLabel: "Phone",
        phonePlace: "+49 ...",
        msgLabel: "Inquiry",
        msgPlace: "Your request or project description...",
        btn: "Send Message"
      }
    },
    footer: "© 2026 EdoFliesen • All rights reserved"
  },
  tr: {
    nav: {
      offer: "Ücretsiz Teklif"
    },
    hero: {
      title: "Hissedilen Hassasiyet.",
      subtitle: "EdoFliesen - 18 yılı aşkın tecrübe ile birinci sınıf doğal taş ve mermer döşeme",
      stats: {
        exp: "Yıllık Tecrübe",
        proj: "Tamamlanan Proje",
        sat: "Müşteri Memnuniyeti"
      },
      tagline: "Usta İşçilik, Premium Kalite, Yenilikçi Çözümler"
    },
    portfolio: {
      title: "Portfolyo Galerisi",
      desc: "İhtiyacınıza özel yüksek kaliteli seramik, porselen ve doğal taş fayanslar. Her proje en yüksek hassasiyet ve detaylara gösterilen özenle hayata geçirilir.",
      v1: "Premium Fayans Uygulaması",
      v2: "Banyo Yenileme",
      v3: "Banyo Fayans İşleri",
      v4: "Kamusal Doğal Taş"
    },
    services: {
      title: "Sistemli Ustalık",
      cards: [
        { title: "Büyük Ebatlı Fayans", desc: "Kusursuz görünüm için büyük ebatlı fayansların hassas kesimi ve döşenmesi." },
        { title: "Doğal Taş & Mermer", desc: "Usta işçilikle birinci sınıf doğal taş ve mermer uygulamaları." },
        { title: "Yerden Isıtma", desc: "Fayanslarınıza mükemmel entegre edilmiş verimli yerden ısıtma sistemleri." },
        { title: "Su Yalıtım Sistemleri", desc: "Islak zeminlerde uzun ömürlü dayanıklılık ve koruma sağlayan yalıtım çözümleri." }
      ]
    },
    quote: {
      text: "Kalite tesadüf değil, kanıtlanmış tekniklerin ve malzemeye duyulan tutkunun bir sonucudur.",
      author: "— Markus König, Kurucu & Usta Fayansçı"
    },
    contact: {
      title: "Bize Ulaşın",
      subtitle: "Ücretsiz teklif ve profesyonel danışmanlık için",
      address: "Adres",
      addressText: "Kurfürstenstraße 123, 10119 Berlin",
      phone: "Telefon",
      email: "E-posta",
      hours: "Çalışma Saatleri",
      hoursText1: "Pzt-Cum: 08:00 - 18:00",
      hoursText2: "Cmt: Randevu ile",
      form: {
        nameLabel: "İsim *",
        namePlace: "Adınız Soyadınız",
        emailLabel: "E-posta *",
        emailPlace: "E-posta Adresiniz",
        phoneLabel: "Telefon",
        phonePlace: "+49 ...",
        msgLabel: "Talebiniz",
        msgPlace: "Proje detayları veya mesajınız...",
        btn: "Mesaj Gönder"
      }
    },
    footer: "© 2026 EdoFliesen • Tüm hakları saklıdır"
  }
}

// --- BİLEŞENLER ---

function VideoPlayer({ src, title }: { src: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="group relative cursor-pointer" onClick={togglePlay}>
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
        <video
          ref={videoRef}
          src={src}
          className="w-full aspect-[9/16] object-cover transition-transform duration-500 group-hover:scale-105"
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 bg-amber-500/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-amber-200/50">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-amber-100" />
            ) : (
              <Play className="w-6 h-6 text-amber-100 ml-1" />
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-950/90 via-amber-900/60 to-transparent p-4">
          <h3 className="text-amber-100 font-semibold text-sm truncate">{title}</h3>
        </div>
      </div>
    </div>
  )
}

function Header({ lang, setLang, t }: { lang: Language; setLang: (l: Language) => void; t: any }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-stone-700/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-amber-300">
          EdoFliesen
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-stone-300 font-sans text-sm">
            {(['de', 'en', 'tr'] as Language[]).map((l, idx) => (
              <span key={l} className="flex items-center gap-1">
                <button 
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-lg transition-colors uppercase ${
                    lang === l ? 'bg-stone-800/80 text-amber-400 font-bold' : 'hover:bg-stone-800/50'
                  }`}
                >
                  {l}
                </button>
                {idx !== 2 && <span className="text-stone-600">|</span>}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-bold px-5 py-2 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 text-sm">
            <Globe className="w-4 h-4" />
            {t.nav.offer}
          </button>
        </div>
      </div>
    </header>
  )
}

function App() {
  const [lang, setLang] = useState<Language>('de')
  const t = translations[lang]

  const videos = [
    { id: 1, title: t.portfolio.v1 },
    { id: 2, title: t.portfolio.v2 },
    { id: 3, title: t.portfolio.v3 },
    { id: 4, title: t.portfolio.v4 },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-stone-900/40 to-zinc-900 text-gray-200">
      
      {/* Header (Navbar) - State aktarıldı */}
      <Header lang={lang} setLang={setLang} t={t} />

      {/* Hero Section - Temiz mermer arka plan */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Mobile (hero-mobile.jpg) ve Tablet/PC (hero-marble.jpg) için net arka plan */}
        <div className="absolute inset-0 bg-[url('/photos/hero-mobile.jpg')] md:bg-[url('/photos/hero-marble.jpg')] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold bg-gradient-to-r from-amber-400 via-stone-300 to-amber-400 bg-clip-text text-transparent mb-8">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-stone-300/80 max-w-2xl mx-auto mb-12 font-sans">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-16">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/20 border border-amber-500/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="w-8 h-8 text-amber-400" />
                <span className="text-4xl font-serif font-bold text-amber-300">18+</span>
              </div>
              <p className="text-stone-400 font-sans">{t.hero.stats.exp}</p>
            </div>

            <div className="bg-gradient-to-br from-stone-600/20 to-stone-700/30 border border-stone-500/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Users className="w-8 h-8 text-stone-400" />
                <span className="text-4xl font-serif font-bold text-stone-300">420+</span>
              </div>
              <p className="text-stone-400 font-sans">{t.hero.stats.proj}</p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/20 border border-amber-500/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-amber-400" />
                <span className="text-4xl font-serif font-bold text-amber-300">100%</span>
              </div>
              <p className="text-stone-400 font-sans">{t.hero.stats.sat}</p>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-lg md:text-xl text-amber-300/90 font-serif italic">
              {t.hero.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-amber-300 mb-12 text-center">{t.portfolio.title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
              <VideoPlayer key={video.id} src={`/videos/video${video.id}.mp4`} title={video.title} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-stone-300/60 max-w-2xl mx-auto font-sans">
              {t.portfolio.desc}
            </p>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="py-20 px-4 bg-stone-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-amber-300 mb-12 text-center">{t.services.title}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-amber-900/40 to-amber-950/40 border border-amber-500/20 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-200 mb-3">{t.services.cards[0].title}</h3>
              <p className="text-stone-300/70 font-sans text-sm">{t.services.cards[0].desc}</p>
            </div>

            <div className="bg-gradient-to-br from-stone-800/40 to-stone-900/40 border border-stone-600/20 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-stone-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏺</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-200 mb-3">{t.services.cards[1].title}</h3>
              <p className="text-stone-300/70 font-sans text-sm">{t.services.cards[1].desc}</p>
            </div>

            <div className="bg-gradient-to-br from-amber-900/40 to-amber-950/40 border border-amber-500/20 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-200 mb-3">{t.services.cards[2].title}</h3>
              <p className="text-stone-300/70 font-sans text-sm">{t.services.cards[2].desc}</p>
            </div>

            <div className="bg-gradient-to-br from-stone-800/40 to-stone-900/40 border border-stone-600/20 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-stone-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-stone-400" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-200 mb-3">{t.services.cards[3].title}</h3>
              <p className="text-stone-300/70 font-sans text-sm">{t.services.cards[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-stone-900/50 to-stone-950/50 border border-stone-700/30 rounded-2xl p-12 backdrop-blur-sm">
            <div className="text-6xl text-amber-400/30 font-serif mb-4">"</div>
            <p className="text-2xl md:text-3xl font-serif italic text-stone-200 mb-8">
              {t.quote.text}
            </p>
            <p className="text-lg text-amber-300 font-sans">{t.quote.author}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-stone-950/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-amber-300 mb-4 text-center">{t.contact.title}</h2>
          <p className="text-stone-300/70 font-sans text-center mb-12">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-200">{t.contact.address}</h3>
                  <p className="text-stone-400 font-sans">{t.contact.addressText}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-200">{t.contact.phone}</h3>
                  <p className="text-stone-400 font-sans">+49 30 123 456 78</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-200">{t.contact.email}</h3>
                  <p className="text-stone-400 font-sans">info@edofliesen.de</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-200">{t.contact.hours}</h3>
                  <p className="text-stone-400 font-sans">{t.contact.hoursText1}<br/>{t.contact.hoursText2}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-stone-300 font-sans mb-2">{t.contact.form.nameLabel}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-xl text-stone-200 font-sans focus:border-amber-400/50 focus:outline-none transition-colors"
                    placeholder={t.contact.form.namePlace}
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-sans mb-2">{t.contact.form.emailLabel}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-xl text-stone-200 font-sans focus:border-amber-400/50 focus:outline-none transition-colors"
                    placeholder={t.contact.form.emailPlace}
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-sans mb-2">{t.contact.form.phoneLabel}</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-xl text-stone-200 font-sans focus:border-amber-400/50 focus:outline-none transition-colors"
                    placeholder={t.contact.form.phonePlace}
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-sans mb-2">{t.contact.form.msgLabel}</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-stone-800/50 border border-stone-600/50 rounded-xl text-stone-200 font-sans focus:border-amber-400/50 focus:outline-none transition-colors resize-none"
                  placeholder={t.contact.form.msgPlace}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                <Send className="w-5 h-5" />
                {t.contact.form.btn}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-stone-700/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400 font-sans">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App