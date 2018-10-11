import * as actionTypes from './actionTypes';

export const sharedAPI = content => {
  return {
    type: actionTypes.SHARED,
    content: content
  };
};

export const shared = shareId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('links')
      .doc(shareId)
      .onSnapshot(docRef => {
        console.log(docRef.id, ' => ', docRef.data().choices);
        dispatch(sharedAPI(docRef.data().choices));
      });
  };
};

export const addAPI = () => {
  return {
    type: actionTypes.ADDED
  };
};

export const addContent = inputText => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore
      .collection('links')
      .doc('S8sqsx3CcC0WVfw69TGq')
      .update({ choices: firebase.firestore.FieldValue.arrayUnion(inputText) })
      .then(data => dispatch(addAPI()))
      .catch(err => console.log(err));
  };
};

export const createShared = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('links')
      .add({ choices: [] })
      .then(data => dispatch(createSuccess(data.id)))
      .catch(err => console.log(err));
  };
};

export const createSuccess = sharedId => {
  return {
    type: actionTypes.CREATE_SHARED,
    sharedId: sharedId
  };
};
