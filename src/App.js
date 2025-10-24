import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import Button from "./components/ui/button";
import { HeartPulse, MapPin, Phone, Info, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("TR");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const translations = {
    TR: {
      heroTitle: "Dijital Sağlık Turizmi Platformu",
      heroDesc: "MEDIVIA ile Türkiye'nin önde gelen sağlık kurumlarını keşfedin. Güvenilir, hızlı ve şeffaf sağlık turizmi deneyimi.",
      searchPlaceholder: "Hastane, Klinik veya Tedavi Ara...",
      buttonSearch: "Ara",
      offer: "Teklif Al",
      navHospitals: "Kurumlar",
      navAbout: "Hakkımızda",
      navContact: "İletişim",
      aboutTitle: "Neden MEDIVIA?",
      aboutDesc: "MEDIVIA, sağlık turizmi alanında güvenilir bilgi, doğru yönlendirme ve dijital kolaylık sunan bir platformdur. Hastalar ile sağlık hizmeti sağlayıcılarını doğrudan buluşturarak zaman kazandırır ve şeffaf bir deneyim sağlar.",
      aboutBoxes: [
        { title: "✅ Doğrulanmış Kurumlar", desc: "Tüm kurumlar kalite ve güvenlik kriterleriyle doğrulanmıştır." },
        { title: "🌍 Uluslararası Hizmet", desc: "Farklı ülkelerden gelen hastalar için çok dilli destek sağlanır." },
        { title: "💬 7/24 Danışmanlık", desc: "Her an ulaşabileceğiniz uzman danışman ekibimizle iletişime geçin." }
      ],
      contactTitle: "İletişim",
      contactDesc: "MEDIVIA ekibi, sağlık turizmi alanında kamu destekli iş birliklerine ve yenilikçi projelere açıktır. Görüşme talebi veya ortaklık için bize ulaşın.",
      footer: "Güvenli, şeffaf ve yenilikçi sağlık hizmeti deneyimi",
      email: "E-posta Gönder",
    },
    EN: {
      heroTitle: "Digital Health Tourism Platform",
      heroDesc: "Discover Turkey's leading healthcare institutions with MEDIVIA. Reliable, fast and transparent health tourism experience.",
      searchPlaceholder: "Search for a Hospital, Clinic or Treatment...",
      buttonSearch: "Search",
      offer: "Get a Quote",
      navHospitals: "Hospitals",
      navAbout: "About Us",
      navContact: "Contact",
      aboutTitle: "Why MEDIVIA?",
      aboutDesc: "MEDIVIA provides reliable information, accurate guidance and digital convenience in health tourism. It connects patients directly with providers, saving time and offering transparency.",
      aboutBoxes: [
        { title: "✅ Verified Institutions", desc: "All institutions are verified for quality and safety standards." },
        { title: "🌍 International Service", desc: "Multilingual support is provided for patients from different countries." },
        { title: "💬 24/7 Consultation", desc: "Reach our expert consultant team anytime you need." }
      ],
      contactTitle: "Contact",
      contactDesc: "The MEDIVIA team is open to public-supported collaborations and innovative projects in health tourism. Contact us for partnerships or meetings.",
      footer: "Safe, transparent and innovative healthcare experience",
      email: "Send Email",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center scroll-smooth relative">
      <header className="w-full shadow-md py-4 px-8 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2 text-green-600 font-bold text-2xl cursor-pointer">
          <HeartPulse className="text-green-600" size={28} />
          <span>MEDIVIA</span>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#hospitals" className="hover:text-green-600 transition-colors">{t.navHospitals}</a>
          <a href="#about" className="hover:text-green-600 transition-colors">{t.navAbout}</a>
          <a href="#contact" className="hover:text-green-600 transition-colors">{t.navContact}</a>
        </nav>
        <div className="flex items-center gap-3 relative">
          <Button onClick={() => setShowLangMenu(!showLangMenu)} className="bg-white text-green-700 border border-green-500 hover:bg-green-50 px-3 py-1 flex items-center gap-2">
            <Globe size={16} /> {language}
          </Button>
          {showLangMenu && (
            <div className="absolute top-12 right-0 bg-white border border-green-300 rounded-lg shadow-md w-24">
              {Object.keys(translations).map((lang) => (
                <div
                  key={lang}
                  onClick={() => { setLanguage(lang); setShowLangMenu(false); }}
                  className={`cursor-pointer px-4 py-2 text-sm hover:bg-green-100 ${language === lang ? 'bg-green-100 font-semibold text-green-700' : ''}`}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-2">{t.offer}</Button>
        </div>
      </header>

      <section id="hero" className="text-center mt-16 px-4 max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-4 text-green-700">{t.heroTitle}</h1>
        <p className="text-gray-600 mb-6">{t.heroDesc}</p>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-green-400 rounded-xl p-2 w-80 focus:outline-green-600"
          />
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-xl">{t.buttonSearch}</Button>
        </div>
      </section>

      <section id="about" className="bg-green-50 w-full py-16 px-6 text-center scroll-mt-24 md:scroll-mt-40">
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.aboutTitle}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">{t.aboutDesc}</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.aboutBoxes.map((box, index) => (
            <div key={index} className="bg-white shadow-sm rounded-2xl p-6 border border-green-100">
              <h3 className="text-green-700 font-semibold mb-2">{box.title}</h3>
              <p className="text-gray-600 text-sm">{box.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="w-full py-16 px-6 text-center scroll-mt-24 md:scroll-mt-40">
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t.contactTitle}</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t.contactDesc}</p>

        {/* ✅ Gmail yönlendirmesi */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=batu.sut@gmail.com&su=MEDIVIA%20İletişim%20Talebi&body=Merhaba%20MEDIVIA%20ekibi,"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3 inline-block"
        >
          {t.email}
        </a>
      </section>

      <footer className="bg-green-700 text-white w-full py-8 text-center mt-auto">
        <p className="font-medium">© 2025 MEDIVIA | {t.heroTitle}</p>
        <p className="text-sm opacity-80">{t.footer}</p>
      </footer>
    </div>
  );
}
