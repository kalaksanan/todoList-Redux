import React from 'react'
import './App.css'
import Input from './component/input'
import TodoItem from './component/TodoItem'
import { selectTodoList } from './features/TodoSlice'
import { useSelector } from 'react-redux'

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className='App'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  )
}

export default App
