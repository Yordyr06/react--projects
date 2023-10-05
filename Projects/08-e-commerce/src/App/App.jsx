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
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/man-clothing', element: <Home /> },
    { path: '/woman-clothing', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelry', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
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
      </BrowserRouter>
    </GlobalProvider>
  )
}

export { App }