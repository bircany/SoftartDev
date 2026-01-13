import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mesajınız başarıyla gönderildi! (Bu bir demosu)");
    };

    return (
        <footer id="iletisim" className="relative z-10 pt-24 pb-10 px-6 bg-gray-50 dark:bg-black/40">
            <div className="max-w-7xl mx-auto">
                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary font-semibold text-sm tracking-wider">07</span>
                            <div className="w-8 h-px bg-primary"></div>
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">BİZİMLE İLETİŞİME GEÇİN</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Projenizi hayata <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">geçirelim</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mb-10">
                            Dijital dünyada fark yaratmak istiyorsanız, doğru yerdesiniz. Projenizi birlikte hayata geçirelim ve işinizi bir üst seviyeye taşıyalım.
                        </p>

                        <div className="space-y-4">
                            <a href="tel:+905347665616" className="flex items-center gap-4 text-gray-900 dark:text-white hover:text-primary transition-colors group">
                                <span className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                </span>
                                +90 534 766 56 16
                            </a>
                            <a href="tel:+905530359119" className="flex items-center gap-4 text-gray-900 dark:text-white hover:text-primary transition-colors group">
                                <span className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                </span>
                                +90 553 035 91 19
                            </a>
                            <a href="mailto:info@softartstudios.com" className="flex items-center gap-4 text-gray-900 dark:text-white hover:text-primary transition-colors group">
                                <span className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                </span>
                                info@softartstudios.com
                            </a>
                            <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                                <span className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                </span>
                                Samsun, Türkiye
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-3xl shadow-2xl shadow-primary/5 border border-gray-200 dark:border-white/10 relative overflow-hidden">
                        <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">İsim</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 dark:text-white" placeholder="Adınız Soyadınız" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">E-posta</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 dark:text-white" placeholder="ornek@email.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
                                <textarea rows="4" required className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 dark:text-white resize-none" placeholder="Projenizi detaylı olarak anlatın, nasıl yardımcı olabileceğimizi öğrenin"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                                Projenizi hayata geçirelim
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/logos/softart.png"
                                alt="SoftArtStudios Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        {/* Links */}
                        <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
                            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                            <Link to="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link>
                            <Link to="/projeler" className="hover:text-primary transition-colors">Projeler</Link>
                            <Link to="/hizmetler" className="hover:text-primary transition-colors">Hizmetler</Link>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                                <span className="material-symbols-outlined text-base">photo_camera</span>
                                Instagram
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="text-sm text-gray-500">
                            © Softart Studios telif hakkı 2025
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
