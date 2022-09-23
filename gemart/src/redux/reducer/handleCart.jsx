const cart = [];
const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Product is Already Exist
            const exist = state.find((x) => x._id === product._id);
            // const propertyValues = Object.values(state);

            // console.log(propertyValues);
            console.log(typeof(state))
            if (exist) {
                // Increase The Quantity
                return state.map((x) =>
                    x.id === product._id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state, {
                        ...product,
                        qty: 1
                    }
                ]
            }
            // break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product._id);
            
            if (exist1.qty? exist1.qty === 1: null) {
                return state.filter((x) => x.id !== exist1.id);
            } else 
            {
                return state.map((x) =>
                    x.id === product._id ? { ...x, qty: x.qty - 1 } : x);
            }
            // break;
        default:
            return state;
            // break;
    }
}
export default handleCart;