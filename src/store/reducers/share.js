const initialState = {
  shared: false,
  content: ''
};

const shareReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHARED':
      return {
        shared: true,
        content: action.content
      };
    default:
      return state;
  }
};

export default shareReducer;
