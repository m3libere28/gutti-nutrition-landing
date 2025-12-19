import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionCard from '../components/profile/SubscriptionCard';
import SettingsToggle from '../components/profile/SettingsToggle';
import './Dashboard.css'; // Common layout
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: 'Guest', goal: 'Wellness', email: '' });
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('gutti_user_profile');
        if (stored) {
            setUser(JSON.parse(stored));
        }

        // Load custom avatar if exists
        const storedAvatar = localStorage.getItem('gutti_user_avatar');
        if (storedAvatar) {
            setAvatar(storedAvatar);
        }
    }, []);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setAvatar(base64String);
                localStorage.setItem('gutti_user_avatar', base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        // Clear onboarding to show wizard again? Or just clear user?
        // Let's just navigate to signup for "Edit Profile" simulation
        navigate('/signup');
    };

    const currentAvatar = avatar || `https://api.dicebear.com/9.x/avataaars/svg?seed=${user.name}`;

    return (
        <div className="dashboard-container">
            {/* Header */}
            <h2 style={{ marginBottom: 20, fontSize: '1.8rem', color: 'var(--color-primary-dark)' }}>My Profile</h2>

            <div className="profile-header">
                <div className="profile-avatar-xl" style={{ position: 'relative', cursor: 'pointer' }}>
                    <label htmlFor="avatar-upload" style={{ cursor: 'pointer', display: 'block', height: '100%' }}>
                        <img src={currentAvatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="edit-overlay" style={{
                            position: 'absolute', bottom: 0, right: 0, background: 'white',
                            borderRadius: '50%', padding: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                        }}>
                            📷
                        </div>
                    </label>
                    <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleAvatarChange}
                    />
                </div>
                <div className="profile-details">
                    <h3>{user.name}</h3>
                    <p className="member-since">Goal: <strong>{user.goal}</strong></p>
                    <div className="stats-row">
                        <div className="stat">🔥 3 Day Streak</div>
                    </div>
                </div>
            </div>

            <h3 className="section-title">Membership</h3>
            <SubscriptionCard />

            <h3 className="section-title">Preferences</h3>

            <h4 style={{ margin: '15px 0 10px', color: '#64748b', fontSize: '0.9rem' }}>Notifications</h4>
            <div className="settings-group">
                <SettingsToggle label="Meal Reminders" icon="🥣" initialValue={true} />
                <SettingsToggle label="Hydration Nudges" icon="💧" initialValue={true} />
                <SettingsToggle label="Daily Weigh-in" icon="⚖️" initialValue={false} />
            </div>

            <h4 style={{ margin: '20px 0 10px', color: '#64748b', fontSize: '0.9rem' }}>General</h4>
            <div className="settings-group">
                <SettingsToggle label="Use Metric Units (kg/ml)" icon="📏" initialValue={false} />
                <SettingsToggle label="Sync Apple Health" icon="❤️" initialValue={true} />
                <SettingsToggle label="Share Data with RDN" icon="🩺" initialValue={true} />
            </div>

            <button className="logout-btn" onClick={handleLogout} style={{ marginTop: 30 }}>Edit Profile / Sign Out</button>

            {/* Height spacer for bottom nav */}
            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default Profile;
