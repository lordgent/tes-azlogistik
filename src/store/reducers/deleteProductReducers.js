const intitalState = {
    loading: false,
    data: [],
    message: "",
  };
  
  const deleteProductReducer = (state = intitalState, action) => {
    switch (action.type) {
      case "LOADING_DELETE_PRODUCT":
        return { ...state, loading: true, data: [] };
      case "SUCCESS_DELETE_PRODUCT":
        return { ...state, loading: false, data: action.payload };
      case "ERROR_DELETE_PRODUCT":
        return { ...state, loading: false, data: [] };
      default:
        return state;
    }
  };
  
  export default deleteProductReducer;
  