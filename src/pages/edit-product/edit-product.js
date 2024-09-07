import React from 'react'
import styled from './edit-product.module.css'
import { useDispatch,useSelector } from 'react-redux';
import addFindProduct from '../../store/actions/actionFindProduct'
import {useNavigate,useParams} from 'react-router-dom'
import actionEditProduct from '../../store/actions/actionEditProduct';

const EditProductPage = () => {
  
  const { data } = useSelector(state => state.product.findProductReducer);  

  const navigate = useNavigate()
  const dispatch = useDispatch();
  let { id } = useParams();

  React.useEffect(() =>{
    dispatch(addFindProduct(id))
  },[])

  React.useEffect(() => {
    if(data !== null){
      setForm({
        id: data.id,
        name: data.name,
        price: data.stock,
        stock: data.stock
      })
    }
  },[])

  const [form,setForm ] = React.useState({
    name:"",
    price: "",
    stock: 0
  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    let Obj = {
      id: data.id,
      name: form.name,
      price: form.price,
      stock: form.stock
    }
    dispatch(actionEditProduct(Obj))
    navigate("/")
  }
    
console.log(form);

  return (
      <div className={styled.container}>

        <p>Edit Product</p>

        <div className={styled.form}>
        <div  className={styled.divInput}>
        <label>Name</label>
        <input type='text' placeholder='' onChange={handleChange} name='name' defaultValue={data?.name}  />
        </div>
        <div  className={styled.divInput}>
        <label>Price</label>
        <input type='text' placeholder='' onChange={handleChange} name='price' defaultValue={data?.price} />
        </div>
        <div  className={styled.divInput}>
        <label>Stock</label>
        <input type='number' placeholder='' onChange={handleChange} name='stock' defaultValue={data?.stock} />
        </div>
        <button  onClick={handleSubmit} className={styled.btn}>Save</button>
        </div>
      </div>
  )
}

export default EditProductPage