import { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, X, Bot } from 'lucide-react';
import { translations, Language } from '../translations';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

interface ChatbotProps {
  lang: Language;
}

export const Chatbot = ({ lang }: ChatbotProps) => {
  const t = translations[lang].chatbot;

  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Restart messages when language changes so it matches the language context
  useEffect(() => {
    setMessages([
      { id: '1', sender: 'bot', text: t.welcome }
    ]);
  }, [lang, t.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // AI Simulated logic corresponding to language context keywords
    setTimeout(() => {
      let botResponse = t.replies.default;
      const promptLower = textToSend.toLowerCase();

      if (promptLower.includes('marketing') || promptLower.includes('ads') || promptLower.includes('venda') || promptLower.includes('sell') || promptLower.includes('leads') || promptLower.includes('growth')) {
        botResponse = t.replies.marketing;
      } else if (promptLower.includes('preço') || promptLower.includes('custo') || promptLower.includes('valor') || promptLower.includes('price') || promptLower.includes('cost') || promptLower.includes('budget') || promptLower.includes('quanto')) {
        botResponse = t.replies.pricing;
      } else if (promptLower.includes('gemini') || promptLower.includes('vertex') || promptLower.includes('google') || promptLower.includes('cloud') || promptLower.includes('tech') || promptLower.includes('gcp') || promptLower.includes('rag')) {
        botResponse = t.replies.tech;
      } else if (promptLower.includes('sim') || promptLower.includes('quero') || promptLower.includes('yes') || promptLower.includes('sure') || promptLower.includes('ok') || promptLower.includes('want')) {
        botResponse = t.replies.yes;
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse
      }]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <>
      {/* Floating launcher badge */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#33BC65] text-black flex items-center justify-center shadow-2xl shadow-emerald-500/25 hover:scale-110 active:scale-95 transition-all duration-300 z-50 cursor-pointer border border-[#33BC65]">
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Expanded chat window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[350px] max-w-[calc(100vw-2rem)] h-[480px] bg-[#141414] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50 animate-fade-in backdrop-blur-md">
          {/* Header */}
          <div className="bg-[#1a1a1a] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-1.5 font-sans">
                <Bot className="w-4 h-4 text-[#33BC65]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Vezzi Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages pane */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/30 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed font-sans ${
                  msg.sender === 'user' 
                    ? 'bg-[#33BC65] text-black font-semibold ml-auto rounded-tr-none' 
                    : 'bg-white/5 border border-white/5 text-gray-200 mr-auto rounded-tl-none'
                }`}>
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="bg-white/5 border border-white/5 text-gray-200 p-3.5 rounded-2xl rounded-tl-none text-xs mr-auto flex gap-1 items-center max-w-[60px]">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-black/40 flex flex-wrap gap-2 border-t border-white/5">
              {t.quickReplies.map((reply, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleSend(reply)}
                  className="text-[10px] bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 border border-white/10 hover:border-[#33BC65]/30 text-gray-300 px-2.5 py-1.5 rounded-full transition text-left cursor-pointer font-sans font-medium">
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
            className="p-4 border-t border-white/10 bg-[#161616] flex items-center gap-2">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={lang === 'pt' ? 'Escreva sua dúvida...' : 'Type your question...'} 
              className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#33BC65] transition font-sans" />
            <button 
              type="submit"
              className="w-9 h-9 bg-[#33BC65] rounded-full flex items-center justify-center text-black hover:scale-105 transition cursor-pointer shrink-0">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
