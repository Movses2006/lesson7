import Home from '../Components/Home';
import About from '../Components/About';
import Newsletter from '../Components/Newsletter';
import Card from '../Components/Home/Card';

export const routes =  [ 
    {
      path: "/",
      element: <Home />,
      children: {
        path: '/:id',
        element: <Card />
      }
    },
    {
        path: "/about", 
        element: <About />
    },
    {
      path: "/newsletter",
      element: <Newsletter />,
    },
    {
      path: "*",
      element: <>Not found</>,
    }
  ]
