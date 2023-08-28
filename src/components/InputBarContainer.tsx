function InputBarContainer() {
  return (
    <div className="input-bar-container">
        <label>What do you need to do?</label><br />
        <input className="todo-input-bar" type="text" /> <br />
        <button className="submit-button" type="submit">Add To-Do</button>
    </div>
  )
}

export default InputBarContainer