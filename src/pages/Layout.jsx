import Header from "../Components/Header"
import { Link, Outlet } from 'react-router-dom'
import Footer from "../Components/Footer"



const Layout = () => {


    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout