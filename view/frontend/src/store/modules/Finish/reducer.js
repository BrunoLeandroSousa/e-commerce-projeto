export default function finish(state = [], action) {
    switch(action.type) {
      case 'ADD_TO_FINISH':
        return [...state, action.product];
      default:
        return state;
    }
  };