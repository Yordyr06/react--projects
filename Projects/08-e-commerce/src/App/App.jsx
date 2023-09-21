import { useRoutes, BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from '../Utils/Contexts/Global'
import { Home } from './Home'
import { MyAccount } from './MyAccount'
import { MyOrder } from './MyOrder'
import { MyOrders } from './MyOrders'
import { SingIn } from './SingIn'
import { NotFound } from './NotFound'
import { Layout } from "../Components/Layout"
import { NavBar } from '../Components/NavBar'
import { CheckOut } from '../Components/checkOut'
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <AppRoutes />
        </Layout>
        <CheckOut />
      </BrowserRouter>
    </GlobalProvider>
  )
}

export { App }