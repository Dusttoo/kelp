import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { removeReview } from "../../store/reviews";
import { useSelector } from "react-redux";

function DeleteReview() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const reviews = useSelector((state) => state.reviews);
  const businessId = reviews[id].businessId;

  const deleteReview = async (e) => {
    e.preventDefault();

    dispatch(removeReview(id));
    history.push(`/${businessId}`);
  };

  return (
    <>
      <div className="confirmation-box confirm-delete-review">
        <h3>Are you sure you want to delete?</h3>
        <div>
          <form>
            <button
              type="submit"
              className="yes"
              onClick={(e) => deleteReview(e)}
            >
              Yes
            </button>
          </form>
          <form onSubmit={(e) => history.push(`/`)}>
            <button type="submit" className="no">
              No
            </button>
          </form>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
}

export default DeleteReview;
