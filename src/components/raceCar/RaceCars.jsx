import React, {useState} from 'react';
import RaceCarContainer from './RaceCarContainer';
import RaceCarsTable from './RaceCarsTable';

let RaceCars = props => {

    const RACE_CAR_INITIAL_STATE = {
        firstName : '',
        lastName : ''
    }

    let [raceCars, setRaceCars] = useState([]);
    let [counter, setCounter] = useState(0);
    let [raceCar, setRaceCar] = useState(RACE_CAR_INITIAL_STATE)
    let [toggleForm, setToggleForm] = useState(false);

    const addCarToList = values => {
        //I will add the function add car here for the meantime since I don't have a backend but I commonly put the add api to the Container of the module not in the list
        if(values && !values.id){
            values.id = values.firstName + values.lastName + counter;
            values.bibNumber = generateCarBibNumber();
            setRaceCars(oldArray => [...oldArray, values]);
            setToggleForm(false);
            setRaceCar(RACE_CAR_INITIAL_STATE)
        } else {
            let tempList = [...raceCars];
            let carIndex = raceCars.findIndex(raceCar => raceCar.id === values.id);
            tempList[carIndex] = values;
            setRaceCars(tempList);
            setToggleForm(false);
            setRaceCar(RACE_CAR_INITIAL_STATE)
        }
    }

    const deleteCar = id => {
        let tempList = [...raceCars];
        let carIndex = raceCars.findIndex(raceCar => raceCar.id === id);
        tempList.splice(carIndex, 1);
        setRaceCars(tempList);
        setToggleForm(false);
        setRaceCar(RACE_CAR_INITIAL_STATE)
    }

    const getTableData = values => {
        setRaceCar(values)
        setToggleForm(true);
    }

    const generateCarBibNumber = () => {
        setCounter(oldCounter => oldCounter + 1);
        return counter;
    }

    return(
        <React.Fragment>
            {
                toggleForm ? 
                <RaceCarContainer 
                addCarToList={addCarToList}
                deleteCar={deleteCar}
                raceCar={raceCar}
                toggleForm={setToggleForm}/> 
                : 
                <RaceCarsTable 
                toggleForm={()=>{
                    setToggleForm(true);
                    setRaceCar(RACE_CAR_INITIAL_STATE)
                }} 
                getTableData={getTableData} 
                raceCars={raceCars}/>
            }
        </React.Fragment>
    )
}

export default RaceCars