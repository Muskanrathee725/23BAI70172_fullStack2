const userNameCheck = (username)=> {
    if (username === ""){
        return "guest"; 
    }
    return username; 
}

export { userNameCheck }; 