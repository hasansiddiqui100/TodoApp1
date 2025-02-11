import React, { useState } from 'react'
import '../src/App.css'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if(inputText!==''){
    setListTodo([...listTodo, inputText])}
  }
  let deleteListItem = (key) => {
    let newListTodo = [...listTodo]
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }

 
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}  />
        {/* <TodoList/> */}
        <h1 className='app-Heading'>Todo</h1>
        <hr />
        {listTodo.map((item, ind) => { return (<TodoList item={item} key={ind} deleteListItem={deleteListItem} index={ind} />) })

        }
      </div>
    </div>
  )
}

export default App