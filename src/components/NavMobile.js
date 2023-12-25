import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoSettingsOutline, IoPeopleOutline } from 'react-icons/io5'
import { TbReportAnalytics, TbHelpCircle } from 'react-icons/tb'
import { LuLayoutDashboard } from 'react-icons/lu'
import { BiHome } from 'react-icons/bi'
import './css/navMobile.css'
import logowthtext from '../assets/Logo-FarmControl-wthtext.png'
import { Link } from "react-router-dom";

function NavMobile () {


    return(
        <div className="navMobile-container">
            <Row>
                <Col>
                    <div className="items-navMobile">
                    <Link className="item-navMobile" to={"/"}><img className="logo-navMobile" src={logowthtext}/></Link>
                    <Link className="item-navMobile" to={"/farm"}><BiHome/></Link>
                    <Link className="item-navMobile" to={"/dashboard"}><LuLayoutDashboard/></Link>
                    <Link className="item-navMobile" to={"/staff"}><IoPeopleOutline/></Link>
                    <Link className="item-navMobile" to={"/analysis"}><TbReportAnalytics/></Link>
                    <Link className="item-navMobile" to={"/settings"}><IoSettingsOutline/></Link>
                    <Link className="item-navMobile" to={"/help"}><TbHelpCircle/></Link>
                    </div>
                    
                </Col>
            </Row>
        </div>

    )
}
export default NavMobile