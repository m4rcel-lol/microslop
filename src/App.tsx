import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import GenericPage from './pages/GenericPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:pageId" element={<GenericPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
