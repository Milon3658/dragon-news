import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../pages/Home/Home';
import News from '../../pages/News/News';
import Category from "../../pages/category/Category";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async () => {
                    return await fetch('http://localhost:5000/news')
                }
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:async({params})=>{
                    return await fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
            {
                path:'/news/:id',
                element:<News></News>
            }
        ]
    }
])