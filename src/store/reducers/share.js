const initialState = {
  shared: false,
  sharedId: '',
  content: [],
  isLoading: false
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

    case 'CREATE_SHARED_START':
      return {
        ...state,
        isLoading: true
      };

    case 'CREATE_SHARED_SUCCESS':
      return {
        ...state,
        sharedId: action.sharedId,
        isLoading: false
      };

    case 'CREATE_SHARED_FAIL':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default shareReducer;
