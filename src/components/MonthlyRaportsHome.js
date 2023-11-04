import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap';
import './css/fullRaportsHome.css'

function MonthlyRaportsHome({ farmerId }) {
  const [pdfData, setPdfData] = useState(null);

  const generatePDFReport = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/analysis/pdfMonthly',{params: {
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
  //costs
  const [pdfCostsData, setPdfCostsData] = useState(null);
  const generateCostsPDFReport = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/analysis/pdfMonthlyCosts',{params: {
            pk: farmerId,
          },}, {
            responseType: 'blob',
            responseEncoding: 'utf8', 
          });
      // Store the PDF data in state
      setPdfCostsData(response.data);
    } catch (error) {
      console.error('Error generating PDF report:', error);
    }
  };

  const handleCostsDisplay = () => {
    // You can display the PDF in an iframe or any other suitable viewer
    // Here's an example using an iframe:
    const url = URL.createObjectURL(new Blob([pdfCostsData], { type: 'application/pdf' }));
    window.open(url);
  };

  const handleCostsDownload = () => {
    const blob = new Blob([pdfCostsData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  //health
  const [pdfHealthData, setPdfHealthData] = useState(null);
  const generateHealthPDFReport = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/analysis/pdfMonthlyHealth',{params: {
            pk: farmerId,
          },}, {
            responseType: 'blob',
            responseEncoding: 'utf8', 
          });
      // Store the PDF data in state
      setPdfHealthData(response.data);
    } catch (error) {
      console.error('Error generating PDF report:', error);
    }
  };

  const handleHealthDisplay = () => {
    // You can display the PDF in an iframe or any other suitable viewer
    // Here's an example using an iframe:
    const url = URL.createObjectURL(new Blob([pdfHealthData], { type: 'application/pdf' }));
    window.open(url);
  };

  const handleHealthDownload = () => {
    const blob = new Blob([pdfHealthData], { type: 'application/pdf' });
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
            <Button onClick={generateCostsPDFReport}>Generuj PDF</Button>
            </Col>
        </Row>

        {pdfCostsData && (
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
            <Button onClick={generateHealthPDFReport}>Generuj PDF</Button>
            </Col>
        </Row>

        {pdfHealthData && (
            <div className='center-FullRaportsHome'>
            <Button onClick={handleHealthDisplay}>Wyświetl PDF</Button>
            <Button onClick={handleHealthDownload}>Pobierz PDF</Button>
            </div>
        )}

        
    </div>
  );
}

export default MonthlyRaportsHome;