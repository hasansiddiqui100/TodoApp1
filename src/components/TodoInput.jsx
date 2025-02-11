import React, { useState } from 'react'

function TodoInput(props) {
  const [inputText, setInputText] = useState('')
   const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevents form submission if inside a form
        props.addList(inputText);
        setInputText("");
      }
      }
  return (

    <div className="input-container">
      <input type="text" className='input-box-todo'
        placeholder='enter your text'
        onChange={e => { setInputText(e.target.value) }} 
        value={inputText}/>

      <button className='add-btn' onClick={() => {
        props.addList(inputText)
        setInputText("")
      } } onKeyDown={handleKeyPress}>+</button>

    </div>


  )
}

export default TodoInput