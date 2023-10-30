import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import About from '../pages/About';
import Housing from '../pages/Housing';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/logement/:id",
                element: <Housing />,
            }
        ]
    }
])

const Root = ()=> {
    return (
        <RouterProvider router={router} />
    );
}
export default Root;