import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className ="min-h-screen text-2xl flex flex-col gap-4  bg-black border-4 p-6 shadow-md">
      <div clssName = "flex flex-col items-center justify-center gap-4 bg-gray-900 border border-green-200 rounded-lg p-8 shadow-md">
      <h1 className= "text-3xl text-white flex flex-col align-items-center align-items-center justify-center">Dashboard</h1>
      <p className= "text-3xl text-white flex flex-col align-items-center align-items-center justify-content-center">Welcome to EcoTrack.</p>
      <Link className = "text-blue-400 hover:text-blue-300" to="/dashboard/water">Go to Water Tracker</Link>
      </div>
      
    </div>
  )
}

export default Dashboard
