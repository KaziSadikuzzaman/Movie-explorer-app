
import { Outlet } from 'react-router'



const MainLayout = () => {
  return (
    <div>
        <div>
        <Outlet></Outlet>
    </div>

    </div>
    
  )
}

export default MainLayout