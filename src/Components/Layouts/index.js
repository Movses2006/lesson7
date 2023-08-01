import Header from "./Header";
import "./style.css"

const Layout = ({ children}) => {
   return (
    <>
        <Header/>
        <div className="Layout">
            {children}
        </div>
    
    </>)
}

export default Layout;