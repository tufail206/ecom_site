
import { Outlet } from 'react-router-dom'
import UserHeader from './Header'
import Footer from './Footer'

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <div className="px-4 py-6 sm:px-10 sm:py-10 font-serif">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout