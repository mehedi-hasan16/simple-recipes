import React from "react";

const Cart = ({ cart, handlePreparing, currentlyCooking }) => {
  return (
    <div className="border-2 p-5 rounded-xl">
      <div>
        <p className="font-bold text-xl text-center">Want to cook: {cart.length} </p>
        <div className="divider mt-1"></div>
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
                  <td>{e.preparing_time} Min</td>
                  <td>{e.calories} Calories</td>
                  <button
                    onClick={() => handlePreparing(e)}
                    className="btn btn-sm bg-green-400 rounded-full"
                  >
                    Preparing
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="text-xl font-bold text-center mt-5">Currently Cooking: {currentlyCooking.length}</p>
        <div className="divider mt-1"></div>
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
                  <td>{e.preparing_time} Min</td>
                  <td>{e.calories} Calories</td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th>{currentlyCooking.reduce((acc,cur)=> acc+ parseInt(cur?.preparing_time),0)} min</th>
                <th>{currentlyCooking.reduce((acc,cur)=> acc+ parseInt(cur?.calories),0)} calories</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
