import React from 'react';
import ReactDOM from 'react-dom';

const Artists = () => {
    const [selectedArtist, setSelectedArtist] = React.useState(null);

    const artists = [
        {
            name: "Ati242",
            role: "Sanatçı",
            image: "/images/artists/ati1.png",
            gradient: "from-violet-600 to-purple-600",
            gallery: [
                "/images/artists/ati1.png", "/images/artists/ati2.png", "/images/artists/ati3.png",
                "/images/artists/ati4.png", "/images/artists/ati5.png", "/images/artists/ati6.png",
                "/images/artists/ati7.png", "/images/artists/ati8.png"
            ]
        },
        {
            name: "Zara",
            role: "Sanatçı",
            image: "/images/artists/zara1.png",
            gradient: "from-pink-600 to-rose-600",
            gallery: [
                "/images/artists/zara1.png", "/images/artists/zara2.png", "/images/artists/zara3.png"
            ]
        },
        {
            name: "Ekin Uzunlar",
            role: "Sanatçı",
            image: "/images/artists/ekinuzunlar1.png",
            gradient: "from-blue-600 to-cyan-600",
            gallery: [
                "/images/artists/ekinuzunlar1.png", "/images/artists/ekinuzunlar2.png",
                "/images/artists/ekinuzunlar3.png", "/images/artists/ekinuzunlar4.png"
            ]
        },
        {
            name: "Gökhan Türkmen",
            role: "Sanatçı",
            image: "/images/artists/gokhanturkmen1.png",
            gradient: "from-emerald-600 to-teal-600",
            gallery: [
                "/images/artists/gokhanturkmen1.png", "/images/artists/gokhanturkmen2.png",
                "/images/artists/gokhanturkmen3.png", "/images/artists/gokhanturkmen4.png",
                "/images/artists/gokhanturkmen5.png"
            ]
        },
        {
            name: "Mustafa Ceceli",
            role: "Sanatçı",
            image: "/images/artists/mustafaceceli1.png",
            gradient: "from-orange-600 to-amber-600",
            gallery: [
                "/images/artists/mustafaceceli1.png"
            ]
        },
        {
            name: "Emre Fel",
            role: "Sanatçı",
            image: "/images/artists/emrefel1.png",
            gradient: "from-red-600 to-pink-600",
            gallery: [
                "/images/artists/emrefel1.png", "/images/artists/emrefel2.png"
            ]
        },
    ];

    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
                <div className="flex items-center gap-2 justify-center mb-4">
                    <span className="text-primary font-semibold text-sm tracking-wider">03</span>
                    <div className="w-8 h-px bg-primary"></div>
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">SANATÇILAR</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-3">
                    Çalıştığımız <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sanatçılar</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    Ünlü sanatçıların dijital projelerinde yer alıyor, yaratıcı çözümler sunuyoruz.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-16">
                {artists.map((artist, index) => (
                    <div
                        key={index}
                        className="group relative text-center cursor-pointer"
                        onClick={() => setSelectedArtist(artist)}
                    >
                        {/* Avatar */}
                        <div className={`relative w-48 h-48 mx-auto rounded-full bg-gradient-to-br ${artist.gradient} p-1 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                            <div className="w-full h-full rounded-full bg-gray-100 dark:bg-surface-dark overflow-hidden relative">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${artist.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10`}></div>

                            {/* View Gallery Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white">
                                    <span className="material-symbols-outlined text-3xl">photo_library</span>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{artist.name}</h3>
                        <span className="text-base text-gray-500 dark:text-gray-400">{artist.role}</span>
                    </div>
                ))}
            </div>

            {/* Gallery Modal */}
            {selectedArtist && ReactDOM.createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
                        onClick={() => setSelectedArtist(null)}
                    ></div>

                    <div className="relative bg-white dark:bg-[#1a1a1a] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-100 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#1a1a1a] z-10">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedArtist.gradient} p-0.5`}>
                                    <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedArtist.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Galeri</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedArtist(null)}
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Gallery Grid */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {selectedArtist.gallery.map((img, idx) => (
                                    <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 relative group">
                                        <img
                                            src={img}
                                            alt={`${selectedArtist.name} ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Artists;
