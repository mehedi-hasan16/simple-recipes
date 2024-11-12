import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const CardAndCart = () => {
    const [data, setData] = useState([]);
    const [cart, setCart]= useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleWantToCook = recipes =>{
            const recipesExist= cart.some(e=>e.recipe_id ===recipes.recipe_id);
           if(recipesExist){
           alert('exists');
           }else{
            setCart([...cart,recipes])
           }
            
  }

  const handlePreparing = recipes=>{
    const remainingRecipes = cart.filter(idx=> idx.recipe_id !== recipes.recipe_id);
    setCart(remainingRecipes);
    const addToCurrentlyCooking= [...currentlyCooking, recipes];
    setCurrentlyCooking(addToCurrentlyCooking);
    console.log(recipes);
  }
    return (
        <div>
            {
                data.map(element=><Card key={element.recipe_id} element={element}handleWantToCook={handleWantToCook}></Card>)
            }

            <Cart cart={cart} handlePreparing={handlePreparing} currentlyCooking={currentlyCooking}></Cart>
        </div>
    );
};

export default CardAndCart;