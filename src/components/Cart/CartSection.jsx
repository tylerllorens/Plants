// import "./Cart.css";

// export default function CartSection({ cart, setCart }) {
//   console.log(cart);
//   if (!cart.length) {
//     return (
//       <section className="cart-details">
//         <h2>Cart</h2>
//         <p>Cart is empty</p>
//       </section>
//     );
//   }

//   return (
//     <section className="cart-details">
//       {/* add +/- button with the added {plant} */}
//     </section>
//   );
// }
//This is the code that I wrote but didn't fully understand the removeFromCart and addToCart
//section so I used the given code for help

import CartItem from "./CartItem";

import "./cart.css";

export default function Cart({ cart, removeFromCart, addToCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
