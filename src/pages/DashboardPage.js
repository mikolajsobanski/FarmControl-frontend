import { useDispatch, useSelector } from 'react-redux'
import AnimalCostsBar from '../components/charts/AnimalCostsBar'
import './css/dashboardPage.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { farmerDetails, farmerWorkerList } from '../data/actions/farmerActions'
import { CountedWorkers, HealthRatio, TaskRatio, TotalCostAnimals, TotalCostByCategory, TotalCostsMonth } from '../data/actions/analysisActions'
import TaskRatioPie from '../components/charts/TaskRatioPie'
import { Button, Carousel, Col, Row } from 'react-bootstrap'
import {GrInProgress} from "react-icons/gr"
import {IoCheckmarkDoneSharp} from "react-icons/io5"
import WorkerCard from '../components/WorkerCard'
import SumOfAllCostArea from '../components/charts/SumOfAllCostArea'
import HealthStatusPie from '../components/charts/HealthStatusPie'
import Popup from '../components/Popup'
import TaskCard from '../components/TaskCard'
import { ListCompleteTask, ListInProgressTask } from '../data/actions/utilsActions'
import AnimalCostRadar from '../components/charts/AnimalCostRadar'
import CostCategoryAnimalVerticalBar from '../components/charts/CostCategoryAnimalVerticalBar'

function DashboardPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const farmerInfo = useSelector(state => state.farmerInfo)
    const { error, loading, farmer} = farmerInfo
    const farmerId = farmer?.id;
    

    useEffect ( () => {
        dispatch(farmerDetails())
        
        
            if(farmer){
                
                if(farmer.is_owner){
                    dispatch(farmerWorkerList(farmer.id))
                    dispatch(CountedWorkers(farmer.id))
                    dispatch(TaskRatio(farmer.id))
                    dispatch(TotalCostAnimals(farmer.id))
                    dispatch(ListInProgressTask(farmer.id))
                    dispatch(ListCompleteTask(farmer.id))
                    dispatch(HealthRatio(farmer.id))
                    dispatch(TotalCostByCategory(farmer.id))
                    dispatch(TotalCostsMonth(farmer.id))
                }else{
                    dispatch(CountedWorkers(farmer.id_owner))
                    dispatch(TaskRatio(farmer.id_owner))
                    dispatch(TotalCostAnimals(farmer.id_owner))
                    dispatch(HealthRatio(farmer.id_owner))
                    dispatch(TotalCostByCategory(farmer.id_owner))
                    dispatch(TotalCostsMonth(farmer.id_owner))
                    dispatch(ListInProgressTask(farmer.id))
                    dispatch(ListCompleteTask(farmer.id))
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

     //health ratio
     const healthRatio = useSelector(state => state.healthRatio)
     const { error:errorhealthRatio, loading: loadinghealthRatio, healthy, ill} = healthRatio

    //totalCostAnimal
    const totalCostAnimals = useSelector(state => state.totalCostAnimals)
    const { error:errortotalCostAnimals, loading: loadingtotalCostAnimals, totalCosts} = totalCostAnimals

    //task in progres
    const taskGetInProgres = useSelector(state => state.taskGetInProgres)
    const { tasks: tasksInProgres, loading:loadingInProgres, error: errorInProgres} = taskGetInProgres
    const [popupTasksInProgres, setPopupTaskInProgres] = useState('')


    //task completed
    const taskGetComplete = useSelector(state => state.taskGetComplete)
    const { tasks: tasksComplete, loading:loadingComplete, error: errorComplete} = taskGetComplete
    const [popupTasksComplete, setPopupTaskComplete] = useState('')

    //list workers
    const workersList = useSelector(state => state.farmerWorkerList)
    const { workers, loading:loadingWorkers, error:errorWorkers} = workersList

    //totalCostCategory
    const totalCostCategory = useSelector(state => state.totalCostCategory)
    const { error:errortotalCostCategory, loading: loadingtotalCostCategory, costsByCategory} = totalCostCategory
    
    //totalCostsMonths
    const totalCostMonths = useSelector(state => state.totalCostMonths)
    const { error:errortotalCostMonths, loading: loadingtotalCostMonths, monthly_costs} = totalCostMonths
    

    return(
        <div className="container-DashboardPage">
            <Popup trigger={popupTasksInProgres} setTrigger={setPopupTaskInProgres}>
                <div>
                    <h5 className='center-DashboardPage'>Zadania w Trakcie</h5>
                    <div className="inProgressTask-DashboardPage">
                                {tasksInProgres && tasksInProgres.map(task => (
                                    <div className="inProgressTaskDiv-DashboardPage">
                                        <TaskCard key={task.id} task={task} farmer={farmer}/>
                                    </div>
                                    
                                ))}                                
                        </div>
                </div>
            </Popup>
            <Popup trigger={popupTasksComplete} setTrigger={setPopupTaskComplete}>
                <div>
                    <h5 className='center-DashboardPage'>Zadania ukończone</h5>
                    <div className="inProgressTask-DashboardPage">
                                {tasksComplete && tasksComplete.map(task => (
                                    <div className="inProgressTaskDiv-DashboardPage">
                                        <TaskCard key={task.id} task={task} farmer={farmer}/>
                                    </div>
                                    
                                ))}                                
                        </div>
                </div>
            </Popup>
            <div className="box Box1-DashboardPage">
                <CostCategoryAnimalVerticalBar data={costsByCategory} />
            </div>
            <div className="box Box2-DashboardPage">
                <AnimalCostRadar data={totalCosts}/>
            </div>
            <div className="box Box3-DashboardPage">
                
                <HealthStatusPie healthy={healthy} ill={ill}/>
                </div>
            <div className="box Box4-DashboardPage">
                
                <AnimalCostsBar data={totalCosts} />
            </div>
            <div className="box Box5-DashboardPage">
                <p>Ilość zadań w trakcie: {inProgres}</p>
                <Row>
                    <Col>
                        <div className='iconTask-DashboardPage'>
                            <GrInProgress />
                        </div>
                       
                    </Col>
                    <Col md={9}>
                        <Button onClick={setPopupTaskInProgres}>Zobacz</Button>
                    </Col>
                </Row>
            </div>
            <div className="box Box6-DashboardPage">
                <p>Ilość zadań ukończonych: {complete}</p>
                <Row>
                    <Col>
                        <div className='iconTask-DashboardPage'>
                            <IoCheckmarkDoneSharp />
                        </div>
                    </Col>
                    <Col md={9}>
                        <Button onClick={setPopupTaskComplete}>Zobacz</Button>
                    </Col>
                </Row>
            </div>
            <div className="box Box7-DashboardPage">
            <SumOfAllCostArea data={monthly_costs}/>
                
            </div>
            <div className="box Box8-DashboardPage">
            
            <p>Lista pracowników</p>
                <Carousel>
                        {workers && workers.map(worker => (
                        <Carousel.Item key={worker.id} sm={12} md={6} lg={4} xl={3}>
                            <WorkerCard farmer={worker} farmerId={farmerId}/>
                        </Carousel.Item>
                        ))}
                </Carousel>
                
            </div>
            <div className="box Box9-DashboardPage">
                <TaskRatioPie inProgres={inProgres} complete={complete}/>
            </div>
        

        </div>
    )
}
export default DashboardPage