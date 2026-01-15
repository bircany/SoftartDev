import React from 'react';
import Navbar from './Navbar';
import Chatbot from './Chatbot';

const Layout = ({ children }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white transition-colors duration-300">
            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
                <div className="absolute inset-0 grid-bg" style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)' }}></div>
            </div>

            {/* Top Backround Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Wave SVG */}
            <div className="absolute top-0 left-0 w-full overflow-hidden h-48 md:h-64 z-0 pointer-events-none opacity-60">
                <svg className="w-full h-full absolute top-0" preserveAspectRatio="none" viewBox="0 0 1440 320">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#4C1D95', stopOpacity: 1 }}></stop>
                            <stop offset="50%" style={{ stopColor: '#6D28D9', stopOpacity: 1 }}></stop>
                            <stop offset="100%" style={{ stopColor: '#4C1D95', stopOpacity: 1 }}></stop>
                        </linearGradient>
                    </defs>
                    <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="url(#waveGradient)" fillOpacity="0.2"></path>
                </svg>
                <div className="absolute -top-24 left-0 w-[150%] h-64 border-[40px] border-primary/30 rounded-[50%] blur-3xl transform -translate-x-1/4"></div>
            </div>

            <Navbar />

            <main>
                {children}
            </main>

            {/* Bottom Background Blobs */}
            <div className="fixed bottom-[-100px] right-[-50px] w-64 h-64 bg-primary/40 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="fixed bottom-[-50px] left-[-50px] w-96 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none z-0"></div>

            <Chatbot />
        </div>
    );
};

export default Layout;
