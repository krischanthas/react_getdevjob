import types from '../actions/types';

const DEFAULT_STATE = {
    placeholder: true
};

function singlePageReducer(state = DEFAULT_STATE, action){
    switch( action.type){
        default: 
        return state;
    }
}

export default singlePageReducer;