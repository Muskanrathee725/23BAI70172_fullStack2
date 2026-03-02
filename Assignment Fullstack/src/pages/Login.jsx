import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate])

  const handleLogin = () => {
    localStorage.setItem('token', 'ecotrack-demo-token')
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className ="flex flex-col items-center justify-center min-h-screen gap-4 bg-black border border-green-200 rounded-lg p-8 shadow-md">
      <h1 className="text-8xl font-bold text-blue-400">EcoTrack Login</h1>
      <p className="text-white text-3xl mt-10 mb-10">Please log in to access your dashboard.</p>
      <button onClick={handleLogin} className="text-2xl bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors border-3">
        Login
      </button>
    </div>
  )
}

export default Login
