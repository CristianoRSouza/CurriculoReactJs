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
      <div className="min-h-screen bg-surface">
        <Menu />
        <main>
          <Introducao />
          <Routes>
            <Route path="/" element={null} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/formacoes" element={<Formacoes />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Whats />
      </div>
    </BrowserRouter>
  )
}

export default App
