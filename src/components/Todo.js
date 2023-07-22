// import logo from './logo.svg';
import React, { useState } from 'react';
// import './App.css';

let globalID = 0
function Todo() {

  const [task, setTask] = useState("")
  const [toDos, setToDos] = useState([])

  function createToDo() {
    setToDos(oldToDos => {
      setTask('')
      return [...oldToDos, { todo: task, id: globalID++ }]
    })
  }

  function deleteBtn(itemID) {
    setToDos(oldToDos => oldToDos.filter(items => items.id !== itemID))
  }
  const CheckEnterKey = (e) => {
    if (e.keyCode === 13) {
      
      createToDo()

    }
  }
  return (
    <div>
      <h1>-:TO Do App:-
      </h1>
      <input className='res' onKeyDown={CheckEnterKey} type='text' value={task} onChange={e => {
        setTask(e.target.value)
      }}  />
      <button className='add' onClick={createToDo}>Create Todo</button>
      <ul>
        {toDos.map((items, index) => {
          return <div key={items.id}>
            <div className='list'><li>{items.todo} {items.id}</li></div>
            <button className='del' onClick={() => deleteBtn(items.id)}>❌</button>
          </div>
        })}
      </ul>
    </div>
  );
}

export default Todo
