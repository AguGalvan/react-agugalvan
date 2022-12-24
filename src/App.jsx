import { useState } from 'react'
import {ItemListContainer} from './components/container/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>

          <NavBar />
          <ItemListContainer saludo={'En construccion'} />
    
    </>
  )
}

export default App
