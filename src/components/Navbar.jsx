import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
            <Link to="/" className="relative flex items-center w-20 md:w-48 z-50">
                <img
                    src="/images/logos/softart.png"
                    alt="SoftArtStudios Logo"
                    className="absolute top-1/2 -left-12 -translate-y-1/2 h-40 md:-left-32 md:h-[30rem] w-auto max-w-none object-contain"
                />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                <Link
                    to="/"
                    className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : ''}`}
                >
                    Ana Sayfa
                </Link>
                <Link
                    to="/hakkimizda"
                    className={`hover:text-primary transition-colors ${isActive('/hakkimizda') ? 'text-primary' : ''}`}
                >
                    Hakkımızda
                </Link>
                <div className="relative group">
                    <Link
                        to="/urunlerimiz"
                        className={`hover:text-primary transition-colors flex items-center gap-1 ${isActive('/urunlerimiz') ? 'text-primary' : ''}`}
                    >
                        Ürünlerimiz
                        <span className="material-symbols-outlined text-sm pt-0.5 transition-transform group-hover:rotate-180">expand_more</span>
                    </Link>

                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-72">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 p-2 overflow-hidden">
                            {[
                                { name: 'SoftBeauty', desc: 'Güzellik Merkezi Yönetimi', link: '/softbeauty', icon: 'face', color: 'text-pink-500', bg: 'bg-pink-500/10' },
                                { name: 'HorecaPOS', desc: 'Adisyon & POS Sistemi', link: '/horecapos', icon: 'point_of_sale', color: 'text-orange-500', bg: 'bg-orange-500/10' },
                                { name: 'SoftReserve', desc: 'Restoranlar İçin Rezervasyon', link: '/softreserve', icon: 'calendar_month', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
                                { name: 'Tüm Ürünler', desc: 'Tüm çözümlerimizi inceleyin', link: '/urunlerimiz', icon: 'apps', color: 'text-primary', bg: 'bg-primary/10' }
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.link}
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group/item"
                                >
                                    <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white text-sm group-hover/item:text-primary transition-colors">
                                            {item.name}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            {item.desc}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Link
                    to="/hizmetler"
                    className={`hover:text-primary transition-colors ${isActive('/hizmetler') ? 'text-primary' : ''}`}
                >
                    Hizmetler
                </Link>
                <a className="hover:text-primary transition-colors" href="/#iletisim">İletişim</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    aria-label="Toggle theme"
                >
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                        {isDark ? 'light_mode' : 'dark_mode'}
                    </span>
                </button>
                <a
                    href="/#iletisim"
                    className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary transition-colors shadow-lg shadow-primary/30 flex items-center gap-2"
                >
                    Projenizi Başlatalım
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center"
                    aria-label="Toggle theme"
                >
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                        {isDark ? 'light_mode' : 'dark_mode'}
                    </span>
                </button>
                <button
                    className="text-gray-900 dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-surface-dark shadow-lg py-4 px-6 md:hidden flex flex-col gap-4 border-t border-gray-100 dark:border-white/10 max-h-[80vh] overflow-y-auto">
                    <Link
                        to="/"
                        className={`py-2 ${isActive('/') ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Ana Sayfa
                    </Link>
                    <Link
                        to="/hakkimizda"
                        className={`py-2 ${isActive('/hakkimizda') ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Hakkımızda
                    </Link>

                    {/* Mobile Products Submenu */}
                    <div className="py-2">
                        <div className="text-gray-900 dark:text-white font-medium mb-3">Ürünlerimiz</div>
                        <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 dark:border-white/10">
                            <Link
                                to="/softbeauty"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm flex items-center gap-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="material-symbols-outlined text-base">face</span>
                                SoftBeauty
                            </Link>
                            <Link
                                to="/horecapos"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm flex items-center gap-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="material-symbols-outlined text-base">point_of_sale</span>
                                HorecaPOS
                            </Link>
                            <Link
                                to="/softreserve"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm flex items-center gap-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="material-symbols-outlined text-base">calendar_month</span>
                                SoftReserve
                            </Link>
                            <Link
                                to="/urunlerimiz"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm flex items-center gap-2 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="material-symbols-outlined text-base">apps</span>
                                Tüm Ürünler
                            </Link>
                        </div>
                    </div>

                    <Link
                        to="/hizmetler"
                        className={`py-2 ${isActive('/hizmetler') ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Hizmetler
                    </Link>
                    <a className="text-gray-600 dark:text-gray-300 hover:text-primary py-2" href="/#iletisim" onClick={() => setIsMenuOpen(false)}>İletişim</a>
                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                    <a
                        href="/#iletisim"
                        className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold text-center flex items-center justify-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projenizi Başlatalım
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
