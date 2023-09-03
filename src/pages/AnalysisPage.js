
import { Col, Row } from 'react-bootstrap'
import './css/analysisPage.css'
import { TbReportAnalytics} from 'react-icons/tb'
import {IoAnalytics} from 'react-icons/io5'
function AnalysisPage(){

    return(
        <div className="mainDiv-AnalysisPage">
            <div className='analysisHeader-AnalysisPage'><span className='analysisIcon-AnalysisPage'><IoAnalytics /></span> Analiza</div>
            <Row className='analysisRow-AnalysisPage'>
                Analiza
            </Row>

            <Row className='reportsRow-AnalysisPage'>
                <div className='reportsHeader-AnalysisPage'><span className='reportsIcon-AnalysisPage'><TbReportAnalytics /></span> Raporty</div>
                <Col className='fullReportCol-AnalysisPage'>
                <div className='reportsColumnHeader-AnalysisPage'>Pełen raport</div>
                </Col>
                <Col className='monthlyReportCol-AnalysisPage'>
                <div className='reportsColumnHeader-AnalysisPage'>Miesięczny raport</div>
                </Col>
            </Row>
        </div>
    )
}

export default AnalysisPage