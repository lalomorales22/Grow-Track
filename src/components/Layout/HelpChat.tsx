import React, { useState } from 'react';
import { HelpCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

const HelpChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: 'Hello! How can I help you today?' },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), type: 'user', content: message };
    setMessages([...messages, userMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'I understand you need help. Let me assist you with that. What specific aspect of the system would you like to learn more about?'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary-600 text-white rounded-full p-3 shadow-lg hover:bg-primary-700 transition-colors"
      >
        <HelpCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed right-4 bottom-4 bg-white rounded-lg shadow-xl w-96 transition-all ${
        isMinimized ? 'h-14' : 'h-[600px]'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <HelpCircle className="h-5 w-5 text-primary-600" />
          <h3 className="text-lg font-medium">AI Help Assistant</h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-gray-600"
          >
            {isMinimized ? (
              <Maximize2 className="h-5 w-5" />
            ) : (
              <Minimize2 className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="p-4 h-[calc(100%-8rem)] overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    msg.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
              <button
                onClick={handleSend}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HelpChat;