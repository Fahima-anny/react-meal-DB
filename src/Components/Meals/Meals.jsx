import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Meals.css'

const Meals = () => {

let meals = useLoaderData() ;

// console.log(meals.categories)

    return (
        <div>
            <h1>Categories: {meals.categories.length}</h1>
            <div className="meals">
                {
                    meals.categories.map( meal => <Meal key={meal.id} meal={meal} ></Meal> )
                }
            </div>
        </div>
    );
};

export default Meals;