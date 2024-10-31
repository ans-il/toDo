
import React, { useState } from 'react'
import './App.css';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map(todo =>
          <div className="todo">
            <div className="left">
              <input onChange={(e) => {
                setToDos(toDos.filter(toDo => {
                  if (toDo.id === todo.id) {
                    toDo.status = e.target.checked
                  }
                  return toDo
                })
                )
              }} value={todo.status} type="checkbox" name="" id="" />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i onClick={(e) => {
                setToDos((toDos.filter(item => item.id !== todo.id)))
              }} className="fas fa-times"></i>
            </div>
          </div>
        )
        }       
      </div>
      {toDos.map(elem => {
          if(elem.status){
            return(
            <h1>{elem.text}</h1>)
          }
          return null 
        })}
    </div>
  );
}

export default App;
