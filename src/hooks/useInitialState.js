import { useState } from "react";

const initialState = {
    cart: [],
    orderIsOpen: false,
    menuIsOpen: false,
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payLoad) => {
        setState({
            ...state,
            cart: state.cart.includes(payLoad)
            ? state.cart
            : [...state.cart, payload],
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id ),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }

}

export default useInitialState;
