import { lazy, useEffect } from 'react'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/config/firebaseConfig'
import { createRandonUsers } from '@/data'
import ReactGA from 'react-ga4'

const HomeLazy = lazy(() => import('./pages/home/Home'))
const ResultsLazy = lazy(() => import('./pages/results/Results'))

const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID

export function App () {
  useEffect(() => {
    createRandonUsers(15)
    ReactGA.initialize(googleAnalyticsId)
  }, [])
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
