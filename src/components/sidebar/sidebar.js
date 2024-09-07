import React from 'react'
import styled from './sidebar.module.css'
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();

    const handleTo = () => {
        navigate("/")
    }

  return (
    <div className={styled.container}>
        <div className={styled.body}>
        <div className={styled.logo}>
            LogistikDotCom
        </div>

        <div className={styled.menu}>
            <div className={styled.item} onClick={handleTo}>Dashboard</div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar