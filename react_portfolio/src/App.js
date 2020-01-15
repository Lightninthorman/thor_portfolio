import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Todo(props){
    return(
        <div className="todo">
            {props.todo.text}
        </div>
    )
}

function TodoForm(props){
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value){
            return;
        }
        addTodo(value);
        setValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}

function App() {
  const [todos,setTodos] = useState([
      {
          text: 'Learn about React',
          isCompleted: false
      },
      {
          text: 'Meet friend for lunch',
          isCompleted: false
      },
      {
          text: 'Build really cool todo app',
          isCompleted: false
      }
  ]);

  const addTodo = text => {
      const newTodos = [...todos, {text}];
      setTodos=(newTodos);
  }

  return(
    <div className='app'>
        <div className="todo-list">
            {todos.map((todo, key)=>(
                <Todo key={key} index={key} todo={todo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    </div>
  )
}

export default App;
