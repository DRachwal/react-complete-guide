import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
  const todos = [
    new Todo('Todo 1'),
    new Todo('Todo 2')
  ];

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;