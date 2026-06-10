import { useState } from 'react';

function TodoForm({ onAdd }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="📝 নতুন todo লিখো..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">➕ Add Todo</button>
        </form>
    );
}

export default TodoForm;