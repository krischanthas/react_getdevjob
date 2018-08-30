import types from '../actions/types';

const DEFAULT_STATE = {
    placeholder: true
};

export default (state = DEFAULT_STATE, action){
    switch( action.type){
        case types.GET_JOB_ID:
        console.log('Get List Data:', action);
            return state;
        default: 
        return state;
    }
}

export default singlePageReducer;