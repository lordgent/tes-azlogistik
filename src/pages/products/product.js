import React from 'react'
import styled from './product.module.css'
import Search from '../../components/search/search'
import Card from '../../components/card/card'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../store/actions/getProduct'
import {formatRupiah} from '../../helpers'
import deleteProduct from '../../store/actions/deleteProduct'
import actionSearchProduct from '../../store/actions/actionSearchProduct'



const ProductPage = () => {
  const [selected,setSelected] = React.useState("")
  const [search,setSearch] = React.useState("")
  const [modal,setModal] = React.useState(false)
  const [isSearch,setIsSearch] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data } = useSelector(state => state.product.getProductReducer);  
  const searchData = useSelector(state => state.product.searchProductReducer.data);  
  
  React.useEffect(() => {
    dispatch(getProduct())
  },[])

  const handleTo = () =>{
      navigate("/add")
  }

 const onDelete = () => {
  if(selected!== ""){
    dispatch(deleteProduct(selected))
    dispatch(getProduct())
  }
 }

 const handleEdit = () => {
  navigate("/edit/"+ selected)
 }
  
 const handleSearch = (e) => {
  setSearch(e.target.value)
 }

 const submitSearch = () => {
  dispatch(actionSearchProduct(search))
  setIsSearch(true)
 }
  
  return (
    <div className={styled.container}>
      <div className={styled.wrapperAction}>
      <Search handleSearch={handleSearch} onSearch={submitSearch} />
      <button className={styled.btn} onClick={handleTo}>New Product</button>
      </div>
      <div className={styled.body}>
        {isSearch &&(
            searchData.map(item => 
              <Card 
              key={item.id} 
              name={item.name} 
              pricing={formatRupiah(item.price)}
              stock={item.stock} 
              id={item.id} 
              selected={selected}
              active={modal}
              handleDelete={onDelete}
              handleEdit={handleEdit}
              onAction={() => {
                setModal(!modal)
                setSelected(item.id)
              }}
              />

            )
        )}
          {!isSearch ?
            data.map(item => 
              <Card 
              key={item.id} 
              name={item.name} 
              pricing={formatRupiah(item.price)}
              stock={item.stock} 
              id={item.id} 
              selected={selected}
              active={modal}
              handleDelete={onDelete}
              handleEdit={handleEdit}
              onAction={() => {
                setModal(!modal)
                setSelected(item.id)
              }}
              />

            )
            :
           ''
          }
      </div>
    </div>
  )
}

export default ProductPage