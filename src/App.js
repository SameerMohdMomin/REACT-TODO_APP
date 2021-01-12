
import './App.css';
import {TodoContext} from './component/TodoContext';
import Form from './component/Form';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <TodoContext>
          <Form/>
          <Todo/>
      </TodoContext>
    </div>
  );
}

export default App;
