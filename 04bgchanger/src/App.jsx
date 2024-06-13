import { useState } from "react"

function App() {
  const [color, setColor] = useState("Lavender")



  //+++++++++++++++++++++ Note onClick={} expects a function inside whether it be callback or normal function  +++++++++++++++++++
  // if we give it like onClick={setColor} then we will not be able to give the parameter value
  //if we write like onClick={setColor("red")}   then as we write setColor("red") this will directly execute the function and return the value to onClick but onClick wants a function
  //Hence we can write like onClick={()=>{}} a callback function inside 
  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 bg-white  mb-10 rounded-xl py-2 px-3" >

      <button className="outline-none px-4 py-2 rounded-full "
      style={{backgroundColor: "red"}}
      onClick={()=>{setColor("red")}}
      >Red</button>

      <button className="outline-none px-4 py-2 rounded-full "
      style={{backgroundColor: "#E6E6FA"}}
      onClick={()=>{setColor("#E6E6FA")}}
      >Lavender</button>

      <button className="outline-none px-4 py-2 rounded-full "
      style={{backgroundColor: "cyan"}}
      onClick={()=>{setColor("cyan")}}
      >Cyan</button>

      <button className="outline-none px-4 py-2 rounded-full text-white "
      style={{backgroundColor: "black"}}
      onClick={()=>{setColor("black")}}
      >Black</button>

      <button className="outline-none px-4 py-2 rounded-full "
      style={{backgroundColor: "green"}}
      onClick={()=>{setColor("green")}}
      >Green</button>

      <button className="outline-none px-4 py-2 rounded-full "
      style={{backgroundColor: "blue"}}
      onClick={()=>{setColor("blue")}}
      >Blue</button>
      </div>
      </div>
    </div>
  )
}

export default App
