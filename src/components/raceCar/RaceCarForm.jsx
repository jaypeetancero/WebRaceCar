import React from 'react';
import { Formik, Form as FormFormik } from 'formik';
import {RaceCarFormValidation} from '../../utils/ValidationSchema';

let RaceCarForm = props => {

    const { formValues, submitForm, deleteCar} = props;

    const preSubmit = values => {
        submitForm(values)
    }

    return(
        <Formik
        initialValues={formValues}
        enableReinitialize={true}
        validationSchema={RaceCarFormValidation}
        onSubmit={values =>  preSubmit(values)}
        render={({values, handleSubmit, handleChange, errors, touched, isSubmitting, resetForm, setSubmitting}) => (
            <FormFormik>
                <div className="container">
                    {formValues && formValues.id &&
                        <div className="row">
                            <div className="col row">
                                <div className="col">
                                    <label>ID:</label>
                                </div>
                                <div className="col">
                                    <p>{formValues.id}</p>
                                </div>
                            </div>
                            <div className="col row">
                                <div className="col">
                                    <label>Entry #:</label>
                                </div>
                                <div className="col">
                                    <p>{formValues.bibNumber}</p>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="form-group">
                        <label htmlFor="firstName">First name:</label>
                        <input 
                        id="firstName"
                        name="firstName"
                        className="form-control" 
                        type="text"
                        placeholder="Enter first Name"
                        onChange={handleChange} 
                        value={values.firstName}
                        />
                        {touched.firstName && errors.firstName ? (
                                <span className="text-danger">* {errors.firstName}</span>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name:</label>
                        <input 
                        id="lastName"
                        name="lastName"
                        className="form-control" 
                        type="text"
                        placeholder="Enter last Name"
                        onChange={handleChange} 
                        value={values.lastName}
                        />
                        {touched.lastName && errors.lastName ? (
                                <span className="text-danger">* {errors.lastName}</span>
                        ) : null}
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-secondary form-control" type="reset" onClick={resetForm}>Reset</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary form-control" type="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                        {formValues && formValues.id &&
                        <div className="col">
                            <button className="btn btn-warning form-control" type="button" onClick={()=>deleteCar(formValues.docId)}>Delete</button>
                        </div>
                        }
                    </div>
                </div>
            </FormFormik>
        )}
        >
        </Formik>
    )
}

export default RaceCarForm;