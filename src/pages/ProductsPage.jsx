import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    const products = [
        {
            id: 'softreserve',
            title: 'Rezervasyon Sistemleri (SoftReserve)',
            desc: 'Restoranlar, güzellik merkezleri ve klinikler için gelişmiş rezervasyon ve müşteri yönetim sistemi.',
            icon: 'calendar_month',
            color: 'text-indigo-500',
            bg: 'bg-indigo-500/10',
            link: '/softreserve',
            features: ['Otomatik Hatırlatma', 'Müşteri Takibi', 'Online Ödeme', 'Raporlama']
        },
        {
            id: 'horecapos',
            title: 'HorecaPOS (Pos Yazılımı)',
            desc: 'Kafe ve restoranlar için hızlı, güvenilir ve kullanıcı dostu adisyon ve stok takip sistemi.',
            icon: 'point_of_sale',
            color: 'text-orange-500',
            bg: 'bg-orange-500/10',
            link: '#iletisim',
            features: ['Masa Yönetimi', 'Stok Takibi', 'Mutfak Ekranı', 'Gelişmiş Raporlar']
        },
        {
            id: 'qr-menu',
            title: 'QR Menü Çözümleri',
            desc: 'Temassız, hızlı ve her zaman güncel dijital menü çözümleri.',
            icon: 'qr_code_2',
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10',
            link: '#iletisim',
            features: ['Kolay Güncelleme', 'Çoklu Dil Desteği', 'Görsel Menü', 'Hızlı Erişim']
        },
        {
            id: 'web-design',
            title: 'Web Tasarım & Portfolyo',
            desc: 'Markanızı en iyi yansıtan, modern ve mobil uyumlu kurumsal web siteleri.',
            icon: 'language',
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            link: '/projeler',
            features: ['SEO Uyumlu', 'Mobil Dostu', 'Yönetim Paneli', 'Hızlı Açılış']
        },
        {
            id: 'custom-solutions',
            title: 'İşletmelere Özel Çözümler',
            desc: 'İş süreçlerinizi optimize eden yapay zeka entegrasyonları ve özel yazılımlar.',
            icon: 'psychology',
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            link: '#iletisim',
            features: ['AI Entegrasyonu', 'Otomasyon', 'Veri Analizi', 'Özel API']
        }
    ];

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-gray-50 dark:bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                            Ürünlerimiz ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Çözümlerimiz</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            İşletmenizi dijitalleştiren, verimliliği artıran ve büyümeyi hızlandıran yenilikçi yazılım çözümleri.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2">
                                <div className={`w-16 h-16 rounded-2xl ${product.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <span className={`material-symbols-outlined ${product.color} text-4xl`}>{product.icon}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    {product.desc}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                            <span className={`material-symbols-outlined text-sm ${product.color}`}>check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {product.link.startsWith('#') ? (
                                    <a href={product.link} className={`inline-flex items-center gap-2 font-semibold ${product.color} hover:opacity-80 transition-opacity`}>
                                        Detaylı Bilgi
                                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </a>
                                ) : (
                                    <Link to={product.link} className={`inline-flex items-center gap-2 font-semibold ${product.color} hover:opacity-80 transition-opacity`}>
                                        İncele
                                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </Link>
                                )}
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
