import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import './index.css'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>

    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
