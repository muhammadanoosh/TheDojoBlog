import './App.css';
import Home from './Home';
import Navbar from './Navbar';
function App() {
  // const title='Welcome To the new blog';
  // const likes = 50;
  // const person ={name:'Anoosh',age:30 }
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
            <Home/>
      </div>
    </div>
  );
}

export default App;
