import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
                    <div className="bg-white/5 p-1 rounded-full border border-white/10 flex">
                        <button className="px-6 py-2 rounded-full bg-white/10 text-white font-medium shadow-sm border border-white/5 transition-all">
                            Yazılım & Teknoloji
                        </button>
                        <button className="px-6 py-2 rounded-full text-gray-400 font-medium hover:text-white transition-all">
                            Medya & Kreatif
                        </button>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link to="/hizmetler" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-left">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-xl">code</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Web Geliştirme</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">Next.js ve React ile modern, SEO uyumlu ve performanslı web siteleri.</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                            <span>Detaylar</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>

                    <Link to="/hizmetler" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-left">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-blue-400 text-xl">smartphone</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Mobil Uygulama</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">iOS ve Android için native kalitede cross-platform mobil uygulamalar.</p>
                        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                            <span>Detaylar</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>

                    <Link to="/hizmetler" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-left">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-emerald-400 text-xl">smart_toy</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Yapay Zeka & Veri</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">İş süreçlerinizi optimize eden yapay zeka çözümleri ve veri analitiği.</p>
                        <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                            <span>Detaylar</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>
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
