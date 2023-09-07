import './App.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Builder from './components/builder';

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
