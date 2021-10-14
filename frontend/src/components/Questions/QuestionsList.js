import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Questions = () => {
  const {id} = useParams();
  const businesses = useSelector((state) => state.business);
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions)

  const eachUser = [];
  const eachBusiness = [];
  const eachQuestion = [];
  const allQuestions = [];
  Object.values(businesses).map((business) => (eachBusiness.push(business)))
  const business = eachBusiness.find(oneBusiness => +id === oneBusiness.id);
  Object.values(users).map((user) => (eachUser.push(user)))
  Object.values(questions).map((question) => (eachQuestion.push(question)))
    eachQuestion.forEach((question) => {
        if (question.businessId === business.id) {
            allQuestions.push(question)
        }
    })

    const getOwner = (questionId) => {
        const question = eachQuestion.find(questions => questionId === questions.id);
        const user = eachUser.find(oneQuestion => question.userId === oneQuestion.id);
        return user;
    }

    const getDate = (userId) => {
        let options = { month: 'long'};
        const user = eachUser.find(oneUser => userId === oneUser.id);
        const date = new Date(user.kelpingSince);
        const day = date.getDate();
        const month = new Intl.DateTimeFormat('en-US', options).format(date)
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`
    }

    const noQuestions = () => {
        return (
        <div className="empty-reviews">
            <h2>Barnacles! No Questions Yet.</h2>
            {/* <AddQuestion /> */}
        </div>
        )
    }

    return (
        <>
            {allQuestions.length === 0 ?
            noQuestions() 
            :
            allQuestions.map(thisQuestion => (
                    <div className="questionSection" key={thisQuestion.id}>
                        <div className="reviewer">
                            <img className="reviewer-img" src={`${getOwner(thisQuestion.id).profileImg}`} alt={getOwner(thisQuestion.id).firstName}></img>
                            <div className="reviewer-info">
                                <h4 className="reviewer-name">{getOwner(thisQuestion.id).firstName} {getOwner(thisQuestion.id).lastName}</h4>
                                <h4 className="reviewer-title">Kelping Since: {getDate(getOwner(thisQuestion.id).id)}</h4>
                            </div> 
                        </div>
                        <div className="q-a">
                            <div className="q-tag"><span className="question-letter">Q:</span><p className="quesion-asked">{thisQuestion.question}</p></div>
                            <div className="q-tag"><span className="question-letter">A:</span><p className="quesion-asked">{thisQuestion.answer}</p></div>
                        </div>
                        {sessionUser ? 
              <div>
                {thisQuestion.userId === sessionUser.id ?
              <div className="edit-delete-review">
                <Link to={`/questions/${thisQuestion.id}`} className="add-biz">Edit </Link> 
                <Link to={`/questions/${thisQuestion.id}/delete`} className="delete-business">Delete</Link>
              </div> :
              <span></span>
              }
              </div> :
              <span></span>}


                    </div>
            ))
            }    
                
        </>
    )
}

export default Questions;