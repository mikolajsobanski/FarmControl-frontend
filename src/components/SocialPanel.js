import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import './css/socialPanel.css'

function SocialPanel() {
  return (
        
        <div className='socialPanel-container'>
            <Row>
              <Col md ={2}><a className='facebook' href='#'><FaFacebook />    Facebook</a></Col>
              <Col md ={2}><a href='#'><FaYoutube />   Youtube</a></Col>
              <Col md ={2}><a className='instagram' href='#'><FaInstagram />     Instagram</a></Col>
              <Col md ={2}><a href='#'><FaEnvelope/>    Gmail</a></Col>
              <Col md ={2}><a className='linkedin' href='#'><FaLinkedin/>    Linkedin</a></Col>
              <Col md ={2}><a className='twitter' href='#'><FaTwitter/>      Twitter</a></Col>
            </Row>
        </div>
        
  )
}

export default SocialPanel