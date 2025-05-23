import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaticBackground from './components/StaticBackground'
import RegistrationForm from './components/RegistrationForm'
import '../src/Assets/fonts.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StaticBackground/>
        <RegistrationForm/>
    </>
  )
}

export default App
