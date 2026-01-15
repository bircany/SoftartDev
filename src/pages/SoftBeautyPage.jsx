import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const SoftBeautyPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block px-4 py-1.5 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium mb-6">
                        Güzellik Merkezleri İçin Özel Çözüm
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        Soft<span className="text-pink-500">Beauty</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Randevularınızı yönetin, seans takibi yapın ve müşteri memnuniyetini en üst seviyeye taşıyın. Güzellik salonları ve klinikler için hepsi bir arada yönetim paneli.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#iletisim" className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-pink-600/30">
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
                            SoftBeauty ile Salonunuzu Dönüştürün
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Dijitalleşen dünyada işletmenizi öne çıkarın. Kağıt kalemden kurtulun, profesyonel yönetime geçin.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "face",
                                title: "Danışan & Seans Takibi",
                                desc: "Danışanlarınızın seanslarını, paket kullanımlarını, cilt analizlerini ve öncesi/sonrası fotoğraflarını dijital ortamda saklayın."
                            },
                            {
                                icon: "calendar_month",
                                title: "Akıllı Randevu Sistemi",
                                desc: "Çakışmaları önleyen akıllı takvim ile randevularınızı yönetin. SMS hatırlatmalarla 'gelmeyen müşteri' sorununu çözün."
                            },
                            {
                                icon: "inventory_2",
                                title: "Stok & Ürün Satışı",
                                desc: "Kabin ürünleri ve satış ürünlerinin stoklarını ayrı ayrı takip edin. Kritik stok uyarıları ile ürünleriniz hiç bitmesin."
                            },
                            {
                                icon: "loyalty",
                                title: "Paket & Kampanya Yönetimi",
                                desc: "Epilasyon, cilt bakımı gibi hizmetler için paketler oluşturun. Taksit takibi ve kalan seans kontrolünü otomatik yapın."
                            },
                            {
                                icon: "account_balance_wallet",
                                title: "Kasa & Gelir Gider",
                                desc: "Günlük ciro, personel primleri, işletme giderleri ve kârlılık raporlarına tek tıkla ulaşın."
                            },
                            {
                                icon: "notifications_active",
                                title: "Otomatik Hatırlatma",
                                desc: "Randevu günü, doğum günü veya kampanya bildirimlerini SMS ve WhatsApp üzerinden otomatik gönderin."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-pink-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UI Showcase */}
            <section className="py-24 bg-gray-50 dark:bg-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Güzellik Merkeziniz Cebinizde
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                SoftBeauty mobil uyumlu arayüzü sayesinde işletmenizi dilediğiniz yerden yönetmenizi sağlar. İster tablet, ister telefon, ister bilgisayar.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Personel Performans Takibi (Prim Usulü)",
                                    "Müşteri Sadakat Programı",
                                    "Online Randevu Sayfası",
                                    "E-Fatura & E-Arşiv Entegrasyonu"
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
                                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1000"
                                    alt="SoftBeauty Dashboard"
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </Layout>
    );
};

export default SoftBeautyPage;
