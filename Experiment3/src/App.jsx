import { BrowserRouter,Routes,Route} from "react-router"
import Login from "./pages/Login"
import ProtectedRoute from "./routes/ProtectedRoute"
import DashboardLayout from "./pages/DashboardLayout"
import DashboardSummary from "./pages/DashbaordSummary"
import DashboardAnalytics from "./pages/DashboardAnalytics"
import Logs from "./pages/Logs"
import Header from "./components/Header"

function App(){
  return(
    <>
     <Header title = {"Carbon Footprint Navigator"}/>
     <Routes>
      <Route path ="/login" element={<Login/>} />
      <Route
      path = "/" element = {
        <ProtectedRoute>
          <DashboardLayout/>
        </ProtectedRoute>
      }>
        <Route index element={<DashboardSummary/>}/>
        <Route path="summary" element={<DashboardSummary/>}/>
        <Route path="analytics" element={<DashboardAnalytics/>}/>
        <Route path="logs" element={<Logs/>}/>
      </Route>
      <Route path = "logout" element = {<Login/>}/>
     </Routes>
    </>
  )
}

export default App;