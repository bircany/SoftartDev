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
            <Link to="/" className="relative flex items-center z-50 md:w-48">
                <img
                    src="/images/logos/softart.png"
                    alt="SoftArtStudios Logo"
                    className="h-16 w-auto object-contain md:absolute md:top-1/2 md:-left-24 md:-translate-y-1/2 md:h-120 md:max-w-none"
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
                <Link
                    to="/hizmetler"
                    className={`hover:text-primary transition-colors ${isActive('/hizmetler') ? 'text-primary' : ''}`}
                >
                    Hizmetler
                </Link>
                <Link
                    to="/projeler"
                    className={`hover:text-primary transition-colors ${isActive('/projeler') ? 'text-primary' : ''}`}
                >
                    Projeler
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
                <Link
                    to="/#iletisim"
                    className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary transition-colors shadow-lg shadow-primary/30 flex items-center gap-2"
                >
                    Projenizi Başlatalım
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
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
                <div className="absolute top-full left-0 w-full bg-white dark:bg-surface-dark shadow-lg py-4 px-6 md:hidden flex flex-col gap-4 border-t border-gray-100 dark:border-white/10">
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
                    <Link
                        to="/hizmetler"
                        className={`py-2 ${isActive('/hizmetler') ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Hizmetler
                    </Link>
                    <Link
                        to="/projeler"
                        className={`py-2 ${isActive('/projeler') ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projeler
                    </Link>
                    <a className="text-gray-600 dark:text-gray-300 hover:text-primary py-2" href="/#iletisim" onClick={() => setIsMenuOpen(false)}>İletişim</a>
                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                    <Link
                        to="/#iletisim"
                        className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold text-center flex items-center justify-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projenizi Başlatalım
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
