import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onUpdate }) {
    if (todos.length === 0) {
        return <p>কোনো todo নেই। নতুন একটা বানাও!</p>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
}

export default TodoList;