import './App.css';  // ← এই লাইনটা থাকতে হবে
import { useState, useEffect } from 'react';
import API from './api/axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    // ১. Page load হলে সব todos আনো
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await API.get('/todos/');
        setTodos(response.data);
    };

    // ২. নতুন todo যোগ করো
    const addTodo = async (title) => {
        const response = await API.post('/todos/', { title, completed: false });
        setTodos([response.data, ...todos]);
    };

    // ৩. Todo delete করো
    const deleteTodo = async (id) => {
        await API.delete(`/todos/${id}/`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // ৪. Todo update করো
    const updateTodo = async (id, updatedData) => {
        const response = await API.put(`/todos/${id}/`, updatedData);
        setTodos(todos.map(todo => todo.id === id ? response.data : todo));
    };

    return (
        <div>
            <h1>📝 Todo App</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList
                todos={todos}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
            />
        </div>
    );
}

export default App;