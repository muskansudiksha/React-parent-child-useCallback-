import React,{useState,useEffect,useRef} from 'react';

const customDebounce = (fn,delay)=>{
    let timerId;
    return function (...args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>{return fn(...args)},delay)
    };
};

const Debounce = ()=>{
    const [name,setName] = useState('');
    const handleSearch = (searchText)=>{
        console.log('SearchText :: ',searchText);
    }
    const debouncedSearch = useRef(customDebounce(handleSearch,500)).current;
    useEffect(()=>{
        if(name){
            debouncedSearch(name);
        }
    },[name]);
    return(
        <div> 
            <label>Name : </label>
            <input value = {name} onChange = {(e)=>{console.log(e.target.value);
            setName(e.target.value)}} />
        </div>
    );
};

export default Debounce;