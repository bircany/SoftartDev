import React, { useState } from 'react';
import Layout from '../components/Layout';
import archisImg from '../assets/projects/archis.png';
import docImg from '../assets/projects/doc.png';
import barristerImg from '../assets/projects/barrister.png';
import dietImg from '../assets/projects/diet.png';

const ProjectsPage = () => {
    // Kategori yönetimi için state
    const [activeTab, setActiveTab] = useState('software');

    // Proje verileri - Yazılım ve Medya olarak ayrıldı
    const projects = [
        // Yazılım & Teknoloji Projeleri
        {
            id: 'softreserve',
            title: "SoftReserve",
            desc: "İşletmeler için kapsamlı rezervasyon ve yönetim sistemi.",
            fullDesc: "SoftReserve, restoranlardan spor salonlarına, kuaförlerden danışmanlık firmalarına kadar her türlü işletme için tasarlanmış hepsi bir arada bir rezervasyon yönetim çözümüdür. Müşteri takibi, stok yönetimi ve finansal raporlama özellikleriyle işletmenizi büyütün.",
            category: "SaaS / Web Uygulaması",
            type: "software",
            url: "/softreserve",
            features: ["Online Rezervasyon", "Stok Yönetimi", "Müşteri Analitiği", "Ödeme Entegrasyonu"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
            isInternal: true
        },
        {
            title: "Mimar'lar için Pörtföy sitesi",
            desc: "Profesyonel mimarlar için özel tasarlanmış portföy web siteleri.",
            fullDesc: "Mimarlar için tasarladığımız bu portföy sitesi, projelerinizi görsel açıdan etkileyici bir şekilde sergilemenizi sağlar. Modern tasarım, responsive yapı ve SEO uyumlu altyapı ile müşterilerinize ulaşmanızı kolaylaştırır.",
            category: "Web Tasarım",
            type: "software",
            url: "https://archis-folio-charm.vercel.app/",
            features: ["Responsive Tasarım", "Proje Galerisi", "SEO Uyumlu", "Hızlı Yükleme"],
            image: archisImg
        },
        {
            title: "Doktorlar için Pörtföy sitesi",
            desc: "Sağlık profesyonelleri için özel portföy web siteleri.",
            fullDesc: "Sağlık profesyonelleri için tasarladığımız bu web sitesi, hastalarınızla güçlü bir bağ kurmanızı sağlar. Online randevu sistemi, uzmanlık alanlarınız ve hasta yorumları gibi özelliklerle donatılmıştır.",
            category: "Web Tasarım",
            type: "software",
            url: "https://doc-pulse-chi.vercel.app/",
            features: ["Online Randevu", "Hasta Portalı", "KVKK Uyumlu", "Mobil Uyumlu"],
            image: docImg
        },
        {
            title: "Avukatlar için Pörtföy Sitesi",
            desc: "Hukuk profesyonelleri için özel portföy web siteleri.",
            fullDesc: "Hukuk büroları ve avukatlar için tasarladığımız bu profesyonel portföy sitesi, uzmanlık alanlarınızı ve başarı hikayelerinizi etkileyici bir şekilde sunar.",
            category: "Web Tasarım",
            type: "software",
            url: "https://barrister-craft.vercel.app/",
            features: ["Kurumsal Tasarım", "Uzmanlık Alanları", "Başarı Hikayeleri", "İletişim Formu"],
            image: barristerImg
        },
        {
            title: "Diyetisyenler için Pörtföy Sitesi",
            desc: "Beslenme uzmanları için özel portföy web siteleri.",
            fullDesc: "Diyetisyenler ve beslenme uzmanları için tasarladığımız bu web sitesi, danışanlarınıza ulaşmanızı kolaylaştırır. Diyet programları, başarı hikayeleri, blog bölümü ve online randevu sistemi ile donatılmıştır.",
            category: "Web Tasarım",
            type: "software",
            url: "https://saglikli-portre.vercel.app/",
            features: ["Diyet Programları", "Başarı Hikayeleri", "Blog Bölümü", "Randevu Sistemi"],
            image: dietImg
        },

        // Medya & Kreatif Projeleri (Yeni Eklenenler)
        {
            title: "Global Tech Summit - Tanıtım Filmi",
            desc: "Uluslararası teknoloji zirvesi için hazırlanan sinematik tanıtım filmi.",
            fullDesc: "Bu yıl düzenlenen Global Tech Summit için, etkinliğin büyüklüğünü ve prestijini yansıtan dinamik bir tanıtım filmi hazırladık. 3 günlük çekim maratonu ve 1 haftalık post-prodüksiyon süreciyle hayata geçirildi.",
            category: "Video Prodüksiyon",
            type: "media",
            url: "#",
            features: ["4K Çekim", "Drone Çekimleri", "Motion Graphics", "Sound Design"],
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "E-Ticaret Markası - Sosyal Medya Lansmanı",
            desc: "Yeni bir moda markasının 360° sosyal medya lansman kampanyası.",
            fullDesc: "Sıfırdan kurulan bir e-ticaret markasının tüm sosyal medya stratejisini ve görsel dilini oluşturduk. Instagram Reels ve TikTok odaklı içeriklerle ilk ayda 50k+ organik erişim sağlandı.",
            category: "Sosyal Medya",
            type: "media",
            url: "#",
            features: ["İçerik Stratejisi", "Reels & TikTok", "Influencer İşbirliği", "Community Yönetimi"],
            image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Kurumsal Podcast Serisi - 'Gelecek Vizyonu'",
            desc: "Sektör liderleri ile gerçekleştirilen 10 bölümlük video-podcast serisi.",
            fullDesc: "Bir finans kuruluşunun vizyoner duruşunu pekiştirmek amacıyla hazırlanan podcast serisi. Profesyonel stüdyo ortamında, 3 kameralı reji sistemi ile kaydedildi ve tüm dijital platformlarda yayınlandı.",
            category: "Podcast & Medya",
            type: "media",
            url: "#",
            features: ["Stüdyo Kaydı", "Çoklu Kamera", "Ses Miksajı", "Youtube Optimizasyonu"],
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Lüks Otel Zinciri - Drone Turu",
            desc: "5 yıldızlı otel zinciri için hazırlanan FPV drone tanıtım videoları.",
            fullDesc: "Antalya ve Bodrum'daki otellerin mimarisini ve atmosferini izleyiciye hissettiren, nefes kesici FPV drone çekimleri. İç ve dış mekan geçişleriyle kesintisiz bir deneyim sunuldu.",
            category: "Drone Çekimi",
            type: "media",
            url: "#",
            features: ["FPV Drone", "4K 60fps", "Kurgu & Montaj", "Renk Düzenleme"],
            image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const filteredProjects = projects.filter(project => project.type === activeTab);

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-gray-50 dark:bg-black/20 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                            Tüm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projelerimiz</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                            Dijital dünyada iz bırakan, yenilikçi ve kullanıcı odaklı çözümlerimiz.
                        </p>

                        {/* Toggle Switch */}
                        <div className="inline-flex p-1.5 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-inner">
                            <button
                                onClick={() => setActiveTab('software')}
                                className={`px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'software'
                                    ? 'bg-white dark:bg-surface-dark text-primary shadow-lg scale-105'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">terminal</span>
                                Yazılım & Teknoloji
                            </button>
                            <button
                                onClick={() => setActiveTab('media')}
                                className={`px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'media'
                                    ? 'bg-white dark:bg-surface-dark text-primary shadow-lg scale-105'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">movie</span>
                                Medya & Kreatif
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-fade-in"
                            >
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-medium z-10 flex items-center gap-1">
                                        {activeTab === 'media' && <span className="material-symbols-outlined text-sm">play_circle</span>}
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                                        {project.fullDesc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-xs text-gray-600 dark:text-gray-300 rounded-lg">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.url}
                                        target={project.isInternal ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                                    >
                                        {activeTab === 'software' ? (
                                            project.isInternal ? "Detayları İncele" : "Projeyi Ziyaret Et"
                                        ) : (
                                            "Projeyi İncele"
                                        )}
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsPage;
