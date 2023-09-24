import { useState } from 'react'
import { Router, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import icon from './assets/imgbackground.png'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen min-h-screen bg-white flex items-cetner justify-start flex-col @container relative'>
        <div className='w-screen @[420px]:h-[60px] @[200px]:h-[45px] bg-white flex flex-row items-center justify-between sticky top-0 z-30 backdrop-blur-sm opacity-80'>
          <div className='mx-3 w-[70px] h-[70px] flex items-center justify-center'>
            <Link to="/"><img src={icon} className='@[420px]:w-[70px] @[420px]:h-[55px] @[200px]:w-[60px] @[200px]:h-[45px]'/></Link>
          </div>
          <div className='flex flex-row items-center justify-evenly @[320px]:w-[150px] @[280px]:w-[150px] @[200px]:w-[150px]'>
            <div className='w-[80px] flex items-center justify-center'>
            <Link to="/" className='cursor-pointer @[280px]:text-2xl @[200px]:mx-1 @[320px]:text-3xl @[200px]:text-xl @[320px]:mx-2'><span className='harabara'>About</span></Link>
            </div>
          </div>
        </div>
      <div>
        <Routes>
          <Route path='/' element={<About/>}/>
        </Routes>
      </div>
      
      
    </div>
  )
}

export default App
