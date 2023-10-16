import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap';
import './css/fullRaportsHome.css'

function MonthlyRaportsHome({ farmerId }) {
  const [pdfData, setPdfData] = useState(null);

  const generatePDFReport = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/analysis/pdf',{params: {
            pk: farmerId,
          },}, {
            responseType: 'blob',
            responseEncoding: 'utf8', 
          });
      // Store the PDF data in state
      setPdfData(response.data);
    } catch (error) {
      console.error('Error generating PDF report:', error);
    }
  };

  const handleDisplay = () => {
    // You can display the PDF in an iframe or any other suitable viewer
    // Here's an example using an iframe:
    const url = URL.createObjectURL(new Blob([pdfData], { type: 'application/pdf' }));
    window.open(url);
  };

  const handleDownload = () => {
    const blob = new Blob([pdfData], { type: 'application/pdf' });
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
            <Button onClick={generatePDFReport}>Generuj PDF</Button>
            </Col>
        </Row>
      

        {pdfData && (
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
            <Button onClick={generatePDFReport}>Generuj PDF</Button>
            </Col>
        </Row>


        <Row className='row-FullRaportsHome'>
            <Col>
            <p>Raport zdrowia i szczepień</p>
            </Col>
            <Col>
            <Button onClick={generatePDFReport}>Generuj PDF</Button>
            </Col>
        </Row>

        
    </div>
  );
}

export default MonthlyRaportsHome;