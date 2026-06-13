import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Navbar({ token, setToken }) {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('username');
        setToken(null);
        toast.success('Logged out successfully! 👋');
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/">🏠 Home</Link>
            {token ? (
                <>
                    <Link to="/todos">📝 My Todos</Link>
                    <span style={{ color: 'white', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
                        👤 {username}
                    </span>
                    <button onClick={handleLogout} style={{ margin: 0, padding: '0.5rem 1rem' }}>
                        🚪 Logout
                    </button>
                </>
            ) : (
                <>
                    <Link to="/login">🔐 Login</Link>
                    <Link to="/register">📝 Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;