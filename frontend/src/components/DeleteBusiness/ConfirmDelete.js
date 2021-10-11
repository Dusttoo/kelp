import React from 'react';
import { removeBusiness } from '../../store/businesses';
import { useDispatch} from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { useParams } from 'react-router';



function ConfirmDelete() {
    const dispatch = useDispatch();
    const {id} = useParams();



    const deleteBusiness = async (e) => {
      // e.preventDefault();

      return dispatch(removeBusiness(id))
      .catch(async (res) => {
        if (res.status.ok) {
          <Redirect to={`/`} />
        }
      })
      

    }

    return (

        <>
          <div className="confirmation-box">
            <h3>Are you sure you want to delete?</h3>
            <div>
              
              <button onClick={(e) => deleteBusiness()} className="yes">Yes</button>
              
              <button className="no">No</button>
            </div>    
          </div>
        </>

    )
  
}

export default ConfirmDelete;