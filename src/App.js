import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState(['Todo 1', "todo 2"]);

  function createTodo () {

  }

  return (
    <div className="App">
      <input type = "text" />
      <button onClick={createTodo}>Click</button>
      <TodoList todosToList={todos} />
    </div>
  );
}

export default App;
