import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileComponents.css';

const SubscriptionCard = () => {
    const navigate = useNavigate();
    return (
        <div className="subscription-card glass-panel">
            <div className="sub-header">
                <div className="plan-badge">PRO</div>
                <div className="plan-info">
                    <h4>Guttie Premium</h4>
                    <p>Active until Jan 7, 2026</p>
                </div>
            </div>

            <div className="feature-list">
                <div className="feature">✓ Unlimited Chat</div>
                <div className="feature">✓ Video Calls</div>
                <div className="feature">✓ Advanced Analytics</div>
            </div>

            <button className="manage-btn" onClick={() => navigate('/subscription')}>Manage Subscription</button>
        </div>
    );
};

export default SubscriptionCard;
