import { combineReducers } from 'redux';
import single_page_reducer from './single_page_reducer';

const rootReducer = combineReducers({
    placeholder: single_page_reducer,
});

export default rootReducer;