import { useEffect, useState } from "react";
import Layout from "../Layouts";
import { Link, useParams } from "react-router-dom";
import { newAPI} from "../utiles/constants";
import "./details.css"

const Details = () => {
    const [cocktail, setCocktail] = useState()

    const {id} = useParams()
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`${newAPI}${id}`);
            const data = await response.json();
            setCocktail(data.drinks[0]);
        }  catch (error) {
            console.error("Error", error);
        }
    };
    
    return(
        <Layout>
        <div className="details">
            <Link to={"/"}>
                <button className="btn">Back Home</button>
            </Link>
        {cocktail && <div className="coctail" key={cocktail.idDrink}>
            <img src={cocktail.strDrinkThumb} alt="sdad"/>
            <h2>Name:{cocktail.strDrink}</h2>
            <h3>Category:{cocktail.strCategory}</h3>
            <h3>Glass : {cocktail.strGlass}</h3>
            <h3>Ingredients : {cocktail.strIngredient1 + " , " + cocktail.strIngredient2 + " , " +cocktail.strIngredient3 + " , " + cocktail.strIngredient4}</h3>
            <h3>Instructions : {cocktail.strInstructions}</h3>
        </div>}
        </div>
        </Layout>
    )
}
export default Details;

