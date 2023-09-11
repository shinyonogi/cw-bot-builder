import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Builder from './components/Builder';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className='main'>
        <Navbar/>
        <Builder/>
      </div>
    </div>
  );
}

export default App;
