import { Routes, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css'


function App() {
  return (
    <div className="">
      <img src={logo} className="App-logo" alt="logo" width={50}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
function Home() {
  return <div>
    <main>
      <h2>Welcome to the home page</h2>
    </main>
    <nav>
      <Link to="/about">about</Link>
    </nav>
  </div>
}
function About() {
  return <div>
    <main>
      <h2>Welcome to the about page</h2>
    </main>
    <nav>
      <ol>
        <li>
          <botton>
            <Link to="/">home</Link>
          </botton>
        </li>
        <li>
          <botton>
            <Link to="/about">about</Link>
          </botton>
        </li>
      </ol>
    </nav>
  </div>
}


export default App;
