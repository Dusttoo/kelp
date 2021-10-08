import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBusinesses } from '../../store/businesses';


const Businesses = () => {
    console.log("business test")
  const dispatch = useDispatch();
  const businesses = useSelector(state => Object.values(state.businesses))

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  return (
    <div>
        <div>
            {businesses.map((business) => {
                return business
            })}
        </div>
    </div>
  );
};

export default Businesses;