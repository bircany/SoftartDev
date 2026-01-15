import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const HorecaPosPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6">
                        Yeni Nesil POS & Adisyon Sistemi
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        Horeca<span className="text-orange-500">POS</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Restoran, kafe ve oteller için geliştirilmiş, kullanım kolaylığı ve hızıyla işletmenize güç katan bulut tabanlı otomasyon çözümü.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#iletisim" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-600/30">
                            Hemen Başlayın
                        </a>
                        <a href="#iletisim" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl font-semibold transition-all backdrop-blur-md">
                            Demo Talep Edin
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Neden HorecaPOS?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            İşletmenizin ihtiyacı olan tüm özellikleri, modern ve kullanıcı dostu bir arayüzde birleştirdik.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "point_of_sale",
                                title: "Hızlı Satış Ekranı",
                                desc: "Minimum tıklama ile maksimum hız. Yoğun saatlerde bile siparişleri saniyeler içinde alın."
                            },
                            {
                                icon: "table_restaurant",
                                title: "Masa & Salon Yönetimi",
                                desc: "Kat planınızı özelleştirin, masa durumlarını anlık takip edin, rezervasyonları yönetin."
                            },
                            {
                                icon: "soup_kitchen",
                                title: "Mutfak Ekranı (KDS)",
                                desc: "Siparişleri anlık olarak mutfağa iletin, hazırlık sürelerini ve servis hızını optimize edin."
                            },
                            {
                                icon: "inventory",
                                title: "Stok & Reçete",
                                desc: "Ürün reçetelerinizi oluşturun, stoklarınızı gramajlı olarak anlık takip edin."
                            },
                            {
                                icon: "person",
                                title: "Garson Uygulaması",
                                desc: "Mobil uygulama ile siparişleri masada alın, anında mutfağa iletin, servis kalitenizi artırın."
                            },
                            {
                                icon: "insights",
                                title: "Gelişmiş Raporlar",
                                desc: "Satış, stok, personel ve ciro raporlarına dilediğiniz yerden anında ulaşın."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-orange-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UI Showcase / Detail Section */}
            <section className="py-24 bg-gray-50 dark:bg-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                İşletmenizin Kontrolü Elinizde
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                HorecaPOS ile işletmenizdeki tüm süreçleri tek bir ekrandan yönetin. Kaçakları önleyin, maliyetlerinizi düşürün ve karlılığınızı artırın.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Bulut Tabanlı & Güvenli Yedekleme",
                                    "İnternet Kesintisinde Çevrimdışı Çalışma",
                                    "Yemeksepeti & Getir Entegrasyonu",
                                    "Detaylı Maliyet Analizi",
                                    "QR Menü Entegrasyonu"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1556742049-09329e2e2255?auto=format&fit=crop&q=80&w=1000"
                                    alt="HorecaPOS Dashboard"
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent pointer-events-none"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/30 rounded-full blur-3xl"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Mutlu İşletme</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">%35</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Ciro Artışı</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">7/24</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Canlı Destek</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">%100</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Müşteri Memnuniyeti</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-900 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-600/10"></div>
                <div className="absolute -left-20 top-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute -right-20 bottom-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        İşletmenizi HorecaPOS ile Büyütün
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Kurulum maliyeti yok, sürpriz ücretler yok. Hemen demo talep edin, uzman ekibimiz size özel sunum yapsın.
                    </p>
                    <a href="#iletisim" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/20 hover:scale-105 transition-all">
                        Ücretsiz Demo Talep Et
                    </a>
                </div>
            </section>

            <Contact />
        </Layout>
    );
};

export default HorecaPosPage;
