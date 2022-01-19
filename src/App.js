import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import {useState} from 'react'
import React from 'react';

function App() {
   const [todos, setTodos] = useState(['Todo1', 'Todo2', 'Todo3'])
 return (<>
     <TodoList todos={todos}/>
     <input type = "text" />
     <button>Add Todo</button>
     <button>Clear Completed Todos</button>
     <div>0 left to do</div>
 </>
     
 )
}

export default App;
