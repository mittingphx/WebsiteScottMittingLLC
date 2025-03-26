import React, { createContext, useContext, useState, ReactNode } from 'react';

type ChatContextType = {
  chatTopic: string;
  setChatTopic: (topic: string) => void;
  userEditedContactMessage: boolean;
  setUserEditedContactMessage: (edited: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chatTopic, setChatTopic] = useState<string>('');
  const [userEditedContactMessage, setUserEditedContactMessage] = useState<boolean>(false);

  return (
    <ChatContext.Provider 
      value={{ 
        chatTopic, 
        setChatTopic,
        userEditedContactMessage,
        setUserEditedContactMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}