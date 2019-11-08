import * as actionTypes from '../actionTypes/actionTypes';

const reducer_1 = (state = {}, action) => {
  switch(action.type){
    case actionTypes.GET_API : 
       return action.payload;
    default: 
      return state;
  }
}

export default reducer_1;