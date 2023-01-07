import { lazy } from 'react'
import { Home, Results } from './pages'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/config/firebaseConfig'

const HomeLazy = lazy(() => import('./pages/home/Home'))
const ResultsLazy = lazy(() => import('./pages/results/Results'))

export function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLazy />} />
          <Route path='/results' element={<ResultsLazy />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
