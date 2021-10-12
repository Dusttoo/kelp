import React from 'react';
import { useDispatch} from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { removeReview } from '../../store/reviews';



function DeleteReview() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();


    const deleteReview = async (e) => {
      e.preventDefault();

      const remove = await dispatch(removeReview(id));
      console.log(remove);
      if (!remove) {
        history.push('/');
      }
    }
    

    return (

        <>
          <div className="confirmation-box confirm-delete-review">
            <h3>Are you sure you want to delete?</h3>
            <div>
              <form >
                <button type='submit' className="yes" onClick={(e) => deleteReview(e)}>Yes</button>
              </form>
              <form onSubmit={(e) => history.push(`/`)}>
                <button type='submit' className="no">No</button>
              </form>
            </div>    
          </div>
          <div className="spacer"></div>
        </>

    )
  
}

export default DeleteReview;