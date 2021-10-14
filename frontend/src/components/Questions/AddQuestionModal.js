import {  useState } from 'react';
import { Modal } from '../../context/Modal';
import AddQuestionForm from './AddQuestionForm';

const AddQuestion = () => {
  const [showModal, setShowModal] = useState(false);


    return (
        <>
      <button className="add-biz" onClick={() => setShowModal(true)}>Ask a question</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddQuestionForm /> 
        </Modal>
      )}
    </>
    )
}

export default AddQuestion;