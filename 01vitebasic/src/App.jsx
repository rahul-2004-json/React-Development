import Test from "./Test";

function App() {

  //This App function will return only one thing
  //Hence in order to return multiple things but as one element only we use <></>
  return (
    //Will not run
    // <Test/>
    // <h1>Hi there </h1>


    //instead use this
    <>
      <Test/>
      <h1>Hello There</h1>
    </>
  )
}

export default App
