import { createContext, useContext, useState} from "react";
 //Empty context global state variaable initially empty
const AuthContext = createContext(null);

//passing it to the children components
//what awe are passing isAuthenticated and setIsauthenticated
export const AuthProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
//returning the provider 
    return(
        <AuthContext.Provider value={
           {isAuthenticated,setIsAuthenticated}
        }>
            {children}
            </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

