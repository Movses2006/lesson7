import { useRoutes } from "react-router-dom"
import { routes } from "./routes";
import Home from "../Components/Home";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";

const Route = () => {
    return <>
    {useRoutes(routes)}
    </>
}

export default Route;