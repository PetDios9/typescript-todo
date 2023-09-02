import {useState, ChangeEvent} from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/todoStore'
import { addTodo } from '../redux/slices/todosSlice'

function InputBarContainer() {
  const [todoInput, setTodoInput] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.currentTarget.value)
  }

  //Redux
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="input-bar-container">
        <label>What do you need to do?</label><br />
        <input className="todo-input-bar" type="text" value={todoInput} onChange={handleChange} /> <br />
        <button className="submit-button" type="submit" onClick={() => {
          if (todoInput) {
            dispatch(addTodo(todoInput!))
            setTodoInput('')
          }
        }}>
          Add To-Do
        </button>
    </div>
  )
}

export default InputBarContainer