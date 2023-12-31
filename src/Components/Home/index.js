import { useState, useEffect } from "react";
import "./style.css"
import Layout from "../Layouts";
import { API } from "../utiles/constants";

const Home = () => {
    
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API}${searchTerm}`
        );
        const data = await response.json();
        setCocktails(data.drinks || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      fetchData();
    };
    const inputSearch = () => {
        console.log("Coctail")
    }
    return (
    <Layout>
      <div className="HomePage">
        <div className="inputPart">
        <input
          type="text"
          placeholder="Search by cocktail name"
          value={searchTerm}
          onChange={handleChange}
        /> 
        <button className="inputSearch" onClick={inputSearch}>Search</button>
        </div>
        <div className="cocktail-list">
          {cocktails.map(({ idDrink, strDrink, strCategory, strDrinkThumb }) => (
            <div className="cocktail" key={idDrink}>
              <img src={strDrinkThumb} alt={strDrink} />
              <div>
                <h4>{strDrink}</h4>
                <h5>{strCategory}</h5>
              </div>
              <button className="btn">Details</button>
            </div>
          ))}
        </div>
      </div>
      </Layout>
    );
};

export default Home;