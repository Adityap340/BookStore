import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../assets/profile.jpg"
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const SideBar = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <Sidebar aria-label="Sidebar with content separator">
      <Sidebar.Items className='px-3 py-4 left-0 '>
        <Sidebar.ItemGroup>
          <Sidebar.Logo href="/" img={userImg} imgAlt="">
            {/* <p>
              {
                user.displayName || "Demo user"
                
              }
            </p> */}
          </Sidebar.Logo>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloud}>
            <p>
              Upload Book
            </p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>
              Manage Books
            </p>

          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            <p>
              Sign In
            </p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>
              Logout
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar
