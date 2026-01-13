import React from 'react';

const Services = () => {
    const services = [
        { icon: "code", title: "Web Geliştirme", desc: "Modern, responsive ve kullanıcı dostu web siteleri", color: "primary" },
        { icon: "smartphone", title: "Mobil Uygulama", desc: "iOS ve Android için native ve cross-platform uygulamalar", color: "blue-500" },
        { icon: "ads_click", title: "SEO & Reklam", desc: "Google'da üst sıralarda yer alın, görünürlüğünüzü artırın", color: "orange-500" },
        { icon: "share", title: "Sosyal Medya", desc: "Markanızı güçlendiren içerik ve stratejiler", color: "pink-500" },
        { icon: "palette", title: "Marka Kimliği", desc: "Logo tasarımı ve kurumsal kimlik çözümleri", color: "violet-500" },
        { icon: "article", title: "İçerik Stratejisi", desc: "Markanızın hikayesini anlatan içerikler", color: "cyan-500" },
        { icon: "movie", title: "Prodüksiyon", desc: "Video çekimi ve post prodüksiyon hizmetleri", color: "red-500" },
        { icon: "mic", title: "Podcast Stüdyo", desc: "Profesyonel podcast kayıt ve stüdyo hizmetleri", color: "emerald-500" },
    ];

    return (
        <section id="hizmetler" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
                <div className="flex items-center gap-2 justify-center mb-4">
                    <span className="text-primary font-semibold text-sm tracking-wider">02</span>
                    <div className="w-8 h-px bg-primary"></div>
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">HİZMETLER</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-3">
                    Ne <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">yapıyoruz</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    Yaratıcılığımıza bir bakış—yenilikçi tasarımları, başarılı işbirliklerini ve dönüştürücü dijital deneyimleri keşfediyoruz.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                        <div className={`w-14 h-14 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <span className={`material-symbols-outlined text-${service.color} text-2xl`}>{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>

                        {/* Hover Arrow */}
                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-sm">arrow_outward</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
