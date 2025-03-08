import Poke from './pages/Poke'
import Dex from './pages/Dex'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <div className="App font-poppins min-h-screen flex flex-col">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Poke />} />
            <Route path='/dex' element={<Dex />} />
          </Routes>       
        </BrowserRouter>
        <Footer />
      </div>


    </>
  )
}

export default App
