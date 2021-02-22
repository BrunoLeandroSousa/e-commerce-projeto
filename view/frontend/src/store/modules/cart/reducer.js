import produce from 'immer';

export default function cart(state = [], action) {
  
  switch(action.type) {
    
    case '@cart/ADD_TO_CART':
      return produce(state, draft =>{
        const productIndex = draft.findIndex(p=> p._id===action.product._id);
        if(productIndex >= 0){
          draft[productIndex].Amount +=1;
        }
        else {
          action.product["subtotal"] = action.product["Amount"]*action.product["Price"];
          draft.push(action.product);
        }
      });

    case '@cart/REMOVE_FROM_CART':
      return produce(state, draft=> {
        const productIndex = draft.findIndex(p=> p._id===action.id);
        if(productIndex>=0){
          draft.splice(productIndex, 1);
        }
      });
    
    case '@cart/UPDATE_AMOUNT': {
      if(action.amount<=0){
        return state;
      }

      return produce(state, draft=>{
        const productIndex = draft.findIndex(p=> p._id === action.id);
        if (productIndex >=0){
          draft[productIndex].Amount = Number(action.amount);
        }
      });

    }
    
    default:
      return state;
  }
};