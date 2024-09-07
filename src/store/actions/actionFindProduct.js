const actionFindProduct = (id) => {
    
    const prod = localStorage.getItem("products");
    const dataExist = prod !== null ? JSON.parse(prod) : [];
  
    const deleteData = dataExist.find(item => item.id === id)

    return {
      type: "SUCCESS_FIND_PRODUCT",
      payload: deleteData,
    };
  };
  
  export default actionFindProduct;
  