import rdnBadgeImg from '../assets/rdn_badge.png';

const AboutRDN = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container padded">
            <PageHeader title="Your Dietitian" />

            <div className="rdn-profile-card stagger-1">
                <div className="rdn-hero">
                    <img
                        src={emilyFamilyImg}
                        alt="Emily Torres-Medaglia RDN"
                        className="rdn-image"
                        style={{ objectPosition: 'center 26%' }}
                    />
                    <img src={rdnBadgeImg} alt="RDN Badge" className="rdn-badge-img" />
                </div>

                <div className="rdn-content">
                    <h2 className="rdn-name">Emily Torres-Medaglia RDN, LDN</h2>
                    <h3 className="rdn-title">Pediatric & Maternal Dietitian | Educator</h3>

                    <div className="rdn-stats">
                        <div className="stat">
                            <span className="num">MS</span>
                            <span className="label">Clinical Nutr.</span>
                        </div>
                        <div className="stat">
                            <span className="num">LDN</span>
                            <span className="label">Florida Lic.</span>
                        </div>
                        <div className="stat">
                            <span className="num">Aa</span>
                            <span className="label">Se Habla Español</span>
                        </div>
                    </div>

                    <div className="rdn-bio">
                        <h4>About Emily</h4>
                        <p>
                            Emily is a professional, kind, and human-first Bilingual Registered Dietitian Nutritionist (RDN) on a mission to empower others through health and nutrition education.
                            Currently serving the Florida population through Fay Nutrition, she specializes in pediatric, maternal, and family systems nutrition, offering compassionate care with cultural competence.
                        </p>

                        <h4>Professional Highlights</h4>
                        <div className="accolades-grid">
                            <div className="accolade-card">
                                <span className="accolade-icon">💼</span>
                                <span className="accolade-text">RDN<br />Fay Nutrition</span>
                            </div>
                            <div className="accolade-card">
                                <span className="accolade-icon">🏥</span>
                                <span className="accolade-text">Dietetic Internship<br />HCA Florida Palms West</span>
                            </div>
                            <div className="accolade-card">
                                <span className="accolade-icon">👶</span>
                                <span className="accolade-text">Community Nutrition<br />WIC Broward County</span>
                            </div>
                        </div>

                        <h4>Education & Honors</h4>
                        <div className="accolades-grid">
                            <div className="accolade-card">
                                <span className="accolade-icon">🎓</span>
                                <span className="accolade-text">MS Dietetics<br />Nova Southeastern (Highest Honors)</span>
                            </div>
                            <div className="accolade-card">
                                <span className="accolade-icon">📜</span>
                                <span className="accolade-text">BS Elem. Education<br />FSU (Magna Cum Laude)</span>
                            </div>
                            <div className="accolade-card">
                                <span className="accolade-icon">🏅</span>
                                <span className="accolade-text">Member<br />The Alpha Eta Society</span>
                            </div>
                        </div>

                        <h4>My Philosophy</h4>
                        <p>
                            "I believe in a non-diet approach to health. My goal is to empower families to build positive relationships with food, focusing on abundance rather than restriction, and providing care that honors cultural traditions."
                        </p>

                        <h4>Specialties</h4>
                        <div className="specialty-tags">
                            <span className="tag">Pediatric Nutrition</span>
                            <span className="tag">Maternal Health</span>
                            <span className="tag">Diabetes & Hypertension</span>
                            <span className="tag">Weight Management</span>
                            <span className="tag">Bilingual Care</span>
                        </div>
                    </div>

                    <div className="testimonials-section">
                        <h4>What Colleagues Say</h4>
                        <div className="peer-quote-card">
                            <div className="quote-icon">❝</div>
                            <p className="quote-text">
                                "Emily is collaborative, and willing to go the extra mile for everyone she works with. She hones her skills to provide the best possible support and is a wonderful addition to any team."
                            </p>
                            <div className="peer-author">
                                <div className="peer-avatar">LL</div>
                                <div className="peer-info">
                                    <h5>Liz Langham</h5>
                                    <span>HR Professional</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="book-btn" onClick={() => navigate('/schedule')}>Book Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default AboutRDN;
