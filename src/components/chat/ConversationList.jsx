import React from 'react';

const conversations = [
    { id: 1, name: 'Sarah (Dietitian)', lastMsg: 'Great job with the water intake!', time: '10:30 AM', avatar: 'Sarah', type: 'rd' },
    { id: 2, name: 'Dec 2025 Detox', lastMsg: 'Mike: Almost gave in to a cookie...', time: '9:15 AM', avatar: 'A', type: 'group' },
    { id: 3, name: 'Guttie Bot', lastMsg: 'Your weekly report is ready.', time: 'Yesterday', avatar: 'Bot', type: 'bot' }
];

const ConversationList = ({ onSelect }) => {
    return (
        <div className="conversation-list">
            <h3 style={{ marginBottom: '15px', color: '#64748b' }}>Messages</h3>
            {conversations.map(conv => (
                <div key={conv.id} className="conv-item" onClick={() => onSelect(conv)}>
                    <div className="avatar">
                        <img
                            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${conv.avatar}`}
                            alt={conv.name}
                        />
                        {conv.type === 'rd' && <div className="status-dot"></div>}
                    </div>
                    <div className="conv-info">
                        <h4>{conv.name} {conv.type === 'rd' && '⭐'}</h4>
                        <p>{conv.lastMsg}</p>
                    </div>
                    <span className="time-badge">{conv.time}</span>
                </div>
            ))}
        </div>
    );
};

export default ConversationList;
