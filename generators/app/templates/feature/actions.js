import * as t from './action-types';

// todo: remove these links
// Flux Standard Actions: https://github.com/acdlite/flux-standard-action
// Redux Standard API-calling Action:
//   https://github.com/agraboso/redux-api-middleware#redux-standard-api-calling-actions

export const action = () => ({
  type: t.ACTION,
  payload: { /* todo: add or remove payload */ },
});


// redux-api-middleware action creators
// import { CALL_API } from 'redux-api-middleware';


// export const apiAction = () => ({
//   [CALL_API]: {
//     endpoint: '/api-end-point',
//     method: 'GET', // POST, PUT, DELETE, PATCH
//     types: [t.ACTION_REQUEST, t.ACTION_SUCCESS, t.ACTION_FAILURE],
//   }
// });


// thunk middleware action creators
// import fetch from 'isomorphic-fetch';

// export const actionRequest = () => ({
//   type: t.ACTION_REQUEST,
//   payload: { /* todo: add or remove payload */ },
// });

// export const actionSuccess = (data) => ({
//   type: t.ACTION_SUCCESS,
//   payload: data,
// });

// export const actionFailure = (err) => ({
//   type: t.ACTION_FAILURE,
//   payload: err,
//   error: true,
// });

// export const apiAction = () => {
//   return dispatch => {
//     dispatch(actionRequest());

//     return fetch('api-endpoint-url')
//       .then(data => data.json())
//       .then(data => dispatch(actionSuccess(data)))
//       .catch(err => dispatch(actionFailure(err)));
//   }
// };
