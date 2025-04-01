import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategoriesProvider } from './contexts/CategoriesProvider.jsx'
import { AuthorsProvider } from './contexts/AuthorsProvider.jsx'
import { ActorsProvider } from './contexts/ActorsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <AuthorsProvider>
          <ActorsProvider>
            <App />
          </ActorsProvider>
        </AuthorsProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </StrictMode>,
)
