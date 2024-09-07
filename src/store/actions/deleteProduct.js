const actionDeleteProduct = (id) => {
    
    const prod = localStorage.getItem("products");
    const dataExist = prod !== null ? JSON.parse(prod) : [];
  
    const deleteData = dataExist.filter(item => item.id !== id)
    
    localStorage.setItem("products", JSON.stringify(deleteData))

    return {
      type: "SUCCESS_DELETE_PRODUCT",
      payload: deleteData,
    };
  };
  
  export default actionDeleteProduct;
  