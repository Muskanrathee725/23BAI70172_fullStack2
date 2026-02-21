import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. BrowserRouter ko react-router-dom se import kar
import { BrowserRouter } from 'react-router-dom' 
// 2. Provider aur Store ko import kar
import { Provider } from 'react-redux'
import store from './stores/store.js' 
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>
)