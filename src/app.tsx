import { lazy, useEffect } from 'react'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/config/firebaseConfig'
import { createRandonUsers } from '@/data'

const HomeLazy = lazy(() => import('./pages/home/Home'))
const ResultsLazy = lazy(() => import('./pages/results/Results'))

export function App () {
  useEffect(() => { createRandonUsers(5) }, [])
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
