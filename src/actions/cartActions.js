import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'
const products = require("../assets/products.json");
// getState permits us to get the state from the store
export const addToCart = (id, qty) => async (dispatch, getState) => {
    //const { data } = await axios.get(`/api/products/${id}`)

    const { data } = products._id.$oid

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })


    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
} 


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
