const cart = [];
const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Product is Already Exist
            // const exist = state.find((x) => x.id === product._id);
            // console.log(Object.keys(state));
            let st = state.find((x)=> x._id === product._id)
            if (st) {
                // Increase The Quantity               
                return state.map((x) =>
                    x._id === product._id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // console.log(Object.keys(state).length);
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
            let exist = state.find((x) => x._id === product._id);
            if (exist) {
                return state.filter((x) => x._id !== exist._id);
            } else 
            {
                return state.map((x) =>
                    x._id === product._id ? { ...x, qty: x.qty - 1 } : x);
            }
            // break;
        default:
            return state;
            // break;
    }
}
export default handleCart;