const getProduct = () => {
    const prod = localStorage.getItem("products");
    const dataExist = prod !== null ? JSON.parse(prod) : [];
    console.log(dataExist)
        return {    
        type: "SUCCESS_GET_PRODUCT",
        payload: dataExist,
      };

}

export default getProduct;