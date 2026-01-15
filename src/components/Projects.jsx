import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import archisImg from '../assets/projects/archis.png';
import docImg from '../assets/projects/doc.png';
import barristerImg from '../assets/projects/barrister.png';
import dietImg from '../assets/projects/diet.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Backline Website",
            desc: "Profesyonel müzik ve etkinlik ekipmanları kiralama hizmeti sunan Backline için modern ve etkileyici kurumsal web sitesi.",
            fullDesc: "Backline için tasarladığımız bu kurumsal web sitesi, müzik ve etkinlik sektöründe profesyonel bir imaj oluşturur. Ekipman kataloğu, hizmet detayları ve kolay iletişim özellikleriyle donatılmıştır. Modern tasarım ve hızlı performans ile müşteri deneyimini üst seviyeye taşır.",
            gradient: "from-purple-600 to-indigo-600",
            category: "Kurumsal Web Sitesi",
            url: "#",
            features: ["Modern Tasarım", "Ekipman Kataloğu", "Hızlı Performans", "İletişim Formu"],
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Sivas Iron Metal",
            desc: "Metal sanayi sektöründe faaliyet gösteren Sivas Iron Metal için kurumsal ve güven veren web sitesi.",
            fullDesc: "Sivas Iron Metal için geliştirdiğimiz bu kurumsal web sitesi, şirketin sanayi sektöründeki güçlü konumunu yansıtır. Ürün portföyü, üretim kapasitesi ve kalite standartları gibi bilgileri etkileyici bir şekilde sunar. SEO uyumlu yapısı ile arama motorlarında üst sıralarda yer alır.",
            gradient: "from-gray-700 to-zinc-800",
            category: "Kurumsal Web Sitesi",
            url: "#",
            features: ["Kurumsal Kimlik", "Ürün Kataloğu", "SEO Uyumlu", "Responsive Tasarım"],
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Haber Sitesi",
            desc: "Güncel haberleri hızlı ve etkili bir şekilde sunan modern haber portalı tasarımı.",
            fullDesc: "Modern bir haber portalı olarak tasarlanan bu site, kullanıcıların güncel haberlere hızlıca erişmesini sağlar. Kategori bazlı haberler, son dakika bölümü, arama fonksiyonu ve sosyal medya entegrasyonu ile donatılmıştır. Hızlı yüklenen ve mobil uyumlu yapısı ile her cihazda mükemmel deneyim sunar.",
            gradient: "from-red-600 to-rose-600",
            category: "Haber Portalı",
            url: "#",
            features: ["Haber Yönetim Sistemi", "Kategori Yapısı", "Mobil Uyumlu", "Hızlı Yükleme"],
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Mimar'lar için Pörtföy sitesi",
            desc: "Profesyonel mimarlar için özel tasarlanmış portföy web siteleri. Projelerinizi etkileyici bir şekilde sergileyin.",
            fullDesc: "Mimarlar için tasarladığımız bu portföy sitesi, projelerinizi görsel açıdan etkileyici bir şekilde sergilemenizi sağlar. Modern tasarım, responsive yapı ve SEO uyumlu altyapı ile müşterilerinize ulaşmanızı kolaylaştırır. Proje galerileri, hizmet sayfaları ve iletişim formu dahildir.",
            gradient: "from-violet-600 to-purple-600",
            category: "Web Tasarım",
            url: "https://archis-folio-charm.vercel.app/",
            features: ["Responsive Tasarım", "Proje Galerisi", "SEO Uyumlu", "Hızlı Yükleme"],
            image: archisImg
        },
        {
            title: "Doktorlar için Pörtföy sitesi",
            desc: "Sağlık profesyonelleri için özel portföy web siteleri. Randevu sistemi ve hasta bilgilendirme özellikleri ile.",
            fullDesc: "Sağlık profesyonelleri için tasarladığımız bu web sitesi, hastalarınızla güçlü bir bağ kurmanızı sağlar. Online randevu sistemi, uzmanlık alanlarınız ve hasta yorumları gibi özelliklerle donatılmıştır. KVKK uyumlu ve güvenli altyapı.",
            gradient: "from-emerald-600 to-teal-600",
            category: "Web Tasarım",
            url: "https://doc-pulse-chi.vercel.app/",
            features: ["Online Randevu", "Hasta Portalı", "KVKK Uyumlu", "Mobil Uyumlu"],
            image: docImg
        },
        {
            title: "Avukatlar için Pörtföy Sitesi",
            desc: "Hukuk profesyonelleri için özel portföy web siteleri. Uzmanlık alanlarınızı ve başarılarınızı sergileyin.",
            fullDesc: "Hukuk büroları ve avukatlar için tasarladığımız bu profesyonel portföy sitesi, uzmanlık alanlarınızı ve başarı hikayelerinizi etkileyici bir şekilde sunar. Müvekkil güveni oluşturan kurumsal tasarım ve kolay iletişim formu içerir.",
            gradient: "from-blue-600 to-cyan-600",
            category: "Web Tasarım",
            url: "https://barrister-craft.vercel.app/",
            features: ["Kurumsal Tasarım", "Uzmanlık Alanları", "Başarı Hikayeleri", "İletişim Formu"],
            image: barristerImg
        },
        {
            title: "Diyetisyenler için Pörtföy Sitesi",
            desc: "Beslenme uzmanları için özel portföy web siteleri. Hizmetlerinizi ve başarı hikayelerinizi paylaşın.",
            fullDesc: "Diyetisyenler ve beslenme uzmanları için tasarladığımız bu web sitesi, danışanlarınıza ulaşmanızı kolaylaştırır. Diyet programları, başarı hikayeleri, blog bölümü ve online randevu sistemi ile donatılmıştır.",
            gradient: "from-orange-600 to-amber-600",
            category: "Web Tasarım",
            url: "https://saglikli-portre.vercel.app/",
            features: ["Diyet Programları", "Başarı Hikayeleri", "Blog Bölümü", "Randevu Sistemi"],
            image: dietImg
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="projeler" className="relative z-10 py-24 bg-gray-50 dark:bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary font-semibold text-sm tracking-wider">04</span>
                            <div className="w-8 h-px bg-primary"></div>
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">BAŞARILI PROJELER</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
                            Başarılı <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projelerimiz</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl">
                            Müşterilerimizle birlikte gerçekleştirdiğimiz başarılı projelerden örnekler. Her projede mükemmellik ve yenilikçi çözümler sunuyoruz.
                        </p>
                    </div>
                    <Link to="/projeler" className="hidden md:flex bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-6 py-3 rounded-full transition-all items-center gap-2 shadow-sm">
                        Tüm Projelerimizi İnceleyin
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(project)}
                            className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                        >
                            {/* Project Image */}
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-medium z-10">
                                    {project.category}
                                </div>

                                {/* View Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">{project.desc}</p>

                                <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
                                    <span>Projeyi İncele</span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to="/projeler" className="mt-8 w-full md:hidden bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2">
                    Tüm Projelerimizi İnceleyin
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>

            {/* Modal/Popup */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl bg-white dark:bg-surface-dark rounded-3xl shadow-2xl animate-scale-up grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto custom-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        {/* Modal Image Section */}
                        <div className="relative h-64 md:h-full overflow-hidden">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-10 flex flex-col h-full bg-white dark:bg-[#121212]">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {selectedProject.title}
                                </h3>
                                <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                                    {selectedProject.fullDesc}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Spacer to push buttons to bottom in flex col */}
                            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row gap-4">
                                <a
                                    href={selectedProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group"
                                >
                                    Projeyi Görüntüle
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="flex-1 py-3.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                                >
                                    Kapat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
