import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Meals from './Components/Meals/Meals.jsx';
import MealCatagoryDetails from './Components/MealCatagoryDetails/MealCatagoryDetails.jsx';
import SingleMealDetail from './Components/SingleMealDetail/SingleMealDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/'  ,
    element: <Home></Home> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
      path: '/about',
      element: <About></About> ,
     },
     {
      path: '/contact' ,
      element: <Contact></Contact>
     },
     {
      path: '/meals' ,
      loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php') ,
      element: <Meals></Meals>,
     },
     {
      path: '/meal/:strCategory' ,
      loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`) ,
      element: <MealCatagoryDetails></MealCatagoryDetails>
     },
     {
      path: '/singleMeal/:idMeal' ,
      loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`) ,
      element: <SingleMealDetail></SingleMealDetail>
     }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
