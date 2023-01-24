import React from 'react'
import './header.css'
import { GlobalOutlined } from '@ant-design/icons'
const Header = () => {
    return (
        <div>
            <div className='header'><p><span className='header-icon'><GlobalOutlined/></span>my travel journal.</p></div>
        </div>
    )
}
export default Header