# EdoFliesen Tasarım Güncelleme

## Tarih: 2026-07-18

## Güncellenen Dosyalar

### 1. src/App.tsx
**Header (Navbar)** - Responsive:
- Sol tarafta: `/assets/edo2-favicon.png` logo (h-10, mix-blend-lighten) + `hidden sm:block` "EdoFliesen" metni
- Sağ tarafta: `gap-2 sm:gap-4` ile düzenlenmiş, buton metni mobilde "Angebot", desktop'ta "Kostenloses Angebot"
- Buton: `<a href="#contact">` smooth scroll ile iletişim formuna yönlendirme

**Hero bölümü (Tam ekran):**
- `min-h-screen` ile tam ekran
- **Responsive arka plan:** Mobile'da `hero-mobile.jpg`, Tablet/PC'de `hero-marble.jpg`
- **Koyulaştırıcı overlay:** `bg-zinc-950/70` (daha net okunabilirlik için)
- **Metin gölgeleri:** H1 için `text-shadow: 2px 2px 8px rgba(0,0,0,0.8)`, P için `text-shadow: 1px 1px 6px rgba(0,0,0,0.7)`
- Başlık: "Präzision, die man spürt." (nokta ile)
- Alt başlık: "EdoFliesen - Hochwertige Naturstein und Marmor Verlegung mit über 22 Jahren Erfahrung" (18 → 22 yıl)

### src/App.css
- Artık kullanılmayan `.hero` sınıfları ve media queryler kaldırıldı (temiz kod için)

**İstatistik kutuları (3 adet):**
- `22+ Jahre Erfahrung` - Award ikonu ile (18 → 22 yıl)
- `420+ Abgeschlossene Projekte` - Users ikonu ile  
- `100% Kundenzufriedenheit` - Shield ikonu ile

**Meisterbetrieb Şeridi:**
- "Meisterbetrieb, Premium Qualität, Innovative Lösungen" istatistiklerin hemen altında

**Video Portfolyosu:**
- Değişiklik YOK - Mevcut grid yapısı korundu

**Hizmet kartları ("Handwerk mit System" başlığı altında, 4 kart):**
- `Großformat-Fliesen` - Büyük format fayanslar
- `Naturstein & Marmor` - Doğal taş ve mermer
- `Terrassen & Balkone` - **Yeni: Teras ve balkon döşemeleri** (Bodenheizung kartı kaldırıldı)
- `Wasserdichte Systeme` - Su geçirmezlik sistemleri

**Markus König alıntısı:**
- "Qualität ist kein Zufall, sondern das Ergebnis bewährter Technik und Leidenschaft für das Material."
- "— Markus König, Gründer & Master Fliesenleger"

**İletişim formu (Çok dilli):**
- **Almanca (de):** "Ihr Name", "Ihre E-Mail", "Gewünschte Leistung" (dropdown), "Nachricht", "Senden" butonu
- **İngilizce (en):** "Your Name", "Your Email", "Desired Service" (dropdown), "Message", "Send" button
- **Türkçe (tr):** "Adınız Soyadınız", "E-posta", "Talep Edilen Hizmet" (dropdown), "Mesajınız", "Gönder" butonu
- **WhatsApp entegrasyonu:** Form submit edildiğinde WhatsApp üzerinden gönderilir, form resetlenir
- Numara: `+491711291791`
- Çalışma saatleri: "Mo-Fr: 08:00 - 18:00" / "Mon-Fri: 08:00 - 18:00" / "Pzt-Cum: 08:00 - 18:00"
- E-posta: info@edofliesen.de

**Footer:**
- `/assets/edo4.png` logo (h-16 w-auto) logo ve "Inhaber: Ergin Dedeoğlu" metni

### 2. index.html
- Favicon: `/assets/edo-favicon.png` (image/png, şeffaf arka plan) olarak güncellendi
- Google Fonts: Inter ve Playfair Display eklendi
- Başlık: "EdoFliesen | Premium Naturstein & Marmor Verlegung"

## Renk Paleti
- Koyu antrasit: `bg-zinc-950` (#09090b)
- Mermer tonları: `stone-*`, `zinc-*` tonları
- Altın/amber detaylar: `amber-400`, `amber-500`, `amber-600`

## Font Kullanımı
- Başlıklar: `font-serif` (Playfair Display)
- Gövde metinleri: `font-sans` (Inter)