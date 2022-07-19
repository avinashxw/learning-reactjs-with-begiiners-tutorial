import './App.css';
import React, {useState} from 'react';

function App() {

  const [data, setData] = useState('buddy');
  const [status, setStatus] = React.useState(true);
  function getData(val) {
    setData(val.target.value);
  }

  return (
    <div className="App">
      { status ? <h1>Hello {data}!</h1>:null }
      <span>Enter your name: </span><input type="text" onChange={getData} />
      <br/>
      <br/>
      <button style={{
        margin: '1rem',
        fontSize: '1rem',
        color: '#FFF',
        backgroundColor: '#000',
        padding: '0.4rem',
        borderRadius: '0.3rem'
      }} onClick={()=>setStatus(false)}>Hide</button>
      <button style={{
        margin: '1rem',
        fontSize: '1rem',
        color: '#FFF',
        backgroundColor: '#000',
        padding: '0.4rem',
        borderRadius: '0.3rem'
      }} onClick={()=>setStatus(true)}>Show</button>
      <button style={{
        margin: '1rem',
        fontSize: '1rem',
        color: '#FFF',
        backgroundColor: '#000',
        padding: '0.4rem',
        borderRadius: '0.3rem'
      }} onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
