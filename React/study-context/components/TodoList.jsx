// Consumer 사용
import todoContext from '../context/TodoContext';
import { useState } from 'react';
import '../todo.css';

export default function TodoList() {
    return (
        <todoContext.Consumer>
            {({ todos, onAddTodo, onDeleteTodo, onToggleTodo }) => (
                <main>
                    <div>
                        <TodoForm onAddTodo={onAddTodo} />
                        <hr />
                        {todos.map((todo) => (
                            <section key={todo.id}>
                                <input type="checkbox" onClick={() => onToggleTodo(todo.id)} />
                                <div style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.content}</div>
                                <button onClick={() => onDeleteTodo(todo.id)}>❌</button>
                            </section>
                        ))}
                    </div>
                </main>
            )}
        </todoContext.Consumer>
    );
}

const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={inputValue} placeholder="할 일을 작성해 주세요" onChange={(e) => setInputValue(e.target.value)} />
            <button
                type="submit"
                onClick={() => {
                    onAddTodo(inputValue);
                    setInputValue('');
                }}>
                추가
            </button>
        </form>
    );
};
