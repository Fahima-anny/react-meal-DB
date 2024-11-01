import { useNavigate } from 'react-router-dom';
import './Meal.css'
import MealCatagoryDetails from '../MealCatagoryDetails/MealCatagoryDetails';

const Meal = ({meal}) => {

    let {strCategory, strCategoryThumb, strCategoryDescription} = meal ;

let navigate = useNavigate() ;

const handleClick = () => {
   navigate(`/meal/${strCategory}`)
}

    return (
        <div className="meal">
            <img src={`${strCategoryThumb}`} alt="" />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.split(' ').slice(0,20).join(' ')}...</p>
            <button onClick={handleClick}>View More</button>
        </div>
    );
};

export default Meal;