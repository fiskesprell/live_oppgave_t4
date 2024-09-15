import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SchoolSystem from "./components/SchoolSystem";


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <SchoolSystem/>
    </section>
  )
}

export default App
