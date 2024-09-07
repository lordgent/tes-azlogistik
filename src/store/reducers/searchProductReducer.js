const intitalState = {
    loading: false,
    data: [],
    message: "",
  };
  
  const searchProductReducer = (state = intitalState, action) => {
    
    switch (action.type) {
      case "LOADING_SEARCH_PRODUCT":
        return { ...state, loading: true, data: [] };
      case "SUCCESS_SEARCH_PRODUCT":
        return { ...state, loading: false, data: action.payload };
      case "ERROR_SEARCH_PRODUCT":
        return { ...state, loading: false, data: [] };
      default:
        return state;
    }
  };
  
  export default searchProductReducer;
  