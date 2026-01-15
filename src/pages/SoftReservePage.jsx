import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const SoftReservePage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
                        Restoran ve İşletmeler İçin Rezervasyon Çözümü
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        Soft<span className="text-indigo-500">Reserve</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Restoran, gece kulübü ve etkinlik mekanları için özel olarak tasarlanmış yeni nesil rezervasyon yönetim sistemi. Masalarınızı verimli yönetin, rezervasyon kaçırmayın.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#iletisim" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-600/30">
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
                            Dolu Masalar, Mutlu Müşteriler
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Telefon trafiğiyle uğraşmadan tüm rezervasyonlarınızı tek ekrandan yönetin.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "table_restaurant",
                                title: "Masa & Yerleşim Yönetimi",
                                desc: "İşletmenizin krokisi üzerinde rezervasyonları görsel olarak planlayın. Boş/Dolu masaları anlık görün."
                            },
                            {
                                icon: "calendar_clock",
                                title: "Online Rezervasyon",
                                desc: "Müşterileriniz web sitenizden veya sosyal medya hesaplarınızdan 7/24 rezervasyon yapabilsin."
                            },
                            {
                                icon: "confirmation_number",
                                title: "SMS & WhatsApp Teyit",
                                desc: "Rezervasyon hatırlatmaları ve teyit mesajlarını otomatik göndererek 'No-Show' oranını düşürün."
                            },
                            {
                                icon: "payments",
                                title: "Kaparo & Ön Ödeme",
                                desc: "Grup rezervasyonları veya özel günler için kredi kartı ile güvenli kaparo/ön ödeme alın."
                            },
                            {
                                icon: "groups",
                                title: "Müşteri Tanıma (CRM)",
                                desc: "Müdavimlerinizi tanıyın. Masa tercihleri, alerjiler ve özel günleri sistemde kayıtlı olsun."
                            },
                            {
                                icon: "list_alt",
                                title: "Akıllı Bekleme Listesi",
                                desc: "Dolu günlerde müşterilerinizi bekleme listesine alın, yer açılınca otomatik bildirim gönderin."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
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
                                Operasyonel Yükünüzü Hafifletin
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                SoftReserve, hostes ve rezervasyon ekibinizin en büyük yardımcısıdır. Karmaşık masa planlarını basitleştirir, misafir memnuniyetini artırır.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Google Rezervasyon Entegrasyonu",
                                    "VIP Müşteri Yönetimi",
                                    "Etkinlik & Bilet Satışı",
                                    "Detaylı Raporlama ve Analiz"
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
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
                                    alt="SoftReserve Table Management"
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent pointer-events-none"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-indigo-600 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Rezervasyonlarınızı Dijitale Taşıyın
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                        SoftReserve ile işletmenizin doluluk oranını artırın, operasyonel hataları sıfıra indirin.
                    </p>
                    <a href="#iletisim" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                        Ücretsiz Demo İste
                    </a>
                </div>
            </section>

            <Contact />
        </Layout>
    );
};

export default SoftReservePage;
