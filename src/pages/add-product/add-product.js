import React from 'react'
import styled from './add-product.module.css'
import { useDispatch } from 'react-redux';
import {randomId} from '../../helpers'
import addProduct from '../../store/actions/addProduct'
import {useNavigate} from 'react-router-dom'

const AddProductPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch(); 

  const [form,setForm ] = React.useState({
    id: randomId(5),
    name: "",
    price: "",
    stock: 0
  })


  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const disabled = () =>{
    return !!(form.name === "" || form.price === "" || form.stock === 0 || form.stock === "");
  }

  const handleSubmit = () => {
    dispatch(addProduct(form))
    navigate("/")
  }
  

  return (
      <div className={styled.container}>

        <p>Add New Product</p>

        <div className={styled.form}>
        <div  className={styled.divInput}>
        <label>Name</label>
        <input type='text' placeholder='' onChange={handleChange} name='name' />
        </div>
        <div  className={styled.divInput}>
        <label>Price</label>
        <input type='text' placeholder='' onChange={handleChange} name='price' />
        </div>
        <div  className={styled.divInput}>
        <label>Stock</label>
        <input type='number' placeholder='' onChange={handleChange} name='stock' />
        </div>
        <button disabled={disabled()} onClick={handleSubmit} className={disabled() === true ? styled.btnDisabled : styled.btn}>Create</button>
        </div>
      </div>
  )
}

export default AddProductPage