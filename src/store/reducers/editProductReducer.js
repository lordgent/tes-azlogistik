const intitalState = {
    loading: false,
    data: [],
    message: "",
  };
  
  const editProductReducer = (state = intitalState, action) => {
    switch (action.type) {
      case "LOADING_EDIT_PRODUCT":
        return { ...state, loading: true, data: [] };
      case "SUCCESS_EDIT_PRODUCT":
        return { ...state, loading: false, data: action.payload };
      case "ERROR_EDIT_PRODUCT":
        return { ...state, loading: false, data: [] };
      default:
        return state;
    }
  };
  
  export default editProductReducer;
  