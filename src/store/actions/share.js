import * as actionTypes from './actionTypes';

export const shared = content => {
  return {
    type: actionTypes.SHARED,
    content: content
  };
};
