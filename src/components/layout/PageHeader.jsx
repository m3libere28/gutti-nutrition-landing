import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, subtitle }) => {
    const navigate = useNavigate();

    return (
        <div className="page-header">
            <button className="btn-back" onClick={() => navigate(-1)}>
                ‹
            </button>
            <div className="header-content">
                <h2 className="header-title">{title}</h2>
                {subtitle && <p className="header-subtitle">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
