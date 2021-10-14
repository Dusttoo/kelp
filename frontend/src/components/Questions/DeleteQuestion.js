import React from 'react';
import { useDispatch} from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import removeQuestion from '../../store/questions';
import { useSelector } from 'react-redux';


function DeleteQuestion() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const questions = useSelector(state => state.questions);
    const businessId = questions[id].businessId
    console.log(businessId)


    const deleteQuestion = async (e) => {
      e.preventDefault();

      dispatch(removeQuestion(id));
        history.push(`/${businessId}`) 

    }
    

    return (

        <>
          <div className="confirmation-box confirm-delete-review">
            <h3>Are you sure you want to delete?</h3>
            <div>
              <form >
                <button type='submit' className="yes" onClick={(e) => deleteQuestion(e)}>Yes</button>
              </form>
              <form onSubmit={(e) => history.push(`/${businessId}`)}>
                <button type='submit' className="no">No</button>
              </form>
            </div>    
          </div>
          <div className="spacer"></div>
        </>

    )
  
}

export default DeleteQuestion;