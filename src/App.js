import Counter from './Counter'
import Todo from './Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Counter to add</h2>
      <Counter />
      <h3>List of what to do </h3>
      <Todo />
    </div>
  );
}

export default App;
