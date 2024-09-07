const intitalState = {
    loading: false,
    data: [],
    message: "",
  };
  
  const getProductReducer = (state = intitalState, action) => {
    
    switch (action.type) {
      case "LOADING_GET_PRODUCT":
        return { ...state, loading: true, data: [] };
      case "SUCCESS_GET_PRODUCT":
        return { ...state, loading: false, data: action.payload };
      case "ERROR_GET_PRODUCT":
        return { ...state, loading: false, data: [] };
      default:
        return state;
    }
  };
  
  export default getProductReducer;
  