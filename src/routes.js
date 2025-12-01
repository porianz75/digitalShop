import Layout from "./components/layout/Layout";
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Product from "./pages/product/Product";
import NotFound from "./pages/404";

export const routes = [
    {
        path: '/', element: <Layout/>, children: [
            {path: '', element: <Home/>},
            {path: 'product/:productId/*' , element:<Product/> },
            {path:'*' , element: <NotFound />}
        ]
    },

    {path: 'login', element: <Login/>},
    {path: 'register', element: <Register/>},
]

