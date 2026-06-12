import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import API from '../api/axios';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await API.get('/todos/');
            setTodos(response.data);
        } catch (err) {
            if (err.response) {
                setError(`Server Error: ${err.response.status}`);
            } else if (err.request) {
                setError("Server-এর সাথে connect করা যাচ্ছে না।");
            } else {
                setError("কিছু একটা সমস্যা হয়েছে।");
            }
        } finally {
            setLoading(false);
        }
    };

    const addTodo = async (title) => {
        const toastId = toast.loading('Adding...'); // ← loading শুরু
        try {
            const response = await API.post('/todos/', { title, completed: false });
            setTodos([response.data, ...todos]);
            toast.success('Todo added! ✅', { id: toastId }); // ← loading replace
        } catch (err) {
            toast.error('Add failed! ❌', { id: toastId });   // ← loading replace
        }
    };

    const deleteTodo = async (id) => {
        const toastId = toast.loading('Deleting...'); // ← loading শুরু
        try {
            await API.delete(`/todos/${id}/`);
            setTodos(todos.filter(todo => todo.id !== id));
            toast.success('Todo deleted! 🗑️', { id: toastId }); // ← loading replace
        } catch (err) {
            toast.error('Delete failed! ❌', { id: toastId });   // ← loading replace
        }
    };

    const updateTodo = async (id, updatedData) => {
        const toastId = toast.loading('Updating...'); // ← loading শুরু
        try {
            const response = await API.put(`/todos/${id}/`, updatedData);
            setTodos(todos.map(todo => todo.id === id ? response.data : todo));
            toast.success('Todo updated! ✏️', { id: toastId }); // ← loading replace
        } catch (err) {
            toast.error('Update failed! ❌', { id: toastId });   // ← loading replace
        }
    };

    if (loading) return <p>লোড হচ্ছে...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h1>📝 Todo List</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList
                todos={todos}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
            />
        </div>
    );
}

export default TodoPage;