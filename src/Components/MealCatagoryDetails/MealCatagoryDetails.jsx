import { useLoaderData } from 'react-router-dom';
import './MealsCatagoryDetails.css'
import SingleMeal from '../singleMeal/SingleMeal';

const MealCatagoryDetails = () => {

    let meal = useLoaderData() ;

    console.log(meal.meals)

    return (
        <div className='meals'>
            {
               meal.meals.map( (meal,idx) => <SingleMeal key={idx} meal={meal}></SingleMeal> ) 
            }
        </div>
    );
};

export default MealCatagoryDetails;