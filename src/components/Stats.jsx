import React from 'react';

const Stats = () => {
    const stats = [
        { value: "100+", label: "Tamamlanan başarılı proje" },
        { value: "10+", label: "Uzman ekip" },
        { value: "5+", label: "Yıl deneyim" },
    ];

    return (
        <section className="relative z-10 py-12 border-y border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Agency Description */}
                    <div className="md:pr-8 pb-8 md:pb-0 flex flex-col justify-center md:border-r border-gray-200 dark:border-white/10">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                            <span className="text-primary font-semibold text-sm tracking-wider">01</span>
                            <div className="w-8 h-px bg-primary"></div>
                        </div>
                        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">360° Ajans</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Medya ve yazılımı birleştiren bütüncül yaklaşımla, projelerinizi baştan sona destekliyoruz
                        </p>
                    </div>

                    {/* Stats */}
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start justify-center px-4 md:border-r last:border-0 border-gray-200 dark:border-white/10">
                            <span className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                {stat.value}
                            </span>
                            <span className="text-gray-600 dark:text-gray-400 mt-2 font-medium text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
