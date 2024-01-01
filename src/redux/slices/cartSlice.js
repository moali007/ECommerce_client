import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.attributes;
      const curItem = product
        ? {
            title: product.title,
            key: product.key,
            price: product.price,
            image: product.image.data.attributes.url,
          }
        : action.payload;
      const index = state.cart.findIndex((item) => item.key === curItem.key); //agar jo item add karna hai vo cart me hai to uski idex find karra
      if (index === -1) {
        //mtlb curItem cart me nahi hai
        state.cart.push({ ...curItem, quantity: 1 }); //destructuring se curItem aur quantity ek object me hi aa jaega
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const curKey = action.payload?.attributes?.key || action.payload.key;
      const index = state.cart.findIndex((item) => item.key === curKey);
      if (index === -1) return;
      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== curKey); //jab quantity 1 hai to poore item ko hi cart se hata doge
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      //remove the current item completely from cart
      const curKey = action.payload?.attributes?.key || action.payload.key;
      // console.log(curItem);
      state.cart = state.cart.filter((item) => item.key !== curKey);
    },
    resetCart: (state, action) => {
      //dispatched in Payments.js
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeItem, resetCart } =
  cartSlice.actions;
