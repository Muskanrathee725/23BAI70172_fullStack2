import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isLoggedIn = Boolean(localStorage.getItem('token'))
  const onLoginPage = location.pathname === '/login'

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  if (!isLoggedIn && onLoginPage) {
    return null
  }

  return (
    <nav className="flex items-center justify-around text-xl p-4 bg-green-700 text-white">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/water">Water Tracker</Link>
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </nav>
  )
}

export default Navbar
