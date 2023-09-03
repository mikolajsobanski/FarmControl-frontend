import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoAnalytics, IoSettingsOutline, IoPeopleOutline } from 'react-icons/io5'
import { TbReportAnalytics, TbHelpCircle } from 'react-icons/tb'
import { LuLayoutDashboard } from 'react-icons/lu'
import { BiHome } from 'react-icons/bi'
import './css/navMobile.css'
import { Link } from "react-router-dom";

function NavMobile () {


    return(
        <div className="navMobile-container">
            <Row>
                <Col>
                    <div className="items-navMobile">
                    <Link className="item-navMobile" to={"/farm"}><BiHome/></Link>
                    <Link className="item-navMobile" to={"/"}><LuLayoutDashboard/></Link>
                    <Link className="item-navMobile" to={"/staff"}><IoPeopleOutline/></Link>
                    <Link className="item-navMobile" to={"/analysis"}><IoAnalytics/></Link>
                    <Link className="item-navMobile" to={"/settings"}><IoSettingsOutline/></Link>
                    </div>
                    
                </Col>
            </Row>
        </div>

    )
}
export default NavMobile