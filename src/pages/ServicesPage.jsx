import React from 'react';
import Layout from '../components/Layout';

const ServicesPage = () => {
    return (
        <Layout>
            <div className="pt-32 pb-20 bg-gray-50 dark:bg-black/20 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">Uzmanlık Alanlarımız</span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                            Dijital Çözüm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hizmetlerimiz</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Markanızı dijital dünyada güçlendirmek için ihtiyaç duyduğunuz tüm kreatif ve teknik çözümler.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* Video Kurgu & Prodüksiyon Section */}
                        <section id="produksiyon" className="group">
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
                                        <span className="material-symbols-outlined text-4xl">movie</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                        Video Kurgu ve Prodüksiyon
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                        Markanızın hikayesini sinematik bir dille anlatıyoruz. Profesyonel ekipmanlarımız ve yaratıcı ekibimizle, izleyicileri etkileyen ve harekete geçiren görsel içerikler üretiyoruz.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Tanıtım ve Reklam Filmleri",
                                            "YouTube İçerik Editörlüğü",
                                            "Drone Çekimleri",
                                            "Müzik Klibi Prodüksiyonu",
                                            "Etkinlik ve Lansman Çekimi",
                                            "Color Grading & Post Prodüksiyon"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl">
                                                <span className="material-symbols-outlined text-red-500">check_circle</span>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500">
                                        <img
                                            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000"
                                            alt="Video Production"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="material-symbols-outlined">auto_videocam</span>
                                                    <span className="font-bold">Profesyonel Ekipmanlar</span>
                                                </div>
                                                <p className="text-sm text-white/80">4K çekim kalitesi ve profesyonel ses sistemleri ile en iyi sonucu garanti ediyoruz.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Sosyal Medya Section */}
                        <section id="sosyal-medya" className="group">
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="md:w-1/2">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-pink-500/20 transition-all duration-500">
                                        <img
                                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
                                            alt="Social Media Management"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 mix-blend-overlay"></div>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="w-16 h-16 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-6">
                                        <span className="material-symbols-outlined text-4xl">share</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                        Sosyal Medya Yönetimi
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                        Markanızın sosyal medyadaki sesini buluyoruz. Stratejik içerik planlaması, etkileşim yönetimi ve kreatif tasarımlarla takipçi kitlenizi sadık müşterilere dönüştürüyoruz.
                                    </p>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                title: "İçerik Stratejisi ve Yönetimi",
                                                desc: "Hedef kitlenize uygun, etkileşimi artıran düzenli içerik planlaması."
                                            },
                                            {
                                                title: "Reels ve TikTok Prodüksiyonu",
                                                desc: "Trendlere uygun, viral potansiyeli yüksek kısa dikey videolar."
                                            },
                                            {
                                                title: "Topluluk Yönetimi",
                                                desc: "Yorum ve mesaj yönetimi ile takipçilerinizle sürekli iletişim."
                                            },
                                            {
                                                title: "Influencer Marketing",
                                                desc: "Markanıza uygun influencer işbirlikleri ile erişiminizi artırın."
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-500 shrink-0 flex items-center justify-center mt-1">
                                                    <span className="material-symbols-outlined text-sm">done</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Diğer Hizmetler (Kısa Özet) */}
                        <section className="pt-12 border-t border-gray-200 dark:border-white/10">
                            <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">Diğer Hizmetlerimiz</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Web Geliştirme", icon: "code", desc: "Özel yazılım ve e-ticaret çözümleri." },
                                    { title: "Mobil Uygulama", icon: "smartphone", desc: "iOS ve Android mobil uygulama geliştirme." },
                                    { title: "SEO & Dijital Pazarlama", icon: "ads_click", desc: "Google reklamları ve arama motoru optimizasyonu." }
                                ].map((service, idx) => (
                                    <div key={idx} className="p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-center hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white mx-auto flex items-center justify-center mb-4">
                                            <span className="material-symbols-outlined">{service.icon}</span>
                                        </div>
                                        <h4 className="font-bold text-lg mb-2 dark:text-white">{service.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ServicesPage;
