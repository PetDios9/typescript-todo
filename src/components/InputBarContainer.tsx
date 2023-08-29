import {useState, ChangeEvent} from 'react'

function InputBarContainer() {
  const [textInput, setTextInput] = useState<string>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value)
  }
  return (
    <div className="input-bar-container">
        <label>What do you need to do?</label><br />
        <input className="todo-input-bar" type="text" value={textInput} onChange={handleChange} /> <br />
        <button className="submit-button" type="submit">Add To-Do</button>
    </div>
  )
}

export default InputBarContainer