import { useLoaderData } from "react-router-dom";
import './SingleMealDetail.css'

const SingleMealDetail = () => {

let meal = useLoaderData() ;

console.log(meal.meals[0])

let {strMeal, strCategory, strArea, strMealThumb} = meal.meals[0]

    return (
        <div className="Mdetail">
            <img src={`${strMealThumb}`} alt="" />
<h2>{strMeal}</h2>
<p>Category: {strCategory}</p>
<p>Origin: {strArea}</p>


        </div>
    );
};

export default SingleMealDetail;