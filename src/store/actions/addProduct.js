const actionCreateProduct = (data) => {
  const prod = localStorage.getItem("products");
  const dataExist = prod !== null ? JSON.parse(prod) : [];

  const arr = [];
  for (let i = 0; i < dataExist.length; i++) {
    const element = dataExist[i];
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
    type: "SUCCESS_ADD_PRODUCT",
    payload: arr,
  };
};

export default actionCreateProduct;
