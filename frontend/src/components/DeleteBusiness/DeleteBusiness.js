import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ConfirmDelete from './ConfirmDelete'


function DeleteBusiness() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="delete-business" onClick={() => setShowModal(true)}>Delete Business</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ConfirmDelete /> 
        </Modal>
      )}
    </>
  );
}

export default DeleteBusiness;