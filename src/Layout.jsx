
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'

const Layout = () => {
  return (
    <div className='bg-dark ' style={{width: '85vw'}} >
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
