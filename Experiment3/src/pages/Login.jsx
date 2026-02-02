import { useAuth } from"../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
    console.log("login clicked");
    setIsAuthenticated(true);
    navigate("/");
    }

    return(
        <>
        <h1 style={
            {display: 'flex',
            alignSelf: 'center',
            color: 'white',
            backgroundColor: 'black',
            height: '100px',
            width: '200px',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid white',
            borderRadius: '10px',
            marginTop: '50px',
            marginLeft: '350px',
            boxShadow: '3px 4px 10px white'
            }}
        >login</h1>

        <button style={{
            padding: '10px 20px',
            fontSize: '25px',
            color: 'black',
            backgroundColor: 'white',
            marginLeft: '400px',
            marginTop: '20px',
            border: '2px solid grey',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '3px 4px 10px black'
        }}onClick={handleLogin}>Login</button>
        </>
    )
}
export default Login;
