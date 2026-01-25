
import logs from '../data/logs.js'
import { calculateTotalCarbon } from '../data/Calculation.js'

  function Logs(){
    const totalCarbon = calculateTotalCarbon(logs);
    
  return(
    <div style={{color: 'black',background: 'white',height: '100%',border: '5px solid black',boxShadow: '0 8px 18px rgba(251, 246, 246, 0.2)',margin: '100px',padding:'40px'}} >
     <h1>Total Carbon Footprint: {totalCarbon}</h1>

     <h2>Activity Logs </h2>
     <table style={{flex: 1, border: "2px solid black", margin: "auto", textAlign: "center"}}>
      <thead>
        <tr>
          <th style={{border: "2px solid black"}}>Activity</th>
          <th style={{border: "2px solid black"}}>Carbon Footprints</th>
        </tr>
      </thead>

      <tbody>
        {logs.map((log)=>(
          <tr key = {log.id} style={{color : 'white', backgroundColor: 'blue'}}>
            <td>{log.activity}</td>
            <td>{log.carbon}kg</td>
          </tr>
        ))}
      </tbody>
     </table>



     <h2 style={{marginTop: "100px"}}>Filtered Logs less than equal to  4kg</h2>

     <table style = {{flex: 1, border: "2px solid black", margin: "auto"}}>
      <thead>
        <tr>
          <th style={{border: "2px solid black", textAlign: "center"}}>Activity</th>
          <th style={{border: "2px solid black", textAlign: "center"}}>Carbon Footprints</th>
        </tr>
         </thead>
        <tbody>
          {
            logs.filter((log)=> log.carbon <= 4).map((log) =>(
              <tr key = {log.id} style={{color : 'white', backgroundColor: 'green'}}>
                <td>{log.activity}</td>
                <td>{log.carbon}kg</td>
              </tr>
            ))
          }
        </tbody>
     
     </table>




     <h2 style={{marginTop: "100px"}}>Filtered Logs greater than 4kg</h2>
     <table style = {{flex: 1, border: "2px solid black", margin: "auto"}}>
      <thead>
        <tr>
          <th style={{border: "2px solid black", textAlign: "center"}}>Activity</th>
          <th style={{border: "2px solid black", textAlign: "center"}}>Carbon Footprints</th>
        </tr>
         </thead>
        <tbody>
          {
            logs.filter((log)=> log.carbon > 4).map((log) =>(
              <tr key = {log.id} style={{color : 'white', backgroundColor: 'red'}}>
                <td>{log.activity}</td>
                <td>{log.carbon}kg</td>
              </tr>
            ))
          }
        </tbody>
     
     </table>

     
     

     
     
    </div>
  )

  }
export default Logs

