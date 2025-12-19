import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import './Dashboard.css'; // Common layout
import './Subscription.css';

const Subscription = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            alert("Payment method updated! (Mock)");
        }, 1500);
    };

    return (
        <div className="subscription-container">
            <PageHeader title="Subscription" />

            <div className="subscription-content stagger-1">

                {/* Premium Plan Card */}
                <div className="premium-plan-card">
                    <div className="plan-header">
                        <div>
                            <span className="plan-badge">Active</span>
                            <h2 className="plan-name">Guttie Premium</h2>
                            <p className="plan-frequency">Billed Monthly</p>
                        </div>
                        <div className="plan-price-block">
                            <h2 className="plan-price">$29.99</h2>
                            <span className="plan-period">/mo</span>
                        </div>
                    </div>

                    <div className="plan-details">
                        <div className="detail-row">
                            <span className="detail-label">Next Billing Date</span>
                            <span className="detail-value">Jan 7, 2026</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Member Since</span>
                            <span className="detail-value">Jan 7, 2025</span>
                        </div>
                    </div>

                    <div className="plan-actions">
                        <button className="action-btn btn-white">Change Plan</button>
                        <button className="action-btn btn-outline">Cancel</button>
                    </div>
                </div>

                {/* Payment Method */}
                <h3 className="section-title">Payment Method</h3>
                <section className="glass-panel payment-card-row">
                    <div className="card-info">
                        <div className="card-icon">VISA</div>
                        <div className="card-text">
                            <p className="card-last4">•••• 4242</p>
                            <p className="card-expiry">Expires 12/28</p>
                        </div>
                    </div>
                    <button className="btn-link" onClick={handleUpdate}>
                        {isLoading ? 'Updating...' : 'Update'}
                    </button>
                </section>

                {/* Billing History */}
                <h3 className="section-title">Billing History</h3>
                <section className="glass-panel billing-list">
                    {[
                        { date: 'Dec 7, 2025', amount: '$29.99', status: 'Paid' },
                        { date: 'Nov 7, 2025', amount: '$29.99', status: 'Paid' },
                        { date: 'Oct 7, 2025', amount: '$29.99', status: 'Paid' },
                    ].map((invoice, i) => (
                        <div key={i} className="billing-item">
                            <div>
                                <p className="invoice-date">{invoice.date}</p>
                                <p className="invoice-desc">Guttie Premium</p>
                            </div>
                            <div>
                                <p className="invoice-amount">{invoice.amount}</p>
                                <span className="invoice-status">{invoice.status}</span>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </div>
    );
};

export default Subscription;
