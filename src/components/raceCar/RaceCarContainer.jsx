import React from 'react';
import RaceCarForm from './RaceCarForm';

let RaceCarContainer = props => {

    const {toggleForm, raceCar, addCarToList, deleteCar} = props;

    const submitForm = values => {
        addCarToList(values)
    }

    return(
        <div className="container animated fadeIn">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="p-3 m-3 border">
                        <div className="row">
                            <div className="col-1">
                                <i className="fas fa-arrow-left fa-2x" onClick={()=>toggleForm(false)}></i>
                            </div>
                            <div className="col-10">
                                <h3 className="text-center">Race Car Details</h3>
                            </div>
                        </div>
                        <br />
                        <RaceCarForm 
                            deleteCar={deleteCar}
                            formValues={raceCar}
                            submitForm={submitForm}
                        />
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default RaceCarContainer