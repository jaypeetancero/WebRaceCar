import React from 'react';

let RaceCarsTable = props => {

    const {toggleForm, getTableData, raceCars} = props;

    return(
        <div className="container-fluid animated fadeIn">
            <div className="row py-3">
                <div className="col d-flex justify-content-start">
                    <h4>Car List</h4>
                </div>
                <div className="col d-flex justify-content-end">
                    <button type="button" className="btn btn-primary" onClick={toggleForm}><i className="fas fa-plus mr-2"></i>Register Car</button>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Bib Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        raceCars.length > 0 ?
                            raceCars.map(raceCar => {
                                return(
                                    <tr role="row" key={raceCar.bibNumber}>
                                        <th scope="row">
                                            <p>{raceCar.id}</p>
                                        </th>
                                        <td>
                                            <p>{raceCar.bibNumber}</p>
                                        </td>
                                        <td>
                                            <p>{raceCar.firstName}</p>
                                        </td>
                                        <td>
                                            <p>{raceCar.lastName}</p>
                                        </td>
                                        <td className="row">
                                            <button type="button" className="btn btn-info btn-sm" onClick={()=>getTableData(raceCar)}>View info</button>
                                        </td>
                                    </tr>
                                )
                            })
                        :
                           <tr role="row">
                               <td className="v-align-middle text-center" colSpan="5">No record found</td>
                           </tr> 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RaceCarsTable