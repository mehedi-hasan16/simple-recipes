import React from "react";

const Cart = ({ cart,handlePreparing, currentlyCooking }) => {
  console.log(cart);
  return (
    <div>
        <div>
      Want to cook: {cart.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((e, idx) => (
              <tr key={e.recipe_id}>
                <th>{idx + 1}</th>
                <td>{e.recipe_name}</td>
                <td>{e.preparing_time}</td>
                <td>{e.calories}</td>
                <button onClick={()=>handlePreparing(e)} className="btn btn-success rounded-full">
                  Preparing
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
            <h1>Currently Cooking:</h1>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentlyCooking.map((e, idx) => (
              <tr key={e.recipe_id}>
                <th>{idx + 1}</th>
                <td>{e.recipe_name}</td>
                <td>{e.preparing_time}</td>
                <td>{e.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Cart;
