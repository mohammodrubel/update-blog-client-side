import React, { useState } from 'react';
import './Navbarr.css'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import useAuth from './../../../../hooks/UseAuth';


const Navbarr = () => {
    const [active,setActive] = useState('navMenu')
    const [toggleIcon,setToggleIcon] = useState('hamburger')
    const {user,logout,admin} = useAuth()
    const hamburget = ()=>{
        active === 'navMenu' ? setActive('navMenu active') : setActive('navMenu')
        toggleIcon === 'hamburger' ? setToggleIcon('toggle'):setToggleIcon('hamburger')
    }
    console.log(admin)
    return (
        <div className='mainNavbar'>
             <div className='nav'>
            <Link to='/' style={{textDecoration:'none',color:'black',margin:'0 10px'}} >
                #_Aysha_Asha
            </Link>
            
            <ul className={active} >
                <li><Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to='/blog'>Blog</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to='/japaneseblog'>Japanese Blog</Link></li>
                {
                    admin && <li><Link style={{textDecoration:'none',color:'red'}} to='/dashbord'>Dashbord</Link></li>
                }
                <li style={{textDecoration:'none',color:'black'}} className="authentication">
                <Dropdown>
                    <Dropdown.Toggle className='customDropdown' style={{textDecoration:'none',color:'black'}}id="dropdown-basic">
                        <span style={{textDecoration:'none',color:'black',fontWeight:'600'}}>Authentication</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='text-center'>
                    <Link style={{textDecoration:'none',color:'black'}} className="mx-1 dropnav" to='/login'>Login</Link> <br/>
                    <Link style={{textDecoration:'none',color:'black'}} className=" mx-1 dropnav" to='/registration'>Registration</Link><br/>
                    <Link style={{textDecoration:'none',color:'black',color:'red'}} className=" mx-1 dropnav" to='/reset'>Reset Password</Link><br/>
                    </Dropdown.Menu>
                </Dropdown>
                </li>
            </ul>
            {
                !user.email ? <Link to='/login' style={{color:'tomato',textDecoration:'none'}}>Login</Link> : <Link style={{color:'red',textDecoration:'none'}}to='' onClick={logout}>Logout</Link> 
            }
            <div onClick={hamburget} className={toggleIcon}>
                <span className='Line bar'></span>
                <span className='Line bar'></span>
                <span className='Line bar'></span>
            </div>
            
        </div>
        </div>
    );
};

export default Navbarr;