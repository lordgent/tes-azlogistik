const intitalState = {
  loading: false,
  data: [],
  message: "",
};

const addProductReducer = (state = intitalState, action) => {
  switch (action.type) {
    case "LOADING_ADD_PRODUCT":
      return { ...state, loading: true, data: [] };
    case "SUCCESS_ADD_PRODUCT":
      return { ...state, loading: false, data: action.payload };
    case "ERROR_ADD_PRODUCT":
      return { ...state, loading: false, data: [] };
    default:
      return state;
  }
};

export default addProductReducer;
