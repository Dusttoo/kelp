import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

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
                <div>
                    <div className="q-a">
                        <span className="question-letter">Q:</span><p className="quesion-asked">{thisQuestion.question}</p>
                    </div>
                    <div className="q-a">
                        <span className="question-letter">A:</span><p className="quesion-asked">{thisQuestion.answer}</p>
                    </div>
                </div>
                
            ))
            }    
                
        </>
    )
}

export default Questions;