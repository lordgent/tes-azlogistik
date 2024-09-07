import React from 'react'
import styled from './layout.module.css'
import Sidebar from '../sidebar/sidebar'

const Layout = ({children}) => {
  return (
    <div className={styled.container}>
        <div className={styled.side}>
            <Sidebar/>
        </div>
        <div className={styled.content}>
            {children}
        </div>
    </div>
  )
}

export default Layout