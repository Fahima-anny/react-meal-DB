import { useNavigate } from 'react-router-dom';
import './SingleMeal.css'

const SingleMeal = ({meal}) => {

let {strMealThumb, strMeal,idMeal} = meal ;

let navigate = useNavigate() ;

const handleDetails = () => {
    navigate(`/singleMeal/${idMeal}`) ;
}

    return (
        <div className='meal'>
            <img src={`${strMealThumb}`} alt="" />
            <h2>{strMeal}</h2>
            <button onClick={handleDetails}>Details</button>

            {/* <div className="meal">
            <img src={`${strCategoryThumb}`} alt="" />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.split(' ').slice(0,20).join(' ')}...</p>
            <button onClick={handleClick}>View More</button>
</div> */}

        </div>
        
    );
};

export default SingleMeal;