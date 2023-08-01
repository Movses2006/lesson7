import Home from '../Components/Home';
import About from '../Components/About';
import Newsletter from '../Components/Newsletter';

export const routes =  [ 
    {
      path: "/",
      element: <Home />,
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
