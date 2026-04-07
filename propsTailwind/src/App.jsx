import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/cars'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"abhya",
    age:21
  }
  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl  align-middle'> hlooe form tailwind </h1>
     <Card username= "Abhay  Tewatia" btnText= "lets read"/>
     <Card username= "Abhay" btnText= "lets Study" />
    
    </>
  )
}

export default App
