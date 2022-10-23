import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../pages/Home/Home';
import Categpry from '../../pages/category/Category';
import News from '../../pages/News/News';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Categpry></Categpry>
            },
            {
                path:'/news/:id',
                element:<News></News>
            }
        ]
    }
])