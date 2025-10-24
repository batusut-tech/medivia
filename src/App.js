import { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import Button  from "./components/ui/button";
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
      hospitals: [
        {
          name: "X Hastanesi",
          location: "İstanbul",
          service: "Genel Cerrahi ve Check-up Paketleri",
          rating: 4.8,
          phone: "+90 212 000 00 00",
          desc: "Uluslararası akreditasyona sahip, ileri teknolojiyle donatılmış bir sağlık merkezi.",
          details: "X Hastanesi 20 yıllık deneyimiyle, yurt içi ve yurt dışı hastalara multidisipliner tedavi hizmeti sunmaktadır.",
        },
        {
          name: "Y Klinik",
          location: "İzmir",
          service: "Diş Estetiği ve Ortodonti",
          rating: 4.7,
          phone: "+90 232 000 00 00",
          desc: "Modern diş tedavi yöntemleriyle estetik gülüş tasarımında öncü.",
          details: "Y Klinik, uluslararası diş hekimliği standartlarına uygun ekipmanlarla kişiye özel estetik çözümler üretmektedir.",
        },
        {
          name: "Z Tıp Merkezi",
          location: "Antalya",
          service: "Saç Ekimi ve Deri Tedavileri",
          rating: 4.9,
          phone: "+90 242 000 00 00",
          desc: "Uluslararası hastalar için VIP hizmet sunan medikal estetik merkezi.",
          details: "Z Tıp Merkezi, medikal estetik alanında ileri teknoloji kullanarak doğal ve kalıcı sonuçlar sunar.",
        },
      ],
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
      hospitals: [
        {
          name: "X Hospital",
          location: "Istanbul",
          service: "General Surgery and Check-up Packages",
          rating: 4.8,
          phone: "+90 212 000 00 00",
          desc: "An internationally accredited medical center equipped with advanced technology.",
          details: "X Hospital offers multidisciplinary medical services to both domestic and international patients with over 20 years of experience.",
        },
        {
          name: "Y Clinic",
          location: "Izmir",
          service: "Dental Aesthetics and Orthodontics",
          rating: 4.7,
          phone: "+90 232 000 00 00",
          desc: "A leader in aesthetic smile design using modern dental treatments.",
          details: "Y Clinic provides personalized aesthetic dental solutions with international quality standards.",
        },
        {
          name: "Z Medical Center",
          location: "Antalya",
          service: "Hair Transplant and Skin Treatments",
          rating: 4.9,
          phone: "+90 242 000 00 00",
          desc: "A VIP medical aesthetic center serving international patients.",
          details: "Z Medical Center uses advanced technology to deliver natural and lasting results in medical aesthetics.",
        },
      ],
    },
  };

  const t = translations[language];

  const filtered = t.hospitals.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.service.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

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
                <div key={lang} onClick={() => { setLanguage(lang); setShowLangMenu(false); }} className={`cursor-pointer px-4 py-2 text-sm hover:bg-green-100 ${language === lang ? 'bg-green-100 font-semibold text-green-700' : ''}`}>
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
          <input type="text" placeholder={t.searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} className="border border-green-400 rounded-xl p-2 w-80 focus:outline-green-600" />
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-xl">{t.buttonSearch}</Button>
        </div>
      </section>

      <section id="hospitals" className="grid md:grid-cols-3 gap-6 my-20 px-8 w-full max-w-6xl scroll-mt-24 md:scroll-mt-40">
        {filtered.map((h, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}>
            <Card onClick={() => setSelectedHospital(h)} className="shadow-md rounded-2xl border-green-200 border bg-white cursor-pointer hover:shadow-lg">
              <CardContent className="p-5 flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-green-700">{h.name}</h2>
                <p className="text-gray-600">{h.service}</p>
                <div className="flex items-center text-gray-500 text-sm gap-1"><MapPin size={14} /> {h.location}</div>
                <div className="flex items-center text-gray-500 text-sm gap-1"><Phone size={14} /> {h.phone}</div>
                <p className="text-gray-500 text-sm italic">{h.desc}</p>
                <div className="text-yellow-500 font-bold">⭐ {h.rating}</div>
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl mt-2 flex items-center gap-1"><Info size={16} /> {language === "TR" ? "Detaylı Bilgi" : "More Info"}</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <AnimatePresence>
        {selectedHospital && (
          <motion.div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50" onClick={() => setSelectedHospital(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <h2 className="text-2xl font-bold text-green-700 mb-2">{selectedHospital.name}</h2>
              <p className="text-gray-700 mb-3">{selectedHospital.service}</p>
              <p className="text-gray-600 mb-2">{selectedHospital.details}</p>
              <p className="text-gray-500 text-sm mb-2"><MapPin size={14} className="inline mr-1" /> {selectedHospital.location}</p>
              <p className="text-gray-500 text-sm mb-4"><Phone size={14} className="inline mr-1" /> {selectedHospital.phone}</p>
              <Button onClick={() => setSelectedHospital(null)} className="bg-green-600 hover:bg-green-700 text-white w-full">{language === "TR" ? "Kapat" : "Close"}</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3">{t.email}</Button>
      </section>

      <footer className="bg-green-700 text-white w-full py-8 text-center mt-auto">
        <p className="font-medium">© 2025 MEDIVIA | {t.heroTitle}</p>
        <p className="text-sm opacity-80">{t.footer}</p>
      </footer>
    </div>
  );
}