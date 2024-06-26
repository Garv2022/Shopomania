export const initialState ={
    cart : [],
};

//selector
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if(index >= 0){
                newCart.splice(index, 1);
                
            } else{
                console.warn(
                    `Can't remove product (id: ₹{action.id}) as its npt in 
                    basket!`
                )
            }

            return {
                ...state,
                cart: newCart
            }
            /* remove all items of same type from checkout: 
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payLoad
            )}; */
            case "SET_USER":
                return{
                    ...state,
                    user: action.user
                }
        default:
            return state;
    }
};

export default reducer;