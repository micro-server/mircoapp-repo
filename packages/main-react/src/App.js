import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
       <header className="App-header" onClick={()=>{window.history.pushState({},"",'/')}} >
        <img src={logo} className="App-logo" alt="logo" width={50}/>
        这里是基座 - 主应用
        </header>
     <div className='box'>
      <ul>
          <li onClick={()=>{window.history.pushState({},"",'/child-sub-react')}}><button>微应用 - sub-react</button></li>
      </ul>
      <div className="mainapp-sub">
        {/* 子应用 */}
        <main id="subapp-viewport"></main>
      </div>
     </div>
    </div>
  );
}

export default App;
