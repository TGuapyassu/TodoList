import { MdDelete } from 'react-icons/md'

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
        <ul className='todo-list'>
            {
                todos.map((todo) => (
                    <li key={todo.id.toString()}>
                        <span
                            className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                            onClick={() => onToggle(todo)}
                        >{todo.title}</span>
                        <button
                            className='remove'
                            type='button'
                            onClick={() => onRemove(todo)}
                        >
                            <MdDelete size={28} />
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList