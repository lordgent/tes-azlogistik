const actionEditProduct = (data) => {
    const prod = localStorage.getItem("products");
    const dataExist = prod !== null ? JSON.parse(prod) : [];
    const find = dataExist.filter(item => item.id !== data.id)
    const arr = [];
    for (let i = 0; i < find.length; i++) {
      const element = find[i];
      let obj = {
        id: element.id,
        name: element.name,
        price: element.price,
        stock: element.stock,
      };
      arr.push(obj);
    }
    arr.push(data);
    localStorage.setItem("products", JSON.stringify(arr));
  
    return {
      type: "SUCCESS_EDIT_PRODUCT",
      payload: arr,
    };
  };
  
  export default actionEditProduct;
  