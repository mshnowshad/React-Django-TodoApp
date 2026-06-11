import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: 'calc(100vh - 120px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '2rem',
                padding: '3rem',
                maxWidth: '900px',
                width: '100%',
                margin: '0 auto',
            }}>
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '0.5rem',
                        color: 'white'
                    }}>
                        🏠 স্বাগতম!
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        marginBottom: '1rem'
                    }}>
                        Todo App-এ
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        আপনার দৈনন্দিন কাজগুলি সহজে সংগঠিত করুন<br />
                        উৎপাদনশীলতা বাড়ান এবং কখনো কিছু ভুলবেন না
                    </p>
                </div>

                {/* Button Section */}
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '3rem'
                }}>
                    <button 
                        onClick={() => navigate('/todos')}
                        style={{
                            padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.75rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontWeight: '600',
                            minWidth: '200px'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        📋 টোডো দেখুন
                    </button>
                    
                    <button 
                        onClick={() => navigate('/todos')}
                        style={{
                            padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            background: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '0.75rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontWeight: '600',
                            minWidth: '200px'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = '#667eea';
                            e.target.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        ➕ নতুন টোডো তৈরি করুন
                    </button>
                </div>

                {/* Features Section - Grid Layout for Laptop/Tablet */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    paddingTop: '2rem',
                    borderTop: '2px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{ 
                        textAlign: 'center',
                        padding: '1rem'
                    }}>
                        <div style={{ 
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                            marginBottom: '0.75rem' 
                        }}>✅</div>
                        <h3 style={{ 
                            color: 'white', 
                            marginBottom: '0.5rem',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)'
                        }}>সহজ ব্যবস্থাপনা</h3>
                        <p style={{ 
                            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                            color: 'rgba(255, 255, 255, 0.8)'
                        }}>
                            সহজেই টোডো যোগ, এডিট ও ডিলেট করুন
                        </p>
                    </div>
                    
                    <div style={{ 
                        textAlign: 'center',
                        padding: '1rem'
                    }}>
                        <div style={{ 
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                            marginBottom: '0.75rem' 
                        }}>🎯</div>
                        <h3 style={{ 
                            color: 'white', 
                            marginBottom: '0.5rem',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)'
                        }}>টার্গেট ফোকাসড</h3>
                        <p style={{ 
                            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                            color: 'rgba(255, 255, 255, 0.8)'
                        }}>
                            আপনার কাজগুলিতে মনযোগ দিন
                        </p>
                    </div>
                    
                    <div style={{ 
                        textAlign: 'center',
                        padding: '1rem'
                    }}>
                        <div style={{ 
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                            marginBottom: '0.75rem' 
                        }}>📱</div>
                        <h3 style={{ 
                            color: 'white', 
                            marginBottom: '0.5rem',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)'
                        }}>রেসপনসিভ ডিজাইন</h3>
                        <p style={{ 
                            fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                            color: 'rgba(255, 255, 255, 0.8)'
                        }}>
                            যেকোনো ডিভাইসে ব্যবহার উপযোগী
                        </p>
                    </div>
                </div>

                {/* Stats Section for Laptop */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '2px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                            fontWeight: 'bold', 
                            color: 'white' 
                        }}>100+</div>
                        <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>সক্রিয় ব্যবহারকারী</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                            fontWeight: 'bold', 
                            color: 'white' 
                        }}>500+</div>
                        <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>টোডো সম্পন্ন</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                            fontWeight: 'bold', 
                            color: 'white' 
                        }}>99%</div>
                        <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>সন্তুষ্টি হার</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;