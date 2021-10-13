import React from 'react';
import businessReducer, { removeBusiness } from '../../store/businesses';
import { useDispatch} from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { useParams } from 'react-router';



function ConfirmDelete() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();

    const deleteBusiness = async (e) => {
      e.preventDefault();

      const remove = await dispatch(removeBusiness(id));
      if (!remove) {
        history.push('/');
      }
    }

    const close = async (e) => {
      e.preventDefault();
        history.push(`/${id}`);
      }
    

    return (

        <>
          <div className="confirmation-box">
            <h3>Are you sure you want to delete?</h3>
            <div>
              <form >
                <button type='submit' className="yes" onClick={(e) => deleteBusiness(e)}>Yes</button>
              </form>
              <form onSubmit={(e) => close(e)}>
                <button type='submit' className="no">No</button>
              </form>
            </div>    
          </div>
        </>

    )
  
}

export default ConfirmDelete;