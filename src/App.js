import logo from './logo.svg';
import './App.css';
import IncrementDecrement from './components/IncrementDecrement'

function App() {
  return (
    <div className="App">
      <IncrementDecrement count={2} />
    </div>
  );
}

export default App;
