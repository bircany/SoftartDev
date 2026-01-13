import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('tech');

    const techServices = [
        {
            icon: "code",
            title: "Web Geliştirme",
            desc: "Next.js ve React ile modern, SEO uyumlu ve performanslı web siteleri.",
            color: "text-primary",
            gradient: "from-primary/20 to-primary/5",
            hoverCheck: "group-hover:translate-x-1"
        },
        {
            icon: "smartphone",
            title: "Mobil Uygulama",
            desc: "iOS ve Android için native kalitede cross-platform mobil uygulamalar.",
            color: "text-blue-400",
            gradient: "from-blue-500/20 to-blue-500/5",
            hoverCheck: "group-hover:translate-x-1"
        },
        {
            icon: "smart_toy",
            title: "Yapay Zeka & Veri",
            desc: "İş süreçlerinizi optimize eden yapay zeka çözümleri ve veri analitiği.",
            color: "text-emerald-400",
            gradient: "from-emerald-500/20 to-emerald-500/5",
            hoverCheck: "group-hover:translate-x-1"
        }
    ];

    const mediaServices = [
        {
            icon: "movie",
            title: "Video Prodüksiyon",
            desc: "Tanıtım filmleri, reklam kurguları ve profesyonel video içerik üretimi.",
            color: "text-red-500",
            gradient: "from-red-500/20 to-red-500/5",
            hoverCheck: "group-hover:translate-x-1"
        },
        {
            icon: "share",
            title: "Sosyal Medya",
            desc: "Markanızın dijital varlığını güçlendiren stratejik sosyal medya yönetimi.",
            color: "text-purple-500",
            gradient: "from-purple-500/20 to-purple-500/5",
            hoverCheck: "group-hover:translate-x-1"
        },
        {
            icon: "palette",
            title: "Marka & Tasarım",
            desc: "Kurumsal kimlik, logo tasarımı ve UX/UI tasarım hizmetleri.",
            color: "text-orange-500",
            gradient: "from-orange-500/20 to-orange-500/5",
            hoverCheck: "group-hover:translate-x-1"
        }
    ];

    const currentServices = activeTab === 'tech' ? techServices : mediaServices;

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 max-w-7xl mx-auto text-center pb-32 pt-20">
            <div className="max-w-5xl animate-fade-in-up">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    360° Dijital Ajans
                </div>

                <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-gray-900 dark:text-white tracking-tight">
                    Fikirlerinizi <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Gerçeğe Dönüştürüyoruz</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Teknolojinin gücünü yaratıcılıkla birleştiren bütüncül yaklaşımla, işletmenizin dijital dönüşümünü sağlıyoruz. Yazılımdan medyaya, her alanda yanınızdayız.
                </p>

                {/* CTA Buttons - Moved Up */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
                    <a href="#iletisim" className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-primary/40 transition-all hover:scale-105 hover:shadow-primary/60">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                        <span className="relative flex items-center gap-2">
                            Projenizi Başlatalım
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                    </a>
                    <Link to="/hizmetler" className="px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center gap-2 group">
                        <span className="material-symbols-outlined group-hover:text-primary transition-colors">play_circle</span>
                        Tanıtım Videosu
                    </Link>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <div className="bg-gray-100 dark:bg-white/5 p-1 rounded-full border border-gray-200 dark:border-white/10 flex relative">
                        {/* Active Background Animation can be added here if needed */}
                        <button
                            onClick={() => setActiveTab('tech')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'tech'
                                ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-white/5'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            Yazılım & Teknoloji
                        </button>
                        <button
                            onClick={() => setActiveTab('media')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'media'
                                ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-white/5'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            Medya & Kreatif
                        </button>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentServices.map((service, index) => (
                        <Link
                            key={index}
                            to="/hizmetler"
                            className="group relative bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-left"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <span className={`material-symbols-outlined ${service.color} text-xl`}>{service.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                            <div className={`flex items-center gap-2 ${service.color} text-sm font-medium`}>
                                <span>Detaylar</span>
                                <span className={`material-symbols-outlined text-sm transition-transform ${service.hoverCheck}`}>arrow_forward</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-6 h-10 rounded-full border-2 border-gray-500/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
