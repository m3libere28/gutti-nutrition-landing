import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="bottom-nav glass-panel">
            {/* Left Group */}
            <NavLink to="/diary" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="icon">📖</span>
                <span className="label">Diary</span>
            </NavLink>
            <NavLink to="/chat" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="icon">💬</span>
                <span className="label">Chat</span>
            </NavLink>

            {/* Center Home FAB */}
            <div className="fab-container">
                <Link to="/" className={`fab-button ${isHome ? 'active-fab' : ''}`}>
                    🏠
                </Link>
            </div>

            <div className="nav-item fab-placeholder"></div> {/* Spacer for layout balance */}

            {/* Right Group */}
            <NavLink to="/classes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="icon">🎓</span>
                <span className="label">Learn</span>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <span className="icon">👤</span>
                <span className="label">Profile</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
