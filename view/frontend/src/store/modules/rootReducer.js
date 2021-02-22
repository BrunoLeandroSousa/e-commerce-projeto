import { combineReducers} from 'redux';

import cart from './cart/reducer';
import finish from './Finish/reducer';

export default combineReducers({
    cart,
    finish
});