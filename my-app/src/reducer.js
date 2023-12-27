export const initialState = {
    basket: [],
    returns_Order: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":

            let _basket = [...state.basket];
            for(let i = 0; i<_basket.length; i++){
                if(_basket[i].item.id === action.item.item.id){
                    _basket[i] = {item : _basket[i].item, qnty : _basket[i].qnty + action.item.qnty}
                    return {...state, basket : _basket}
                }
            }

            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "REMOVE_FROM_BASKET":
            var new__basket = [...state.basket];
            var x = [];
            for(let i = 0; i < new__basket.length; i++){
                if(new__basket[i].item.id === action.id){
                    x = new__basket.splice(i, 1);
                }
            }
            return {...state, basket : x}
        case  "ORDER_PLACED":
            if(action.id){
                var new__basket1 = [...state.basket];
                var tmp = 0;
                for (let i = 0; i < new__basket1.length; i++){
                    if (new__basket1[i].id === action.id){
                        tmp = {...new__basket1[i]};
                        new__basket1.splice(i, 1);
                        break;
                    }
                }
                return { ...state, basket: new__basket1, returns_Order : [...state.returns_Order, tmp]}
            }
            return { ...state, returns_Order: [...state.returns_Order, action.item]}
        case "CANCEL_ORDER":
            var new_returnOrder = [...state.returns_Order];
            var idx = new_returnOrder.findIndex((item)=>{
                return item.id === action.id;
            })
            new_returnOrder.splice(idx, 1);
            return ({...state, returns_Order : new_returnOrder})    
        case "CHECKOUT__PRODUCT"  :
            // tmp = [...]
            return{...state, basket : [], returns_Order : [...state.returns_Order, ...state.basket]}
        case "Update_Qty" :
            let _newBasket = [...state.basket];
            for(let i = 0; i<_newBasket.length; i++){
                if(_newBasket[i].item.id === action.item.id){
                    _newBasket[i] = { item: _newBasket[i].item, qnty: parseInt(action.item.qty)}
                    return{...state, basket : _newBasket}
                }
            }
            return {...state}      
        default: 
            return { ...state };
    }
}

export default reducer