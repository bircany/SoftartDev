import React from 'react';

const About = () => {
    const features = [
        {
            icon: "person_check",
            title: "Müşteri Odaklı Yaklaşım",
            desc: "Her projeyi müşterilerimizin hedeflerine göre şekillendiriyor, başarılarınız için çalışıyoruz."
        },
        {
            icon: "bolt",
            title: "Hızlı ve Etkili Çözümler",
            desc: "Zamana değer veriyoruz. Projelerinizi zamanında teslim ediyor, hızlı sonuç alıyorsunuz."
        },
        {
            icon: "groups",
            title: "Uzman Ekip",
            desc: "Alanında uzman profesyonellerle çalışıyor, her projede yüksek kalite garantisi veriyoruz."
        },
        {
            icon: "rocket_launch",
            title: "Yenilikçi Teknolojiler",
            desc: "En güncel teknolojileri kullanarak, geleceğe hazır çözümler üretiyoruz."
        }
    ];

    const clients = [
        "Rum Meyhanesi Samsun",
        "Detay Oto Market",
        "Deko Plastik",
        "Mengerler Samsun Mercedes Benz Bayi",
        "Öküz Samsun",
        "Smy Dunnage",
        "Eko Sentetik",
        "22 Ocakbaşı"
    ];

    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
                <div className="flex items-center gap-2 justify-center mb-4">
                    <span className="text-primary font-semibold text-sm tracking-wider">05</span>
                    <div className="w-8 h-px bg-primary"></div>
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">BİZ KİMİZ</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-3">
                    Neden bizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">seçmelisiniz</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Projelerinizi hayata geçirmek için sadece kod yazmıyoruz, vizyonunuzu gerçeğe dönüştürüyoruz. Her projede müşteri memnuniyetini ön planda tutarak, işinizi büyütecek çözümler sunuyoruz.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {features.map((feature, index) => (
                    <div key={index} className="group text-center p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Client Marquee */}
            <div className="relative overflow-hidden py-10 border-y border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <div key={index} className="mx-12">
                            <span className="text-xl md:text-2xl font-display font-bold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300 cursor-default">
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
