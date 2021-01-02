
export const initialState = {
    basket: [],
    user: null
};

// Selector. This is a professional practice of having selectors inside of our reducers
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0)/*get the basket and do optional chaining to prevent everything from breaking
                    the purpose of reduce is to maps through the basket. So it iterates trough the basket and then its gonna totally up the total
                    we gonna have an initial amount and we gonna iterate through each item.
                    And everytime it loops through it I want the item price to add to the total amount, and the initial amount is going to be 0. */
const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'ADD_TO_BASKET':// everytime I will press the basket button, it will dispatch an action.type
        //the reducer is like a thing who always listenning for dispatch
            return {//we return 
                ...state,//whatever the state originally was, we gonna change the basket
                basket: [...state.basket, action.item],//the basket should now be, whatever the basket currently was + whatever the action.item we decided to add to the basket
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id//it is going through all of the basket items. and it says, does any of the basket items match the action id that I passed in. So it only find the first one and returns it to you.
            )
            let newBasket = [...state.basket];//we gonna copy the basket into a temporary variable. And we say, copy whatever the state.basket currently had so now we have a copy of it inside of our newBasket.
            //if the index is greather/equal than 0 it meant it actually found an item inside the basket
            if (index >= 0) {
                newBasket.splice(index, 1)//pass the index and splice it/cut it by one
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in the basket!`)
            }
            return {
                ...state,
                basket: newBasket
            }

/**that return below is not good enough because it removes all the item who has the same id and we dont want that if I have 5 same book in my basket and I want to actually remove just one of them so we use the code au dessus instead*/
            // return {
            //     ...state,//whatever the store looked like previously
            //     basket: state.basket.filter(item => item.id !== action.id)//change the basket. Filter out anything where the item is matching the action id
            // }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
}

export default reducer;