import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//import Counter from './components/Counter'
//import Child1 from './components/child1'
import Cards from './components/Cards'

function App() {
  const [info, setInfo] = useState([{name: "Ayush",
    rollno: 21
  },
  {name: "Akshay",
    rollno: 22
  },{name: "Arit",
    rollno: 23
  },{name : "Ankit",
    rollno: 24
  }

])

  return (
    <>
     {/* <Child1 name = {info[0].name}  rollno = {info[0].rollno}/> */}
   {info.map((item, index) => (
    <Cards key={index} name = {item.name} age = {item.rollno}/>
   ))}
    </>
  )
}

export default App
