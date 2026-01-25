import {Link,Outlet} from 'react-router-dom';
import './DashBoardLayout.css';

const DashboardLayout = () => {
    return(
        <div className = "dashboard-container">
           <div className="dashboard-header">
           <h1>Dashboard</h1>
           
           <nav className="dashboard-nav">
                   <Link to="summary" className="nav-link"><h2>Summary</h2></Link>
                    <Link to='analytics' className="nav-link"><h2>Analytics</h2></Link>
                    <Link to='logs' className='nav-link'><h2>Logs</h2></Link>
                    <Link to='logout' className='nav-link'><h2>Logout</h2></Link>

           </nav>

           </div>
       

        <div className="dashboard-content">
            <Outlet />
        </div>

      </div>
    )
}
export default DashboardLayout;