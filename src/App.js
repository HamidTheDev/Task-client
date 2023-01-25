
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddItem from './Component/AddItem';
import GetItem from './Component/GetItem';
import Main from './LayOut/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<AddItem></AddItem>
        },
        {
          path:'/getItem',
          element:<GetItem></GetItem>
        },
      ]
    },

  ])

  return (

   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
