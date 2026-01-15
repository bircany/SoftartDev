
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const sendMessageToGemini = async (messages, systemContext) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
        throw new Error("Gemini API Anahtarı eksik veya yapılandırılmamış. Lütfen .env dosyasını kontrol edin.");
    }

    const systemPrompt = `Sen SoftArt Studios adına konuşan yardımsever, profesyonel ve nazik bir yapay zeka asistanısın. 
Aşağıdaki bağlam bilgisini (CONTEXT) kullanarak kullanıcının sorularını cevapla.

KURALLAR:
1. Sadece verilen CONTEXT içindeki bilgilere dayanarak cevap ver.
2. Eğer sorunun cevabı CONTEXT içinde yoksa, nazikçe bu konuda bilgin olmadığını belirt ve iletişim sayfasına yönlendir (veya info@softartstudios.com adresini ver).
3. Asla spekülasyon yapma veya uydurma bilgi verme.
4. Cevapların kısa, net ve anlaşılır olsun. Listeleme yaparak okunabilirliği artır.
5. Türkçe cevap ver.

CONTEXT:
${systemContext}`;

    // Build conversation history for Gemini format
    const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));

    const requestBody = {
        system_instruction: {
            parts: [{ text: systemPrompt }]
        },
        contents: conversationHistory,
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
        }
    };

    try {
        console.log("Gemini API - Sending request...");

        const response = await fetch(`${API_URL}?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        console.log("Gemini API - Response status:", response.status);

        if (!response.ok) {
            let errorMessage = `HTTP Hatası: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMessage = errorData.error?.message || errorMessage;
            } catch (e) {
                // Could not parse error JSON
            }

            if (response.status === 400) {
                throw new Error("Geçersiz istek. API anahtarını kontrol edin.");
            } else if (response.status === 403) {
                throw new Error("API Anahtarı geçersiz veya bu API için yetkiniz yok.");
            } else if (response.status === 429) {
                throw new Error("API çağrı limiti aşıldı. Lütfen birkaç dakika bekleyin.");
            }

            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Gemini API - Success!");

        // Extract text from Gemini response format
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!responseText) {
            throw new Error("API'den geçerli bir yanıt alınamadı.");
        }

        return responseText;
    } catch (error) {
        console.error("Gemini API Error:", error);

        // Detect network/CORS errors
        if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            throw new Error("Ağ bağlantısı hatası. İnternet bağlantınızı kontrol edin.");
        }

        throw error;
    }
};
