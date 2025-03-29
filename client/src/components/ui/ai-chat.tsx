import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Bot } from "lucide-react";
import { sendChatMessage } from "@/lib/chat-service";

type Message = {
  type: "bot" | "user";
  text: string;
};

const initialMessages: Message[] = [
  {
    type: "bot",
    text: "Hello! I'm Scott's AI assistant. How can I help you today?"
  }
];

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      type: "user",
      text: inputValue
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      const response = await sendChatMessage(inputValue);
      
      const botMessage: Message = {
        type: "bot",
        text: response
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        type: "bot",
        text: "Sorry, I'm having trouble processing your request right now. Please try again later."
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700" style={{ background: "rgba(240, 0, 180, 0.4)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-yellow-400 shadow-sm">
            <Bot className="h-3 w-3" style={{ width: '3rem', height: '3rem' }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-heading text-yellow-400">AI Assistant</h2>
            <p className="text-white font-bold mt-1">
              Ask questions about my services or how AI can help your business
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-6 overflow-y-auto h-96 bg-gray-50 dark:bg-gray-900">
        {/* Chat messages */}
        <div className="space-y-4">
          {messages.map((message, index) => (
            message.type === "bot" ? (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-yellow-400">
                    <Bot className="h-6 w-6" />
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 max-w-[80%] shadow-sm">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {message.text}
                  </p>
                </div>
              </div>
            ) : (
              <div key={index} className="flex items-start justify-end">
                <div className="bg-primary-600 rounded-lg px-4 py-3 max-w-[80%] shadow-sm">
                  <p className="text-white">
                    {message.text}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                    <User className="h-6 w-6" />
                  </div>
                </div>
              </div>
            )
          ))}
          
          {isLoading && (
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-yellow-400">
                  <Bot className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Chat input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <form className="flex space-x-3" onSubmit={handleSendMessage}>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-grow focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
          />
          <Button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
}
