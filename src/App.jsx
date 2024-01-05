import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Outlet from './components/Outlet/Outlet'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
