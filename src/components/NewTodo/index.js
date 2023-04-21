import { useState } from "react"

const NewTodo = ({ onNewTodo }) => {
    const ESCAPE_KEY = 27
    const ENTER_KEY = 13
    const [value, setValue] = useState('')

    const erase = () => {
        setValue('')
    }

    const submit = () => {
        if (onNewTodo) {
            onNewTodo(value)
            erase()
        }
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onkeydown = (e) => {
        if (e.which === ENTER_KEY) {
            submit()
        } else if (e.which === ESCAPE_KEY) {
            erase()
        }
    }

    return (
        <input
            className='new-todo'
            placeholder='o que precisa ser feito?'
            value={value}
            onChange={onChange}
            onKeyDown={onkeydown}
        />
    )
}

export default NewTodo