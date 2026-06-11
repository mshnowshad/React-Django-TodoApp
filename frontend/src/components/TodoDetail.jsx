import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // ← useParams নতুন
import API from '../api/axios';

function TodoDetail() {
    // URL থেকে id নেওয়া হচ্ছে — /todos/5 হলে id = "5"
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTodo();
    }, [id]);

    const fetchTodo = async () => {
        setLoading(true);
        try {
            const response = await API.get(`/todos/${id}/`);
            setTodo(response.data);
        } catch (err) {
            setError("Todo খুঁজে পাওয়া যায়নি।");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>লোড হচ্ছে...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Todo Detail</h2>
            <p>Title: {todo?.title}</p>
            <p>Status: {todo?.completed ? "✅ Done" : "⏳ Pending"}</p>
            <button onClick={() => navigate('/todos')}>
                ← ফিরে যাও
            </button>
        </div>
    );
}

export default TodoDetail;