function search(nameKey, myArray){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

const actionSearchProduct = (name) => {
    
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

  const findData = (data, searchParam) => {
    return data.filter(element => element.name.includes(searchParam));
}

const results = findData(arr, name);

    return {
      type: "SUCCESS_SEARCH_PRODUCT",
      payload: results,
    };
  };
  
  export default actionSearchProduct;
  