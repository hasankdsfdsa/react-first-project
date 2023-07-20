import { useState } from "react"

function App() {
  let [count,setCount] = useState(20)
  let increment = ()=>{
    if(count<30){
      count++
      setCount(count)
    }
  }
  let dectiment =()=>{
    if(count>0){
      count--
      setCount(count)
    }
  }
  return (
   <>
   <h1>{count}</h1>
   <button onClick={increment}>Incriment</button>
   <button onClick={dectiment}>Decriment</button>
    </>
  )
}

export default App
