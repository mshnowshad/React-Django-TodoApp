import { useState, useEffect } from 'react';
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
        try {
            const response = await API.post('/todos/', { title, completed: false });
            setTodos([response.data, ...todos]);
        } catch (err) {
            setError("Todo যোগ করা যায়নি।");
        }
    };

    const deleteTodo = async (id) => {
        try {
            await API.delete(`/todos/${id}/`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (err) {
            setError("Todo delete করা যায়নি।");
        }
    };

    const updateTodo = async (id, updatedData) => {
        try {
            const response = await API.put(`/todos/${id}/`, updatedData);
            setTodos(todos.map(todo => todo.id === id ? response.data : todo));
        } catch (err) {
            setError("Todo update করা যায়নি।");
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