import logs from './../data/logs';

const Logs = ()=>{
    return(
        <div>
        <div style={{marginLeft: 'auto', backgroundColor: "#323232ff",marginRight: "auto", maxWidth: "30%", padding: 20,marginBottom: 10, marginTop: 10, borderRadius: 10, borderColor: "red", borderWidth: 2, borderStyle: "solid"}}>
            <h2>High Carbon Emission</h2>
            {logs.filter((ele)=>{
                return ele.carbon >= 4; 
            }).map((ele)=> {
                return(
                    <>
                        <h3 style={{color: "red"}}>{ele.activity} {ele.carbon}</h3>
                    </>
                )
            })}
        </div>
        
        <div style={{marginLeft: 'auto', backgroundColor: "#323232ff",marginRight: "auto", maxWidth: "30%", padding: 20, borderRadius: 10, borderColor: "green", borderWidth: 2, borderStyle: "solid"}}>
            <h2>Low Carbon Emission</h2>
                
            {logs.filter((ele)=>{
                return ele.carbon < 4; 
            }).map((ele)=> {
                return(
                    <>
                        <h3 style={{color: "Green"}}>{ele.activity} {ele.carbon}</h3>
                    </>
                )
            })}
        </div>
        
        </div>

    )
}
export default Logs; 