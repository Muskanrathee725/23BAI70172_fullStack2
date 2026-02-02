import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../stores/logSlice";
import { calculateTotalCarbon } from '../data/Calculation.js';

function Logs() {
  const dispatch = useDispatch();
  
  // 1. Redux store se data, status aur error nikalna
  const { data, status, error } = useSelector((state) => state.logs);

  // 2. useEffect use karke data fetch karna (jaise image mein tha)
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  // 3. Loading aur Error handling
  if (status === "pending") {
    return <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '40px', color: 'white' }}>Loading Logs ......</p>;
  }

  if (status === "failed") {
    return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;
  }

  // Calculation function ko ab Redux ke data ke saath call karenge
  const totalCarbon = data ? calculateTotalCarbon(data) : 0;

  return (
    <div style={{ color: 'black', background: 'white', height: '100%',width:'700px', border: '5px solid black', boxShadow: '0 8px 18px rgba(251, 246, 246, 0.2)', marginLeft: '450px', padding: '40px' }} >
      <h1>Total Carbon Footprint: {totalCarbon}</h1>

      <h2>Activity Logs</h2>
      <table style={{ flex: 1, border: "2px solid black", margin: "auto", textAlign: "center", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid black" }}>Activity</th>
            <th style={{ border: "2px solid black" }}>Carbon Footprints</th>
          </tr>
        </thead>
        <tbody>
          {/* Ab 'logs' ki jagah Redux ka 'data' map hoga */}
          {data.map((log) => (
            <tr key={log.id} style={{ color: 'white', backgroundColor: 'blue' }}>
              <td>{log.activity}</td>
              <td>{log.carbon}kg</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Filtered Logs: Less than or equal to 4kg */}
      <h2 style={{ marginTop: "100px" }}>Filtered Logs less than equal to 4kg</h2>
      <table style={{ flex: 1, border: "2px solid black", margin: "auto", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid black", textAlign: "center" }}>Activity</th>
            <th style={{ border: "2px solid black", textAlign: "center" }}>Carbon Footprints</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((log) => log.carbon <= 4).map((log) => (
            <tr key={log.id} style={{ color: 'white', backgroundColor: 'green' }}>
              <td>{log.activity}</td>
              <td>{log.carbon}kg</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Filtered Logs: Greater than 4kg */}
      <h2 style={{ marginTop: "100px" }}>Filtered Logs greater than 4kg</h2>
      <table style={{ flex: 1, border: "2px solid black", margin: "auto", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid black", textAlign: "center" }}>Activity</th>
            <th style={{ border: "2px solid black", textAlign: "center" }}>Carbon Footprints</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((log) => log.carbon > 4).map((log) => (
            <tr key={log.id} style={{ color: 'white', backgroundColor: 'red' }}>
              <td>{log.activity}</td>
              <td>{log.carbon}kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;