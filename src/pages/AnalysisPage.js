
import { Col, Row } from 'react-bootstrap'
import './css/analysisPage.css'
import { TbReportAnalytics} from 'react-icons/tb'
import {IoAnalytics} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {farmerDetails} from'../data/actions/farmerActions'
import TaskRatioPie from '../components/charts/TaskRatioPie'
import AnimalCostsBar from '../components/charts/AnimalCostsBar'
import WorkerCountBar from '../components/charts/WorkerCountBar'
import { CountedWorkers, TaskRatio, TotalCostAnimals } from '../data/actions/analysisActions'
import FullRaportsHome from '../components/FullRaportsHome'
import MonthlyRaportsHome from '../components/MonthlyRaportsHome'
function AnalysisPage(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const farmerInfo = useSelector(state => state.farmerInfo)
    const { error, loading, farmer} = farmerInfo
    const farmerId = farmer?.id;
    

    useEffect ( () => {
        dispatch(farmerDetails())
        
        
            if(farmer){
                if(farmer.is_owner){
                    dispatch(CountedWorkers(farmer.id))
                    dispatch(TaskRatio(farmer.id))
                    dispatch(TotalCostAnimals(farmer.id))
                }else{
                    dispatch(CountedWorkers(farmer.id_owner))
                    dispatch(TaskRatio(farmer.id))
                    dispatch(TotalCostAnimals(farmer.id_owner))
                }
                
            }else{
                navigate('/auth')
            }
            
    },[dispatch])

    //countedWorkers
    const countedWorkers = useSelector(state => state.countedWorkers)
    const { error:errorCountedWorkers, loading: loadingCountedWorkers, countedworkers} = countedWorkers

    //task ratio
    const TaskRatioo = useSelector(state => state.taskRatio)
    const { error:errortaskRatio, loading: loadingtaskRatio, inProgres, complete} = TaskRatioo

    //totalCostAnimal
    const totalCostAnimals = useSelector(state => state.totalCostAnimals)
    const { error:errortotalCostAnimals, loading: loadingtotalCostAnimals, totalCosts} = totalCostAnimals

    return(
        <div className="mainDiv-AnalysisPage">
            <div className='analysisHeader-AnalysisPage'><span className='analysisIcon-AnalysisPage'><IoAnalytics /></span> Analiza</div>
            <Row className='analysisRow-AnalysisPage'>
                <Col md={4}>
                    <WorkerCountBar countedWorkers={countedworkers}/>
                </Col>

                <Col className='taskRatioCol-AnalysisPage' md={4}>
                    <TaskRatioPie inProgres={inProgres} complete={complete}/>
                </Col>

                <Col md={4}>
                    <AnimalCostsBar data={totalCosts}/>
                </Col>
            </Row>

            <Row className='reportsRow-AnalysisPage'>
                <div className='reportsHeader-AnalysisPage'><span className='reportsIcon-AnalysisPage'><TbReportAnalytics /></span> Raporty</div>
                <Col className='fullReportCol-AnalysisPage'>
                <div className='reportsColumnHeader-AnalysisPage'>Pełen raport</div>
                <div className='fullRaportsDiv-AnalysisPage'>
                    <FullRaportsHome farmerId={farmerId} />
                </div>
                </Col>
                <Col className='monthlyReportCol-AnalysisPage'>
                <div className='reportsColumnHeader-AnalysisPage'>Miesięczny raport</div>
                <div className='fullRaportsDiv-AnalysisPage'>
                    <MonthlyRaportsHome farmerId={farmerId} />
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default AnalysisPage