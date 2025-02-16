import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCard from "../components/CoffeeCard";
import CoffeeDetails from "../pages/CoffeeDetails";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=> fetch('../categories.json'),
            children:[
                {
                    path:'/',
                    element:<CoffeeCard/>,
                    loader:()=> fetch('../coffees.json'),
                },
                {
                    path:'/category/:category',
                    element:<CoffeeCard/>,
                    loader:()=> fetch('../coffees.json'),
                }
            ]
        },
        {
            path:'/coffees',
            element:<Coffees/>,
            loader:()=> fetch('../coffees.json'),
        },
        {
            path:'/coffee/:id',
            element:<CoffeeDetails/>,
            loader:()=> fetch('../coffees.json'),
        },
        {
            path:'/dashboard',
            element:<Dashboard/>
        }
      ]
    },
  ]);
  export default routes;