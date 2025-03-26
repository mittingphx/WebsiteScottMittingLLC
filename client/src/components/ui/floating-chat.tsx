import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Bot, MessageSquare, X, Minimize, Maximize, Send } from "lucide-react";
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

export function FloatingChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus on input when chat is opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isMinimized]);

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
      
      // If chat is minimized, show notification
      if (isMinimized || !isOpen) {
        setHasUnreadMessages(true);
      }
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // When opening, reset minimized state and unread messages
    if (!isOpen) {
      setIsMinimized(false);
      setHasUnreadMessages(false);
    }
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      // Minimize
    } else {
      // Maximize and clear unread indicator
      setHasUnreadMessages(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button when closed */}
      {!isOpen && (
        <div className="relative">
          <Button
            onClick={toggleChat}
            className="w-14 h-14 rounded-full shadow-lg bg-primary-600 hover:bg-primary-700 text-white transition-transform hover:scale-105"
            aria-label="Open chat"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
          {hasUnreadMessages && (
            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
          )}
        </div>
      )}

      {/* Chat window when open */}
      {isOpen && (
        <div 
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col ${
            isMinimized ? 'h-16 w-80' : 'h-[500px] w-[350px] max-h-[80vh]'
          } transition-all duration-300 ease-in-out`}
        >
          {/* Chat header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                {!isMinimized && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ask me anything about Scott's services</p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-1 relative">
              {isMinimized && hasUnreadMessages && (
                <span className="absolute top-0 right-10 transform -translate-y-1/2 h-3 w-3 bg-red-500 rounded-full"></span>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleMinimize}
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Chat body - only show when not minimized */}
          {!isMinimized && (
            <>
              <div className="flex-grow p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                {/* Chat messages */}
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    message.type === "bot" ? (
                      <div key={index} className="flex items-start mb-4">
                        <div className="flex-shrink-0 mr-3">
                          <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                            <Bot className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 max-w-[85%] shadow-sm">
                          <p className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-wrap">
                            {message.text}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div key={index} className="flex items-start justify-end mb-4">
                        <div className="bg-primary-600 rounded-lg px-4 py-3 max-w-[85%] shadow-sm">
                          <p className="text-white text-sm">
                            {message.text}
                          </p>
                        </div>
                        <div className="flex-shrink-0 ml-3">
                          <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <User className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                          <Bot className="h-5 w-5" />
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
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <form className="flex space-x-2" onSubmit={handleSendMessage}>
                  <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-grow focus:ring-primary-500 focus:border-primary-500 shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (inputValue.trim()) {
                          handleSendMessage(e);
                        }
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}