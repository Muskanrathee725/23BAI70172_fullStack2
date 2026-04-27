import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

export default function Logout(){
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(false);
    navigate('/login');
  }, [setIsAuthenticated, navigate]);

  return <p>Logging you out...</p>
}
