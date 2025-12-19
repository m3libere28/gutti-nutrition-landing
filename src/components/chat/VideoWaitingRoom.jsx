import React from 'react';
import GuttieCharacter from '../GuttieCharacter';
import './Chat.css';

const VideoWaitingRoom = ({ onLeave }) => {
    return (
        <div className="video-overlay fade-in">
            <div className="waiting-card glass-panel">
                <div className="waiting-avatar-pulse">
                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah" alt="Sarah" className="rd-avatar-l" />
                </div>
                <h3>Joining Call with Sarah (RD)</h3>
                <p>Waiting for host to let you in...</p>

                <div className="tips-carousel">
                    <p>💡 Tip: Have your food diary ready to share.</p>
                </div>

                <div className="video-controls">
                    <button className="control-btn mute">🎤</button>
                    <button className="control-btn camera">📷</button>
                    <button className="control-btn hangup" onClick={onLeave}>📞</button>
                </div>
            </div>
        </div>
    );
};

export default VideoWaitingRoom;
