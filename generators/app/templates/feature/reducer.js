import * as t from './action-types';


export const initialState = {
  // todo: add initial state
};

/**
 * @param  {Object} state  - current redux state
 * @param  {Object} action - current redux action
 * @return {Object}        - next redux state after action has been applied
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case t.ACTION:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
