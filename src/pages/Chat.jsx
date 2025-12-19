import React, { useState, useRef, useEffect } from 'react';
import '../components/chat/Chat.css';
import logoImg from '../assets/logo.jpg';

// The "Brain" of Guttie AI
const identifyIntent = (text) => {
    const t = text.toLowerCase();

    if (t.includes('bloat') || t.includes('stomach') || t.includes('pain'))
        return { type: 'symptom', response: "I'm sorry you're feeling discomfort. I recommend logging this in your Diary. Try sipping some Ginger Turmeric Tea (available in Recipes) and taking a short walk." };

    if (t.includes('recipe') || t.includes('eat') || t.includes('food'))
        return { type: 'recipe', response: "Hungry? Check out our 'Glowing Green Detox' smoothie in the Recipes tab! It's great for energy." };

    if (t.includes('schedule') || t.includes('appointment') || t.includes('book'))
        return { type: 'nav', response: "You can manage all your appointments in the 'Schedule' tab. Would you like me to take you there?" }; // Logic could be added to auto-redirect

    if (t.includes('hello') || t.includes('hi'))
        return { type: 'greeting', response: "Hi there! I'm Guttie. How can I nourish you today?" };

    return { type: 'general', response: "That sounds important. I've noted it for Emily to review before your next session." };
};

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', text: "Hello! I'm Guttie AI. How are you feeling today?" }
    ]);
    const [input, setInput] = useState('');
    const endRef = useRef(null);

    const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: 'smooth' });
    useEffect(scrollToBottom, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), sender: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate AI thinking
        setTimeout(() => {
            const { response } = identifyIntent(userMsg.text);
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: response }]);
        }, 800);
    };

    return (
        <div className="chat-page-container">
            <div className="chat-header-fixed">
                <div className="bot-avatar">
                    <img src={logoImg} alt="AI" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                </div>
                <div>
                    <h2>Guttie Assistant</h2>
                    <span className="online-badge">● Online</span>
                </div>
            </div>

            <div className="messages-area">
                {messages.map(msg => (
                    <div key={msg.id} className={`message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={endRef} />
            </div>

            <form className="chat-input-area" onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit">➤</button>
            </form>
        </div>
    );
};

export default Chat;
