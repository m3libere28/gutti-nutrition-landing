import React, { useState, useEffect, useRef } from 'react';

const mockMessages = {
    1: [
        { id: 1, text: 'Hi Alex! Creating your meal plan now.', sender: 'them', time: '10:00 AM' },
        { id: 2, text: 'Remember to log your lunch!', sender: 'them', time: '10:25 AM' },
        { id: 3, text: 'Will do! Just had a salad.', sender: 'me', time: '10:28 AM' },
        { id: 4, text: 'Great job with the water intake!', sender: 'them', time: '10:30 AM' },
    ]
};

const MessageThread = ({ conversation, onBack, onVideoCall }) => {
    const [messages, setMessages] = useState(mockMessages[conversation.id] || []);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!inputText.trim()) return;
        const newMsg = {
            id: Date.now(),
            text: inputText,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMsg]);
        setInputText('');

        // Mock reply
        setTimeout(() => {
            const reply = {
                id: Date.now() + 1,
                text: "Thanks for the update! Keep it up.",
                sender: 'them',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, reply]);
        }, 2000);
    };

    return (
        <div className="thread-view">
            <div className="thread-header">
                <button className="back-btn" onClick={onBack}>‹</button>
                <div className="avatar" style={{ width: 40, height: 40 }}>
                    <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${conversation.avatar}`} alt="Avatar" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0 }}>{conversation.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#4caf50' }}>Online</span>
                </div>
                {conversation.type === 'rd' && (
                    <button onClick={onVideoCall} style={{ fontSize: '1.5rem', background: 'none', border: 'none' }}>📹</button>
                )}
            </div>

            <div className="messages-area">
                {messages.map(msg => (
                    <div key={msg.id} className={`message-bubble ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                        {msg.text}
                        <span className="message-time">{msg.time}</span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="input-area">
                <button style={{ fontSize: '1.2rem', background: 'none', border: 'none', marginRight: 10 }}>📷</button>
                <input
                    className="chat-input"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                />
                <button className="send-btn" onClick={handleSend}>➤</button>
            </div>
        </div>
    );
};

export default MessageThread;
