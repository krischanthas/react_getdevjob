import { combineReducers } from 'redux';
import theme_reducer from './theme_reducer';

const rootReducer = combineReducers({
    themes: theme_reducer
});

export default rootReducer;