import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const SoftReservePage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
                        Yeni Nesil Rezervasyon Sistemi
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        Soft<span className="text-indigo-500">Reserve</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        İşletmeniz için hepsi bir arada yönetim çözümü. Randevuları yönetin, müşteri ilişkilerini güçlendirin ve gelirinizi artırın.
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
                            Neden SoftReserve?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            İşletmenizi dijitalleştirmek ve operasyonlarınızı otomatize etmek için ihtiyacınız olan tüm araçlar tek bir platformda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "calendar_month",
                                title: "Akıllı Randevu Yönetimi",
                                desc: "Çakışmaları önleyen, otomatik hatırlatmalar gönderen ve sürükle-bırak özellikli modern takvim."
                            },
                            {
                                icon: "group",
                                title: "CRM ve Müşteri Takibi",
                                desc: "Müşteri geçmişi, tercihleri ve doğum günü gibi özel gün takibi ile kişiselleştirilmiş hizmet sunun."
                            },
                            {
                                icon: "payments",
                                title: "Ödeme ve Faturalandırma",
                                desc: "Online ödeme alma, kaparo sistemi ve otomatik fatura oluşturma özellikleri."
                            },
                            {
                                icon: "inventory_2",
                                title: "Stok Takibi",
                                desc: "Ürün ve hizmet stoklarınızı anlık takip edin, kritik seviye uyarıları alın."
                            },
                            {
                                icon: "bar_chart",
                                title: "Gelişmiş Raporlama",
                                desc: "Günlük, haftalık ve aylık ciro raporları, personel performansı ve müşteri analizleri."
                            },
                            {
                                icon: "campaign",
                                title: "Otomatik Pazarlama",
                                desc: "SMS ve E-posta kampanyaları ile müşterilerinize kampanyalarınızı duyurun."
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
                                Verimliliğinizi %40 Artırın
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                SoftReserve kullanan işletmeler, randevu kaçırma oranlarında %80 azalma ve personel verimliliğinde %40 artış bildirmektedir. Karmaşık Excel dosyalarından ve kağıt defterlerden kurtulun.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "7/24 Online Rezervasyon İmkanı",
                                    "Mobil Uygulama (iOS & Android)",
                                    "Personel Prim Takibi",
                                    "Çoklu Şube Yönetimi"
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
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                                    alt="SoftReserve Dashboard"
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent pointer-events-none"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-indigo-600 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        İşletmenizi Geleceğe Taşıyın
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                        14 günlük ücretsiz deneme süresi ile SoftReserve'in gücünü keşfedin. Kredi kartı gerekmez.
                    </p>
                    <a href="#iletisim" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                        Ücretsiz Deneyin
                    </a>
                </div>
            </section>

            <Contact />
        </Layout>
    );
};

export default SoftReservePage;
