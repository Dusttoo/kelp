import {  useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReviewForm from './AddReviewForm';

const AddReview = () => {
  const [showModal, setShowModal] = useState(false);


    return (
        <>
      <button className="add-biz" onClick={() => setShowModal(true)}>Write Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReviewForm setShowModal={setShowModal}/> 
        </Modal>
      )}
    </>
    )
}

export default AddReview;