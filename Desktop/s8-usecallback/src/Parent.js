import React,{useState, useCallback} from 'react';
import Title from './Title.js';
import Count from './Count.js';
import Button from './Button.js';

function Parent() {
  const [age,setAge] = useState(25);
  const [salary,setSalary] = useState(1000000);

  const incrementAge = useCallback(()=>{
    setAge((prevVal)=>(prevVal + 1));
  },[age]);
  const incrementSalary = useCallback(()=>{
    setSalary((prevVal)=>(prevVal + 100000));
  },[salary]);

  return (
    <>
      <Title />
      <Count text='Age' count={age}/>
      <Button handleClick = {incrementAge}>Increment Age</Button>
      <Count text='Salary' count={salary}/>
      <Button handleClick = {incrementSalary}>Increment Salary</Button>    
    </>
  );
}

export default Parent;
