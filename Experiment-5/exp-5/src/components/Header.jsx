import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Header(){
    const { isAuthenticated } = useAuth();

    return (
        <header style={{
            padding: 10, 
            margin:5,
            backgroundColor: '#87ff7aff',
            border: 'transparent', 
            borderRadius: 30,
            textAlign: 'center'
        }}>
            <h1>Ecco Track</h1>
            <nav style={{
                display: 'flex',
                justifyContent: 'center', 
                alignContent:'center', 
                gap: 10,
                marginBottom: 2
            }}>
                <Link to='summary'>Summary</Link>
                <Link to='analytics'>Analytics</Link>
                {isAuthenticated ? (
                    <Link to='/logout'>Logout</Link>
                ) : (
                    <Link to='/login'>Login</Link>
                )}
                <Link to='/logs'>Logs</Link>
            </nav>
        </header>
    ); 
}