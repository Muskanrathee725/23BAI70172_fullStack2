import logs from "../data/logs";


const Dashboard = ()=>{
    const sum = logs.reduce((acc, ele) => {
        return acc + ele.carbon; 
    }, 0); 

    return(
        <div style={{marginLeft: 'auto', backgroundColor: "#323232ff",marginRight: "auto", maxWidth: "30%", padding: 20, borderRadius: 10, borderColor: "blue", borderWidth: 2, borderStyle: "solid"}}>
            <h1 style={{textAlign: 'center', color: "#ffff"}}>Total Carbon: {sum}</h1>
            <table style={{
            margin: "40px auto",
            borderCollapse: "collapse",
            color: "#fff",
            width: "70%",
            textAlign: "center"
            }}
            border="1">
                <tr>
                    <td>Id</td>
                    <td>Activity</td>
                    <td>Carbon</td>
                </tr>
                {logs.map((element, index)=>{
                    return (    
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.activity}</td>
                            <td>{element.carbon}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    ); 
}; 
export default Dashboard; 