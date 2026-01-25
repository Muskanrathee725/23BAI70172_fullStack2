const Header = (props) =>{
    const title = props.title;
    return(
      <header style = {{
        padding:"1rem",
        backgroundColor: "black",
        borderBottom: "5px solid white",
        color: "white",
        textAlign: "center",
        borderRadius: "0 0 10px 10px"
      }}>
        <h1>{title}</h1>
      </header>
    );
}

export default Header;   