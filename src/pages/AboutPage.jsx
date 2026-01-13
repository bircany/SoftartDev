import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
    const softwareServices = [
        { icon: "code", title: "Web Geliştirme", desc: "Modern, responsive ve kullanıcı dostu web siteleri" },
        { icon: "smartphone", title: "Mobil Uygulama Geliştirme", desc: "iOS ve Android için native ve cross-platform uygulamalar" },
        { icon: "ads_click", title: "SEO ve Reklam Yönetimi", desc: "Google'da üst sıralarda yer almanızı sağlayacak stratejiler" },
        { icon: "share", title: "Sosyal Medya Yönetimi", desc: "Markanızı güçlendiren içerik ve stratejiler" },
        { icon: "palette", title: "Marka Kimliği Yaratma", desc: "Logo tasarımı ve kurumsal kimlik çözümleri" },
        { icon: "article", title: "İçerik ve Strateji Planı", desc: "Markanızın hikayesini anlatan içerikler" },
    ];

    const mediaServices = [
        { icon: "movie", title: "Prodüksiyon Çekimi", desc: "Markanızın hikayesini görsel olarak anlatan videolar" },
        { icon: "mic", title: "Podcast Stüdyo Çekimi", desc: "Samsun'daki ilk podcast stüdyomuzda profesyonel ses kayıtları" },
        { icon: "video_settings", title: "Post Prodüksiyon", desc: "Video düzenleme ve son rötuş hizmetleri" },
        { icon: "photo_camera", title: "Fotoğrafçılık", desc: "Profesyonel ürün ve kurumsal fotoğraf çekimleri" },
        { icon: "auto_stories", title: "Hikaye Anlatımı", desc: "Markanızın hikayesini etkileyici şekilde aktarma" },
    ];

    const marqueeItems = [
        "Rum Meyhanesi Samsun",
        "Detay Oto Market",
        "Deko Plastik",
        "Mengerler Samsun Mercedes Benz Bayi",
        "Öküz Samsun"
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative z-10 py-24 md:py-32 px-6 max-w-7xl mx-auto text-center">
                <div className="animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        360° Dijital Çözümler
                    </div>

                    <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-8">
                        Softart <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Studios</span>
                    </h1>

                    <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            Fikirlerinizi gerçeğe dönüştürün. <span className="text-gray-900 dark:text-white font-medium">SoftArt Studios</span>, projelerinizi hayata geçirmek için tüm dijital araçları sunar. Proje fikrinizle gelin, biz onu mobil uygulamadan web geliştirmeye, yapay zeka ve otomasyon çözümlerinden SaaS yazılıma kadar hayata geçirelim.
                        </p>
                        <p>
                            Medya çözümlerimizle hikayenizi anlatın. Post prodüksiyon ve prodüksiyon hizmetleri, podcast stüdyo çekimleri ve yaratıcı hikaye tasarımıyla markanızın sesini ve görünümünü etkileyici bir şekilde ortaya çıkarıyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Software Services */}
            <section className="relative z-10 py-20 px-6 bg-gray-50 dark:bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
                            <span className="material-symbols-outlined text-base">code</span>
                            Yazılım Çözümleri
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                            Yazılım <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hizmetleri</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {softwareServices.map((service, index) => (
                            <div key={index} className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary text-2xl">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Services */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-500 mb-4">
                            <span className="material-symbols-outlined text-base">movie</span>
                            Medya Çözümleri
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                            Medya <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Hizmetleri</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mediaServices.map((service, index) => (
                            <div key={index} className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-pink-500 text-2xl">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="relative z-10 py-12 border-y border-gray-200 dark:border-white/10 overflow-hidden bg-gray-50 dark:bg-white/5">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                        <div key={index} className="mx-8 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                {item.charAt(0)}
                            </div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-lg whitespace-nowrap">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        Projenizi hayata <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">geçirelim</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <a href="mailto:info@softartstudios.com" className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-900 dark:text-white hover:border-primary transition-colors">
                            <span className="material-symbols-outlined text-primary">mail</span>
                            info@softartstudios.com
                        </a>
                        <div className="flex items-center gap-3 px-6 py-3 text-gray-600 dark:text-gray-400">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            Samsun, Türkiye
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-8 px-6 border-t border-gray-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">S</div>
                        <span className="text-xl font-display font-bold tracking-tight text-gray-900 dark:text-white">SoftArtStudios</span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
                        <a href="/" className="hover:text-primary transition-colors">Ana Sayfa</a>
                        <a href="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</a>
                        <a href="/#projeler" className="hover:text-primary transition-colors">Projeler</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-500">
                        © Softart Studios telif hakkı 2025
                    </div>
                </div>
            </footer>
        </Layout>
    );
};

export default AboutPage;
