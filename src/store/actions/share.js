import * as actionTypes from './actionTypes';

export const createShared = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(createSharedStart());
    const firestore = getFirestore();
    firestore
      .collection('links')
      .add({ choices: [] })
      .then(data => dispatch(createSharedSuccess(data.id)))
      .catch(err => dispatch(createSharedFail(err)));
  };
};

export const createSharedStart = () => {
  return {
    type: actionTypes.CREATE_SHARED_START
  };
};

export const createSharedSuccess = sharedId => {
  return {
    type: actionTypes.CREATE_SHARED_SUCCESS,
    sharedId: sharedId
  };
};

export const createSharedFail = error => {
  return {
    type: actionTypes.CREATE_SHARED_FAIL,
    error: error
  };
};

export const fetchShared = sharedId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(fetchSharedStart());
    const firestore = getFirestore();
    firestore
      .collection('links')
      .doc(sharedId)
      .onSnapshot(docRef => {
        console.log(docRef.id, ' => ', docRef.data().choices);
        dispatch(fetchSharedSuccess(docRef.data().choices));
      });
  };
};

export const fetchSharedStart = () => {
  return {
    type: actionTypes.FETCH_SHARED_START
  };
};

export const fetchSharedSuccess = choices => {
  return {
    type: actionTypes.FETCH_SHARED_SUCCESS,
    choices: choices
  };
};

export const fetchSharedFail = error => {
  return {
    type: actionTypes.FETCH_SHARED_START,
    error: error
  };
};

export const addChoice = (sharedId, choiceText) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore
      .collection('links')
      .doc(sharedId)
      .update({ choices: firebase.firestore.FieldValue.arrayUnion(choiceText) })
      .then(data => dispatch(addChoiceSuccess(data)))
      .catch(err => console.log(err));
  };
};

export const addChoiceStart = () => {
  return {
    type: actionTypes.ADD_CHOICE_START
  };
};

export const addChoiceSuccess = data => {
  return {
    type: actionTypes.ADD_CHOICE_SUCCESS,
    data: data
  };
};

export const addChoiceFail = error => {
  return {
    type: actionTypes.ADD_CHOICE_FAIL,
    error: error
  };
};
