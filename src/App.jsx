import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Pizzas from './components/Pizzas/Pizzas'
import Promotions from './components/Promotions/Promotions'
import Appetizers from './components/Appetizers/Appetizers'
import Desserts from './components/Desserts/Desserts'
import Crunchy from './components/Crunchy/Crunchy'
import Branches from './components/Branches/Branches'
import Quality from './components/Quality/Quality'
import Service from './components/Service/Service'
import Contacts from './components/Contacts/Contacts'
import Careers from './components/Careers/Careers'
function App() {

  const router = createBrowserRouter([{
path:'',
element:<Layout/>,
errorElement: <Error/>,
children:[
  {index:true , element:<Home/>},
  {path:'/pizzas' , element:<Pizzas/>},
  {path:'/promotions' , element:<Promotions/>},
  {path:'/appetizers' , element:<Appetizers/>},
  {path:'/desserts' , element:<Desserts/>},
  {path:'/crunchy' , element:<Crunchy/>},
  {path:'/branches' , element:<Branches/>},
  {path:'/quality' , element:<Quality/>},
  {path:'/service' , element:<Service/>},
  {path:'/contacts' , element:<Contacts/>},
  {path:'/careers' , element:<Careers/>},




]}])

  return (
    <main>
      <RouterProvider router={router}/>
        
    </main>
  )
}

export default App
