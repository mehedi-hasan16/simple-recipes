import React from 'react';

const Card = ({element,handleWantToCook}) => {
    const {recipe_image, recipe_name, recipe_id, calories, ingredients, short_description, preparing_time} = element;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={recipe_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {recipe_name}
    </h2>
    <p>{short_description}</p>
        <div>
            <p className='font-bold'>Ingredients: {ingredients.length}</p>
            {
              ingredients.map(element=><li>{element}</li>)
            }
        </div>
        <div className='flex'>
            <p>{preparing_time} Min</p>
            <p>{calories} Calories</p>
        </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleWantToCook(element)} className='btn btn-success rounded-full'>want to cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;