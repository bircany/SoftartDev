import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 dark:border-white/10 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={onClick}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-gray-900 dark:text-white group-hover:text-primary'}`}>
                    {question}
                </span>
                <span className={`material-symbols-outlined text-gray-600 dark:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    keyboard_arrow_down
                </span>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "SoftArt Studios hangi hizmetleri sunuyor?",
            a: "Web geliştirme, mobil uygulama, SEO & reklam, sosyal medya yönetimi, marka kimliği tasarımı, içerik stratejisi, video prodüksiyon ve podcast stüdyo hizmetleri sunuyoruz. 360° dijital ajans olarak tüm ihtiyaçlarınızı tek çatı altında karşılıyoruz."
        },
        {
            q: "Bir web sitesi projesi ne kadar sürer?",
            a: "Projenin kapsamına göre değişiklik gösterir. Basit bir web sitesi 2-3 haftada, daha kapsamlı projeler ise 4-8 hafta içinde tamamlanabilir. Her proje öncesinde detaylı bir zaman planı sunuyoruz."
        },
        {
            q: "SEO hizmetleriniz nasıl çalışır?",
            a: "Önce sitenizin mevcut durumunu analiz ediyoruz. Ardından anahtar kelime araştırması, teknik SEO optimizasyonu, içerik stratejisi ve backlink çalışmaları ile Google'da üst sıralara çıkmanızı sağlıyoruz. Aylık raporlarla gelişimi takip edebilirsiniz."
        },
        {
            q: "Mobil uygulama geliştirme süreci nasıl işler?",
            a: "Fikir analizi ve planlama ile başlayıp, UI/UX tasarımı, geliştirme, test ve yayınlama aşamalarından geçiyoruz. iOS ve Android için native veya cross-platform çözümler sunuyoruz."
        },
        {
            q: "Podcast stüdyo hizmetleriniz nelerdir?",
            a: "Profesyonel ses kayıt ekipmanları, akustik stüdyo ortamı, post-prodüksiyon düzenleme ve yayınlama desteği sunuyoruz. Stüdyomuzu saatlik veya günlük kiralayabilirsiniz."
        },
    ];

    return (
        <section className="relative z-10 py-24 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <div className="flex items-center gap-2 justify-center mb-4">
                    <span className="text-primary font-semibold text-sm tracking-wider">06</span>
                    <div className="w-8 h-px bg-primary"></div>
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">SSS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-3">
                    Sıkça sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">sorular</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    Benzersiz ihtiyaçları karşılamak için çözümlerimizi nasıl özelleştirdiğimizi keşfedin.
                </p>
            </div>

            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl shadow-primary/5">
                {faqs.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.q}
                        answer={item.a}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
