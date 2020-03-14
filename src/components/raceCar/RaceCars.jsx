import React, {useState, useEffect} from 'react';
import RaceCarContainer from './RaceCarContainer';
import RaceCarsTable from './RaceCarsTable';
import firebase from '../../config/FirebaseConfig';

let RaceCars = props => {

    const RACE_CAR_INITIAL_STATE = {
        firstName : '',
        lastName : ''
    }

    let [raceCars, setRaceCars] = useState([]);
    let [counter, setCounter] = useState(0);
    let [raceCar, setRaceCar] = useState(RACE_CAR_INITIAL_STATE)
    let [toggleForm, setToggleForm] = useState(false);
    let [database, setDatabase] = useState(firebase.firestore());
    let [isLoadingList, setLoadingList] = useState(false);

    useEffect(()=>{
        getCounterFromDB();
        getAllRaceCarsFromDB();
        database.settings({
            timestampsInSnapshots: true
        });
    },[])

    const getAllRaceCarsFromDB = () => {
        setRaceCars([]);
        setLoadingList(true)
        database.collection('raceCars').get()
        .then(querySnapShot => {
            querySnapShot.forEach(doc => {
                let data = doc.data();
                data.docId = doc.id;
                setRaceCars(oldList => [...oldList, data])
            })
            setLoadingList(false)
        })
    }

    const getCounterFromDB = async () => {
        let counter = 0;
        await database.collection('counter')
        .doc("AznLkk4ak9pF0wtKJRk4")
        .get()
        .then(querySnapShot => {
            counter = querySnapShot.data().counter;
            setCounter(counter);
        })
        return counter
    }

    const addCarToList = async values => {
        await getCounterFromDB();
        if(values && !values.id){
            database.collection('raceCars').add({
                bibNumber : await generateCarBibNumber(),
                id : values.firstName.replace(/\s/g, '') + values.lastName.replace(/\s/g, '') + counter,
                firstName : values.firstName,
                lastName : values.lastName,
            }); 
        } else {
            database.collection('raceCars').doc(values.docId).set(values);
        }
        setToggleForm(false);
        getAllRaceCarsFromDB();
        setRaceCar(RACE_CAR_INITIAL_STATE)
    }

    const deleteCar = async docId => {
        await database.collection('raceCars').doc(docId).delete();
        getAllRaceCarsFromDB();
        setToggleForm(false);
        setRaceCar(RACE_CAR_INITIAL_STATE)
    }

    const getTableData = values => {
        setRaceCar(values)
        setToggleForm(true);
    }

    const generateCarBibNumber = async () => {
        setCounter(counter + 1);
        database.collection('counter')
        .doc("AznLkk4ak9pF0wtKJRk4")
        .set({counter : counter})
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
                isLoading={isLoadingList}
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