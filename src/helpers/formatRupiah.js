const rupiah = (number)=>{
   
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(parseInt(number));
  }

  export default rupiah