import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Introducao } from './components/Introducao'
import { Sobre } from './components/Sobre'
import { Formacoes } from './components/Formacoes'
import { Experiencia } from './components/Experiencia'
import { Whats } from './components/Whatsapp'

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Introducao/>
        <Whats/>
        <Routes>
          <Route path='/' element=""/>
          <Route path='/experiencia' element={<Experiencia/>}/>
          <Route path='/formacoes' element={<Formacoes/>}/> 
          <Route path='/sobre' element={<Sobre/>}/> 
      </Routes>
    </BrowserRouter>

  )
}

export default App
