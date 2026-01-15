import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const QrMenuPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                        Temassız & Dijital Menü Çözümü
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        QR<span className="text-emerald-500">Menu</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Müşterilerinize modern, hızlı ve hijyenik bir deneyim sunun. Menünüzü saniyeler içinde güncelleyin, baskı maliyetlerinden kurtulun.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#iletisim" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-600/30">
                            Hemen Başlayın
                        </a>
                        <a href="#iletisim" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl font-semibold transition-all backdrop-blur-md">
                            Demo İncele
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Neden QR Menü?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            İşletmenizi dijital çağa taşıyan, müşteri memnuniyetini artıran özellikler.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "restaurant_menu",
                                title: "Sınırsız Kategori & Ürün",
                                desc: "Menünüzü dilediğiniz gibi kategorize edin, ürünlerinize yüksek çözünürlüklü görseller ve detaylı açıklamalar ekleyin."
                            },
                            {
                                icon: "translate",
                                title: "Çoklu Dil Desteği",
                                desc: "Turistik bölgeler için ideal. Menünüzü tek tıkla İngilizce, Rusça, Arapça ve diğer dillere çevirin."
                            },
                            {
                                icon: "edit_note",
                                title: "Anlık Güncelleme",
                                desc: "Fiyat değişiklikleri veya ürün eklemeleri için baskı beklemenize gerek yok. Panelden yapın, anında yansısın."
                            },
                            {
                                icon: "room_service",
                                title: "Garson Çagırma",
                                desc: "Müşterileriniz tek tuşla garson çağırabilir veya hesap isteyebilir. Servis hızınızı artırın."
                            },
                            {
                                icon: "recommend",
                                title: "Akıllı Öneriler",
                                desc: "Müşterilerinize 'Bununla iyi gider' gibi öneriler sunarak çapraz satış yapın ve sepet tutarını artırın."
                            },
                            {
                                icon: "reviews",
                                title: "Müşteri Yorumları",
                                desc: "Müşterilerinizin ürünler ve hizmet hakkında geri bildirim bırakmasını sağlayarak işletmenizi geliştirin."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-emerald-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
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
                                Baskı Maliyetlerine Son Verin
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Her fiyat değişikliğinde veya menü yenilemesinde ortaya çıkan baskı ve tasarım maliyetlerinden kurtulun. Doğayı koruyun, bütçenizi koruyun.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Kullanıcı Dostu Yönetim Paneli",
                                    "Özelleştirilebilir Tasarım Temaları",
                                    "Alerjen Uyarıları ve Kalori Bilgisi",
                                    "Sosyal Medya Entegrasyonu"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 max-w-sm mx-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1595079676339-1534801fafde?auto=format&fit=crop&q=80&w=800"
                                    alt="QR Menu Mobile View"
                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent pointer-events-none"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl"></div>
                            <div className="absolute top-10 -right-10 w-40 h-40 bg-teal-500/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Businesses Using QR Menu */}
            <section className="py-24 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
                            <span className="material-symbols-outlined text-sm align-middle mr-1">verified</span>
                            Referanslarımız
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            QR Menü Kullanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">İşletmeler</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Samsun'un önde gelen işletmeleri dijital menü deneyimini bizimle yaşıyor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                name: "Rum Meyhanesi",
                                type: "Meyhane & Restoran",
                                location: "Samsun",
                                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb-D4jR79q09tuOlTmW9yERS_7OgQATK0Ag&s",
                                quote: "Dijital menü sayesinde müşterilerimiz hızlıca sipariş verebiliyor.",
                                bgGradient: "from-slate-800 to-slate-900"
                            },
                            {
                                name: "Mute Ocakbaşı",
                                type: "Ocakbaşı & Kebap",
                                location: "Samsun",
                                image: "https://www.muteqr.com.tr/icon.png?7cac07cc7d15fc60",
                                quote: "Menü güncellemelerini anında yapabilmek işimizi çok kolaylaştırdı.",
                                bgGradient: "from-amber-900 to-red-950"
                            }
                        ].map((business, idx) => (
                            <div key={idx} className="group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                                {/* Logo Area with Gradient Background */}
                                <div className={`relative h-44 bg-gradient-to-br ${business.bgGradient} flex items-center justify-center p-6 overflow-hidden`}>
                                    {/* Decorative Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-0 left-0 w-32 h-32 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 right-0 w-48 h-48 border border-white/30 rounded-full translate-x-1/4 translate-y-1/4"></div>
                                    </div>

                                    {/* Logo */}
                                    <img
                                        src={business.image}
                                        alt={business.name}
                                        className="max-h-28 max-w-[200px] object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Type Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                            {business.type}
                                        </span>
                                    </div>

                                    {/* Location Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            {business.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{business.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                        <span className="text-emerald-500 text-lg mr-1">"</span>
                                        {business.quote}
                                        <span className="text-emerald-500 text-lg ml-1">"</span>
                                    </p>

                                    {/* QR Badge */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                            <span className="material-symbols-outlined">qr_code_2</span>
                                            <span className="text-sm font-semibold">QR Menü Aktif</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-emerald-500 text-lg">verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-emerald-600 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixels.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Menünüzü Dijitale Taşıyın
                    </h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                        İlk ay ücretsiz deneme fırsatıyla QR Menü konforunu yaşayın. Kurulum gerektirmez, hemen kullanmaya başlayın.
                    </p>
                    <a href="#iletisim" className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                        Ücretsiz Oluştur
                    </a>
                </div>
            </section>

            <Contact />
        </Layout>
    );
};

export default QrMenuPage;
