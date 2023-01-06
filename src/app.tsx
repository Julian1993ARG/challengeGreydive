import { Home, Results } from './pages'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
