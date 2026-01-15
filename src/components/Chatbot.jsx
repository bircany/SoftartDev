import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiApi';
import { SITE_CONTENT } from '../utils/siteContent';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Merhaba! 👋 SoftArt Studios asistanıyım. Size ürünlerimiz ve hizmetlerimiz hakkında nasıl yardımcı olabilirim?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userText = inputText;
        const userMessage = {
            id: Date.now(),
            text: userText,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText("");
        setIsTyping(true);

        try {
            // Prepare message history for context (excluding the very first welcome message if needed, but keeping it is fine)
            // We pass the new user message implicitly by adding it to the history or passing it in the array
            // The service expects the full array mainly.

            // Let's pass the conversation history excluding the one we just added to state (since state update depends on closure)
            // Actually, we can just pass the current 'messages' + the new 'userMessage'
            const currentHistory = [...messages, userMessage];

            // Filter history to last 10 messages to avoid token limits if conversation is long
            const recentHistory = currentHistory.slice(-10);

            const botResponseText = await sendMessageToGemini(recentHistory, SITE_CONTENT);

            const botMessage = {
                id: Date.now() + 1,
                text: botResponseText,
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Chat error:", error);
            let errorMessage = "Üzgünüm, şu an bağlantıda bir sorun yaşıyorum.";

            // Show specific error messages
            if (error.message) {
                errorMessage = "⚠️ " + error.message;
            }

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: errorMessage,
                sender: 'bot'
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <div
                className={`
                    pointer-events-auto
                    w-[350px] sm:w-[380px] 
                    bg-white dark:bg-[#1a1a1a] 
                    rounded-2xl shadow-2xl 
                    border border-gray-200 dark:border-white/10 
                    overflow-hidden 
                    transition-all duration-300 ease-in-out origin-bottom-right
                    ${isOpen ? 'opacity-100 scale-100 translate-y-0 mb-4' : 'opacity-0 scale-90 translate-y-10 h-0 w-0 overflow-hidden'}
                `}
            >
                {/* Header */}
                <div className="bg-primary p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-lg">smart_toy</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">SoftArt Asistan</h3>
                            <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-xs text-white/80">Çevrimiçi (AI)</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 dark:bg-[#0a0a0a] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`
                                        max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                                        ${msg.sender === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-white/5'}
                                    `}
                                >
                                    <div className="whitespace-pre-wrap font-sans">{msg.text}</div>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-white/10 p-3 rounded-2xl rounded-bl-none border border-gray-100 dark:border-white/5 flex gap-1 items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-[#1a1a1a] border-t border-gray-100 dark:border-white/10">
                    <div className="relative flex items-center gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Bir şeyler sorun..."
                            className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-sm text-gray-900 dark:text-white placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            disabled={!inputText.trim() || isTyping}
                            className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20"
                        >
                            <span className="material-symbols-outlined text-lg block">send</span>
                        </button>
                    </div>
                </form>
            </div>

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    pointer-events-auto
                    relative group flex items-center justify-center 
                    w-14 h-14 bg-primary text-white rounded-full 
                    shadow-lg shadow-primary/30 hover:shadow-primary/50 
                    hover:scale-110 active:scale-95 transition-all duration-300
                    ${isOpen ? 'rotate-90 bg-secondary' : 'rotate-0'}
                `}
            >
                <span className="material-symbols-outlined text-3xl">
                    {isOpen ? 'close' : 'chat'}
                </span>

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
