//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import logs from './data/logs.js'
//import mappcarbon from './pages/logs.js'
import { calculateTotalCarbon } from './pages/calculations.js'


  function App(){
    const totalCarbon = calculateTotalCarbon(logs);
    //const mappedLogs = mappcarbon(logs);
    
    console.log("Total Carbon Footprint:", totalCarbon);
    ////console.log("Mapped Logs with Carbon >= 4:", mappedLogs);
  
  

  return(
    <>
  
     <h1>Total Carbon Footprint: {totalCarbon}</h1>

     
     <h2>Activity Logs </h2>
     <table style={{flex: 1, border: "2px solid white", margin: "auto", textAlign: "center"}}>
      <thead>
        <tr>
          <th style={{border: "2px solid white"}}>Activity</th>
          <th style={{border: "2px solid white"}}>Carbon Footprints</th>
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

     <table style = {{flex: 1, border: "2px solid white", margin: "auto"}}>
      <thead>
        <tr>
          <th style={{border: "2px solid white", textAlign: "center"}}>Activity</th>
          <th style={{border: "2px solid white", textAlign: "center"}}>Carbon Footprints</th>
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

     <table style = {{flex: 1, border: "2px solid white", margin: "auto"}}>
      <thead>
        <tr>
          <th style={{border: "2px solid white", textAlign: "center"}}>Activity</th>
          <th style={{border: "2px solid white", textAlign: "center"}}>Carbon Footprints</th>
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

     
     

     
     
    </>
  )

  }
export default App

