import { useNavigate } from 'react-router-dom';

function Home({ setToken }) {
    const navigate = useNavigate();

    const token = localStorage.getItem('access');
    const username = localStorage.getItem('username'); // ← এখান থেকে নাও

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('username'); // ← logout এ remove
        setToken(null);
        window.location.href = '/login';
    };

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

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.5rem', color: 'white' }}>
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

                {/* Login/Logout Section */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {token ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <span style={{ color: 'white', fontSize: '1.1rem' }}>👋 হ্যালো, <strong>{username}</strong></span>
                            <button
                                onClick={handleLogout}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    background: 'rgba(255,100,100,0.3)',
                                    color: 'white',
                                    border: '2px solid rgba(255,100,100,0.6)',
                                    borderRadius: '0.75rem',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                }}
                            >
                                🚪 Logout
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => navigate('/register')}
                                style={{
                                    padding: '0.7rem 1.8rem',
                                    background: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    border: '2px solid white',
                                    borderRadius: '0.75rem',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                }}
                            >
                                📝 Register
                            </button>
                            <button
                                onClick={() => navigate('/login')}
                                style={{
                                    padding: '0.7rem 1.8rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.75rem',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                }}
                            >
                                🔑 Login
                            </button>
                        </div>
                    )}
                </div>

                {/* Todo Button — শুধু login থাকলে */}
                {token && (
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                                fontWeight: '600',
                                minWidth: '200px'
                            }}
                        >
                            📋 টোডো দেখুন
                        </button>
                    </div>
                )}

                {/* Features */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    paddingTop: '2rem',
                    borderTop: '2px solid rgba(255, 255, 255, 0.2)'
                }}>
                    {[
                        { icon: '✅', title: 'সহজ ব্যবস্থাপনা', text: 'সহজেই টোডো যোগ, এডিট ও ডিলেট করুন' },
                        { icon: '🎯', title: 'টার্গেট ফোকাসড', text: 'আপনার কাজগুলিতে মনযোগ দিন' },
                        { icon: '📱', title: 'রেসপনসিভ ডিজাইন', text: 'যেকোনো ডিভাইসে ব্যবহার উপযোগী' },
                    ].map((f) => (
                        <div key={f.title} style={{ textAlign: 'center', padding: '1rem' }}>
                            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '0.75rem' }}>{f.icon}</div>
                            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>{f.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{f.text}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '2px solid rgba(255, 255, 255, 0.2)'
                }}>
                    {[
                        { num: '100+', label: 'সক্রিয় ব্যবহারকারী' },
                        { num: '500+', label: 'টোডো সম্পন্ন' },
                        { num: '99%', label: 'সন্তুষ্টি হার' },
                    ].map((s) => (
                        <div key={s.label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 'bold', color: 'white' }}>{s.num}</div>
                            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Home;