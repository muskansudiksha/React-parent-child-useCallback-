import logo from './logo.svg';
import './App.css';
import React,{useState,useRef, useEffect} from 'react';

function App() {
  const [search,setSearch] = useState('');
  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef?.current?.focus();
  },[]);
  return (
    <div>
      <input ref={inputRef} value={search} onChange={(e)=>{setSearch(e.target.value)}} />
    </div>
  );
}

export default App;
