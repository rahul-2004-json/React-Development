import { useState } from 'react'
import './App.css'

function App() {
 
  
  //This way our variable will not be synced with UI 
  // let counter=16;

  // const updatecounter=()=>{
  //   counter=counter+1;
  //   console.log(counter,Date.now());
  // }



  //Hence we require hooks like useState()
  //useState is a hook that gives us variable and function that help us make our variables synced with UI
  let [counter,setCounter]=useState(15);

  //These functions are compulsory to make as they are related to the onclick events
  //Inside these functions if we want our variable to be updated wherever it being used , we need to just pass that value inside setCounter() and rest React will handle
  function addcounter(){
    if(counter <20){
    // counter=counter+1;
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    }
  }

  function decreaseCounter(){
    if(counter>0){
      // counter=counter-1;
      setCounter(counter-1);
      
  }

  return (
    <>
     <h1>Hello Project</h1>
     <h2>Counter value is {counter}</h2>
     <button onClick={addcounter}>+</button>
     <br/>
     <button onClick={decreaseCounter}>-</button>
    </>
  )
}
}

export default App
