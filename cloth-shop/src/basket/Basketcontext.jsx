import React, { createContext, useReducer, useContext } from 'react';

export const basketcontext = createContext();

const Basketprovider = ({ children }) => {
    const initialstate = {
        cart: [],
        count: 0,
        totalprice: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const Item = state.cart.find((item) => item.id === action.payload.id);
                if (Item) {
                    Item.quantity += 1;
                } else {
                    state.cart.push({ ...action.payload, quantity: 1 });
                }
                return {
                    ...state,
                    cart: [...state.cart],
                    count: state.count + 1,
                    totalprice: state.totalprice + action.payload.price,
                };
            case 'INCREASE_QUANTITY':
                const increasedItem = state.cart.find((item) => item.id === action.id);
                if (increasedItem) {
                    increasedItem.quantity += 1;
                    return {
                        ...state,
                        cart: [...state.cart],
                        count: state.count + 1,
                        totalprice: state.totalprice + increasedItem.price,
                    };
                }
                return state;

            case 'DECREASE_QUANTITY':
                const decreasedItem = state.cart.find((item) => item.id === action.id);
                if (decreasedItem && decreasedItem.quantity > 1) {
                    decreasedItem.quantity -= 1;
                    return {
                        ...state,
                        cart: [...state.cart],
                        count: state.count - 1,
                        totalprice: state.totalprice - decreasedItem.price,
                    };
                } else if (decreasedItem && decreasedItem.quantity === 1) {
                    return {
                        ...state,
                        cart: state.cart.filter((item) => item.id !== action.id),
                        count: state.count - 1,
                        totalprice: state.totalprice - decreasedItem.price,
                    };
                }
                return state;

            case 'REMOVE':
                const itemToRemove = state.cart.find((item) => item.id === action.id);
                if (itemToRemove) {
                    return {
                        ...state,
                        cart: state.cart.filter((item) => item.id !== action.id),
                        count: state.count - itemToRemove.quantity,
                        totalprice: state.totalprice - (itemToRemove.price * itemToRemove.quantity),
                    };
                }
                return state;

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <basketcontext.Provider value={{ state, dispatch }}>
            {children}
        </basketcontext.Provider>
    );
};

const useBasket = () => {
    const context = useContext(basketcontext);
    return context;
};

export { useBasket };
export default Basketprovider;
