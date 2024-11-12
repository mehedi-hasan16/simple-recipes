import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';

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
           toast.error("Already added in the cart")
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
        <div className='flex gap-10 mt-10'>
            <div className='grid grid-cols-2 gap-10'>
            {
                data.map(element=><Card key={element.recipe_id} element={element}handleWantToCook={handleWantToCook}></Card>)
            }
        </div>
        
        <div>
            <Cart cart={cart} handlePreparing={handlePreparing} currentlyCooking={currentlyCooking}></Cart>
            <Toaster />
        </div>
        </div>
    );
};

export default CardAndCart;