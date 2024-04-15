import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
function Root() {
  return (
    <>
    <div>
        <Header></Header>
    </div>
    <div className='content'>
        <Outlet />
    </div>
    <div><Footer></Footer></div>
    </>
  )
}

export default Root