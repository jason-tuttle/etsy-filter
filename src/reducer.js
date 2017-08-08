
import {FILTER_PRODUCTS} from "./actions";
import products from './data/products';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
  products: products,
  currentFilter: ''
}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function delration with the necessary parameters
// Give the `state` parameter a default value of `initialState`
const reducer = function(state = initialState, action) {
    // When a `FILTER_PRODUCTS` is provided, return a new state
    switch(action.type) {
      case FILTER_PRODUCTS:
        return {
          ...state,
          currentFilter: action.payload
        }
      default:
        return state;
    }
}

export default reducer;
