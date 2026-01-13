import React from 'react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
    return (
        <section className="relative z-10 py-24 bg-white dark:bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary font-semibold text-sm tracking-wider">02</span>
                            <div className="w-8 h-px bg-primary"></div>
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">ÜRÜNLERİMİZ</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                            İşletmeniz İçin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Yenilikçi Çözümler</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            Restoran çözümlerinden yapay zeka entegrasyonlarına kadar işletmenizi büyütecek ürünlerimizi keşfedin.
                        </p>
                        <Link to="/urunlerimiz" className="group flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors">
                            Tüm Ürünleri İncele
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* SoftReserve */}
                    <Link to="/softreserve" className="group relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute top-4 right-4">
                            <span className="material-symbols-outlined text-gray-300 dark:text-white/20 text-6xl group-hover:text-indigo-500/20 transition-colors">calendar_month</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                            <span className="material-symbols-outlined text-2xl">event_available</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">SoftReserve</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Güzellik merkezleri ve klinikler için yapay zeka destekli randevu ve müşteri yönetim sistemi.
                        </p>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                            <span>Detaylı Bilgi</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>

                    {/* HorecaPOS */}
                    <Link to="/urunlerimiz" className="group relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute top-4 right-4">
                            <span className="material-symbols-outlined text-gray-300 dark:text-white/20 text-6xl group-hover:text-orange-500/20 transition-colors">point_of_sale</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                            <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">HorecaPOS</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Restoran ve kafeler için modern, hızlı ve bulut tabanlı adisyon ve stok takip yazılımı.
                        </p>
                        <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 text-sm font-medium">
                            <span>Detaylı Bilgi</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>

                    {/* Custom Solutions */}
                    <Link to="/urunlerimiz" className="group relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute top-4 right-4">
                            <span className="material-symbols-outlined text-gray-300 dark:text-white/20 text-6xl group-hover:text-purple-500/20 transition-colors">psychology</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                            <span className="material-symbols-outlined text-2xl">auto_fix_high</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Özel Çözümler</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            İşletmenize özel yapay zeka entegrasyonları, QR menü ve dijital dönüşüm çözümleri.
                        </p>
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm font-medium">
                            <span>Detaylı Bilgi</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
