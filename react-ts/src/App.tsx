import Todo from './models/todo';

import Todos from './components/Todos';

function App() {
  const TODOS = [
    new Todo(1, 'Learn Typescript'),
    new Todo(2, 'Learn CSS')
  ];

  return (
    <div>
      <Todos todos={TODOS} />
    </div>
  );
}

export default App;