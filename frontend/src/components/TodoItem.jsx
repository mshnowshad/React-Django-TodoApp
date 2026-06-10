import { useState } from 'react';

function TodoItem({ todo, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleUpdate = () => {
        if (newTitle.trim()) {
            onUpdate(todo.id, { title: newTitle, completed: todo.completed });
            setIsEditing(false);
        }
    };

    const toggleComplete = () => {
        onUpdate(todo.id, { title: todo.title, completed: !todo.completed });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        }
    };

    return (
        <li>  {/* ← div কে li তে পরিবর্তন করুন */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleComplete}
            />

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                    <button onClick={handleUpdate}>💾 Save</button>
                    <button onClick={() => setIsEditing(false)}>❌ Cancel</button>
                </>
            ) : (
                <>
                    <span style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        opacity: todo.completed ? 0.7 : 1
                    }}>
                        {todo.title}
                    </span>
                    <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
                    <button onClick={() => onDelete(todo.id)}>🗑️ Delete</button>
                </>
            )}
        </li>
    );
}

export default TodoItem;