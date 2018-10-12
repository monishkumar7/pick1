const initialState = {
  shared: false,
  sharedId: '',
  choices: [],
  isLoading: false,
  error: null
};

const shareReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SHARED_START':
      return {
        ...state,
        isLoading: true
      };

    case 'FETCH_SHARED_SUCCESS':
      return {
        ...state,
        choices: action.choices,
        shared: true,
        isLoading: false
      };

    case 'FETCH_SHARED_FAIL':
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

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
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};

export default shareReducer;
