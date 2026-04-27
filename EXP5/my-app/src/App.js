import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API } from './productAPI';



function App() {
  const [data, setData] = useState({});

  useEffect(()=>{
    API().then((response) => {
      setData(response);
    });
  }, []); 
  return (
    <div className="App">
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age}</h1>
    </div>
  );
}

export default App;
