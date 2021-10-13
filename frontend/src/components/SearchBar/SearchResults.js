import { useLocation, Link } from 'react-router-dom';

const SearchResults = ({ business, getStars }) => {
  const queryString = new URLSearchParams(useLocation().search).get('q') ?? '';
  const biz = business.name;

  return (
      <>
        {!queryString ?
            <div className="search-results-empty"></div> : 

        biz.toLowerCase().includes(queryString) || String(business.id).includes(queryString) ?
            <div className="search-results">
                <Link  to={`/${business.id}`} > 
                  <img className='listing-img' src={business.image} alt={business.name}></img>
                  <p className="biz-link">{business.name}</p>
                  <span className="stars">{getStars(business.id)}</span>
                </Link>
            </div>
         :
        <span></span>   
        }
      </>
                    
  );
};

export default SearchResults;