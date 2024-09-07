const intitalState = {
    loading: false,
    data: null,
    message: "",
  };
  
  const findProductReducer = (state = intitalState, action) => {
    switch (action.type) {
      case "LOADING_FIND_PRODUCT":
        return { ...state, loading: true, data: null };
      case "SUCCESS_FIND_PRODUCT":
        return { ...state, loading: false, data: action.payload };
      case "ERROR_FIND_PRODUCT":
        return { ...state, loading: false, data: null };
      default:
        return state;
    }
  };
  
  export default findProductReducer;
  