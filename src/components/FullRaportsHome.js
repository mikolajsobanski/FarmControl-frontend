import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap';
import './css/fullRaportsHome.css'

function FullRaportsHome({ farmerId }) {
  const [pdfFullData, setPdfFullData] = useState(null);

  const generateFullPDFReport = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/analysis/pdf',{params: {
            pk: farmerId,
          },}, {
            responseType: 'blob',
            responseEncoding: 'utf8', 
          });
      // Store the PDF data in state
      setPdfFullData(response.data);
    } catch (error) {
      console.error('Error generating PDF report:', error);
    }
  };
  

  const handleDisplay = () => {
    // You can display the PDF in an iframe or any other suitable viewer
    // Here's an example using an iframe:
    const url = URL.createObjectURL(new Blob([pdfFullData], { type: 'application/pdf' }));
    window.open(url);
  };

  const handleDownload = () => {
    const blob = new Blob([pdfFullData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  // full costs report
  const [pdfFullCostsData, setPdfFullCostsData] = useState(null);

  const generateFullCostsPDFReport = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/analysis/pdfFullCosts',{params: {
            pk: farmerId,
          },}, {
            responseType: 'blob',
            responseEncoding: 'utf8', 
          });
      // Store the PDF data in state
      setPdfFullCostsData(response.data);
    } catch (error) {
      console.error('Error generating PDF report:', error);
    }
  };


  const handleCostsDisplay = () => {
    // You can display the PDF in an iframe or any other suitable viewer
    // Here's an example using an iframe:
    const url = URL.createObjectURL(new Blob([pdfFullCostsData], { type: 'application/pdf' }));
    window.open(url);
  };

  const handleCostsDownload = () => {
    const blob = new Blob([pdfFullCostsData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  //full health report
  const [pdfFullHealthData, setPdfFullHealthData] = useState(null);

  const generateFullHealthPDFReport = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/analysis/pdfFullHealth',{params: {
            pk: farmerId,
          },}, {
            responseType: 'blob',
            responseEncoding: 'utf8', 
          });
      // Store the PDF data in state
      setPdfFullHealthData(response.data);
    } catch (error) {
      console.error('Error generating PDF report:', error);
    }
  };


  const handleHealthDisplay = () => {
    // You can display the PDF in an iframe or any other suitable viewer
    // Here's an example using an iframe:
    const url = URL.createObjectURL(new Blob([pdfFullHealthData], { type: 'application/pdf' }));
    window.open(url);
  };

  const handleHealthDownload = () => {
    const blob = new Blob([pdfFullHealthData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };


  return (
    <div className='mainDiv-FullRaportsHome'>
        <Row className='row-FullRaportsHome'>
            <Col>
            <p>Pełen raport</p>
            </Col>
            <Col>
            <Button onClick={generateFullPDFReport}>Generuj PDF</Button>
            </Col>
        </Row>
      

        {pdfFullData && (
            <div className='center-FullRaportsHome'>
            <Button onClick={handleDisplay}>Wyświetl PDF</Button>
            <Button onClick={handleDownload}>Pobierz PDF</Button>
            </div>
        )}

        <Row className='row-FullRaportsHome'>
            <Col>
            <p>Raport kosztów</p>
            </Col>
            <Col>
            <Button onClick={generateFullCostsPDFReport}>Generuj PDF</Button>
            </Col>
        </Row>

        {pdfFullCostsData && (
            <div className='center-FullRaportsHome'>
            <Button onClick={handleCostsDisplay}>Wyświetl PDF</Button>
            <Button onClick={handleCostsDownload}>Pobierz PDF</Button>
            </div>
        )}


        <Row className='row-FullRaportsHome'>
            <Col>
            <p>Raport zdrowia i szczepień</p>
            </Col>
            <Col>
            <Button onClick={generateFullHealthPDFReport}>Generuj PDF</Button>
            </Col>
        </Row>

        {pdfFullHealthData && (
            <div className='center-FullRaportsHome'>
            <Button onClick={handleHealthDisplay}>Wyświetl PDF</Button>
            <Button onClick={handleHealthDownload}>Pobierz PDF</Button>
            </div>
        )}

        
    </div>
  );
}

export default FullRaportsHome;