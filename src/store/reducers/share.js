const initialState = {
  shared: false,
  sharedId: '',
  content: []
};

const shareReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHARED':
      return {
        shared: true,
        content: action.content
      };
    case 'ADDED':
      return state;

    case 'CREATE_SHARED':
      return {
        ...state,
        sharedId: action.sharedId
      };
    default:
      return state;
  }
};

export default shareReducer;
