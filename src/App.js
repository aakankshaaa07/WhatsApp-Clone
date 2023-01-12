import './App.css';
import Sidebar from './Sidebar';
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App">
      <div className="app-grid">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
