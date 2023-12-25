import React, {useState , useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {farmerDetails, logout} from'../data/actions/farmerActions'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import { IoSettingsOutline, IoPeopleOutline, IoClose, IoLogOutOutline, IoLogInOutline } from 'react-icons/io5'
import { TbReportAnalytics, TbHelpCircle } from 'react-icons/tb'
import { LuLayoutDashboard } from 'react-icons/lu'
import { BiHome } from 'react-icons/bi'
import './css/sidebar.css'
import logo from '../assets/Logo-FarmControl.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
    const dispatch = useDispatch()
    const farmerInfo = useSelector(state => state.farmerInfo)
    const { error, loading, farmer} = farmerInfo



    useEffect ( () => {
        dispatch(farmerDetails())
        
    },[dispatch])

    const [activeLink, setActiveLink] = useState();
    const handleLinkClick = (route) => {
        setActiveLink(route);
      };

    const logoutHandler = () => {
        dispatch(logout())
    }
      

      
  return (
        <div className='container-sidebar'>
            <div className='logo-sidebar'>
                <LinkContainer to='/'>
                    <img className='img-sidebar' src={logo}/>
                </LinkContainer>
                <div className='close' id="close-btn">
                    <IoClose />
                </div>
            </div>
        <div className='content-sidebar'>
            <LinkContainer to='/farm'>
                <Nav.Link className={'/farm' === activeLink ? 'active-sidebar' : 'button-sidebar'} onClick={() => handleLinkClick('/farm')}> <span className='icon-sidebar'><BiHome/></span> Moja Farma</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/dashboard'>
                <Nav.Link className={'/dashboard' === activeLink ? 'active-sidebar' : 'button-sidebar'} onClick={() => handleLinkClick('/dashboard')}><span className='icon-sidebar'><LuLayoutDashboard/></span> Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/staff'>
                <Nav.Link className={'/staff' === activeLink ? 'active-sidebar' : 'button-sidebar'} onClick={() => handleLinkClick('/staff')}><span className='icon-sidebar'><IoPeopleOutline/></span> Pracownicy</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/analysis'>
                <Nav.Link className={'/analysis' === activeLink ? 'active-sidebar' : 'button-sidebar'} onClick={() => handleLinkClick('/analysis')}><span className='icon-sidebar'><TbReportAnalytics/></span> Raporty</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/settings'>
                <Nav.Link className={'/settings' === activeLink ? 'active-sidebar' : 'button-sidebar'} onClick={() => handleLinkClick('/settings')}><span className='icon-sidebar'><IoSettingsOutline/></span> Ustawienia</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/help'>
                <Nav.Link className={'/help' === activeLink ? 'active-sidebar' : 'button-sidebar'} onClick={() => handleLinkClick('/help')}><span className='icon-sidebar'><TbHelpCircle/></span> Pomoc</Nav.Link>
            </LinkContainer>
            {farmer && farmer.first_name ? (<>
                <LinkContainer to='/'>
                <Nav.Link className={'button-sidebar'} onClick={logoutHandler}><span className='icon-sidebar' ><IoLogOutOutline/></span> Wyloguj</Nav.Link>
                </LinkContainer>
            </>) : (<>
                <LinkContainer to='/auth'>
                <Nav.Link className={'button-sidebar'} ><span className='icon-sidebar'><IoLogInOutline/></span> Zaloguj</Nav.Link>
                </LinkContainer>
            </>)}
        </div>
        
        </div>
        
  )
}

export default Sidebar