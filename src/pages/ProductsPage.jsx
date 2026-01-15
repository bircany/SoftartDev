import React, { useState } from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import archisImg from '../assets/projects/archis.png';
import docImg from '../assets/projects/doc.png';
import barristerImg from '../assets/projects/barrister.png';
import dietImg from '../assets/projects/diet.png';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('products');

    const categories = [
        { id: 'products', name: 'Sektörel Yazılımlar', icon: 'apps' },
        { id: 'projects', name: 'Web & Tasarım Projeleri', icon: 'web' },
        { id: 'media', name: 'Medya & Kreatif', icon: 'movie' }
    ];

    const products = {
        products: [
            {
                id: 'softreserve',
                title: 'SoftReserve',
                desc: 'Restoran, gece kulübü ve etkinlik mekanları için özel masa ve rezervasyon yönetim çözümü.',
                icon: 'calendar_month',
                color: 'text-indigo-500',
                bg: 'bg-indigo-500/10',
                link: '/softreserve',
                features: ['Masa Yönetimi', 'Online Rezervasyon', 'Kaparo Sistemi', 'VIP Takibi'],
                isInternal: true
            },
            {
                id: 'horecapos',
                title: 'HorecaPOS',
                desc: 'Kafe ve restoranlar için bulut tabanlı, hızlı ve güvenilir adisyon & stok takip sistemi.',
                icon: 'point_of_sale',
                color: 'text-orange-500',
                bg: 'bg-orange-500/10',
                link: '/horecapos',
                features: ['Hızlı Satış', 'Stok Takibi', 'Mutfak Ekranı', 'Garson Uygulaması'],
                isInternal: true
            },
            {
                id: 'softbeauty',
                title: 'SoftBeauty',
                desc: 'Güzellik merkezleri, klinikler ve kuaförler için randevu ve müşteri yönetim platformu.',
                icon: 'face',
                color: 'text-pink-500',
                bg: 'bg-pink-500/10',
                link: '/softbeauty',
                features: ['Seans Takibi', 'Paket Yönetimi', 'Hatırlatma SMS', 'Prim Hesabı'],
                isInternal: true
            },
            {
                id: 'qr-menu',
                title: 'QR Menü Çözümleri',
                desc: 'Temassız, hızlı ve her zaman güncel dijital menü çözümleri. Masada sipariş imkanı.',
                icon: 'qr_code_2',
                color: 'text-emerald-500',
                bg: 'bg-emerald-500/10',
                link: '/qrmenu',
                features: ['Anlık Güncelleme', 'Çoklu Dil', 'Fotoğraflı Menü', 'Garson Çağırma'],
                isInternal: true
            }
        ],
        projects: [
            {
                title: "Mimar'lar için Portföy",
                desc: "Profesyonel mimarlar için özel tasarlanmış, görsel ağırlıklı portföy web sitesi.",
                icon: 'architecture',
                color: 'text-gray-600',
                bg: 'bg-gray-100',
                link: "https://archis-folio-charm.vercel.app/",
                features: ["Galeri Modülü", "Proje Detay", "SEO Uyumlu", "Mobil Uyumlu"],
                image: archisImg,
                isInternal: false
            },
            {
                title: "Doktor & Klinik Web Sitesi",
                desc: "Sağlık profesyonelleri için online randevu özellikli kurumsal web sitesi.",
                icon: 'stethoscope',
                color: 'text-blue-500',
                bg: 'bg-blue-50/50',
                link: "https://doc-pulse-chi.vercel.app/",
                features: ["Online Randevu", "Blog Sistemi", "Hasta Yorumları", "Hızlı İletişim"],
                image: docImg,
                isInternal: false
            },
            {
                title: "Avukat & Hukuk Bürosu",
                desc: "Hukuk büroları için güven veren, kurumsal ve profesyonel web tasarımı.",
                icon: 'gavel',
                color: 'text-slate-600',
                bg: 'bg-slate-100',
                link: "https://barrister-craft.vercel.app/",
                features: ["Uzmanlık Alanları", "Ekip Tanıtımı", "Makale Yönetimi", "İletişim Formu"],
                image: barristerImg,
                isInternal: false
            },
            {
                title: "Diyetisyen & Beslenme",
                desc: "Diyetisyenler için danışan takibi ve blog odaklı kişisel web sitesi.",
                icon: 'nutrition',
                color: 'text-green-500',
                bg: 'bg-green-50',
                link: "https://saglikli-portre.vercel.app/",
                features: ["Vaka Analizleri", "Diyet Programları", "Blog", "Randevu Butonu"],
                image: dietImg,
                isInternal: false
            }
        ],
        media: [
            {
                title: "Global Tech Summit",
                desc: "Uluslararası teknoloji zirvesi için hazırlanan sinematik tanıtım filmi.",
                icon: 'movie',
                color: 'text-red-500',
                bg: 'bg-red-500/10',
                link: "#",
                features: ["4K Prodüksiyon", "Drone Çekimi", "Sound Design", "Kurgu"],
                image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&q=80&w=800",
                isInternal: false
            },
            {
                title: "Lüks Otel Zinciri",
                desc: "5 yıldızlı otel zinciri için hazırlanan FPV drone tanıtım videoları.",
                icon: 'flight',
                color: 'text-sky-500',
                bg: 'bg-sky-500/10',
                link: "#",
                features: ["FPV Drone", "Mekan Tanıtımı", "Renk Düzenleme", "Sosyal Medya"],
                image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
                isInternal: false
            }
        ]
    };

    const currentItems = products[activeCategory] || [];

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-gray-50 dark:bg-black min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                            Çözümlerimiz ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projelerimiz</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                            İşletmenizi dijital dünyada öne çıkaracak yazılım ürünlerimiz ve hayata geçirdiğimiz başarılı projeler.
                        </p>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.id
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                        : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                                        }`}
                                >
                                    <span className="material-symbols-outlined">{cat.icon}</span>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentItems.map((item, idx) => (
                            <div key={idx} className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                                {activeCategory !== 'products' && item.image ? (
                                    <div className="h-56 overflow-hidden relative">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl backdrop-blur-md bg-white/20 flex items-center justify-center text-white border border-white/20`}>
                                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-8 pb-0">
                                        <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <span className={`material-symbols-outlined ${item.color} text-4xl`}>{item.icon}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                        {item.desc}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {item.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`material-symbols-outlined text-sm ${item.color || 'text-primary'}`}>check_circle</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        {item.isInternal ? (
                                            <Link to={item.link} className={`inline-flex items-center gap-2 font-semibold ${item.color || 'text-primary'} hover:opacity-80 transition-opacity`}>
                                                İncele
                                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                            </Link>
                                        ) : (
                                            <a href={item.link} target={item.link.startsWith('http') ? "_blank" : "_self"} rel={item.link.startsWith('http') ? "noopener noreferrer" : ""} className={`inline-flex items-center gap-2 font-semibold ${item.color || 'text-primary'} hover:opacity-80 transition-opacity`}>
                                                {activeCategory === 'products' ? 'Detaylı Bilgi' : 'Projeyi Ziyaret Et'}
                                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Contact />
        </Layout>
    );
};

export default ProductsPage;
