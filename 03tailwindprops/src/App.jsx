import './App.css'
import Card from './components/Card';

function App() {

  //We can pass object and arrays also as props but they will be passed as variables only
  let obj={
    name:"Ravi",
    age:10
  }

  let myarr=[1,2,3,4]

  return (
   <>
    {/* Below Written code is neither js aur html it is jsx(html inside javascript) */}
    <h1 className='bg-cyan-400 text-white rounded-3xl p-4 mb-4'>Tailwind Practice With Props</h1>
    {/* The props name used here should be used exactly wherever needed */}
    <Card username="Meghan" myobj={obj}  btntext='Click me'/>
    
   </>
  )
}

export default App;
