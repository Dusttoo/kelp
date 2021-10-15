import { useLocation, Link } from 'react-router-dom';

const SearchResults = ({ business, getStars }) => {
  const queryString = new URLSearchParams(useLocation().search).get('q') ?? '';
  const biz = business.name;
  const lowerString = queryString.toLowerCase()

  return (
      <>
        {!queryString ?
            <div className="search-results-empty"></div> : 

        biz.toLowerCase().includes(lowerString) ?
          <div className="result-container">
            <div className="search-results">
                
                  <Link  to={`/${business.id}`} > <img className='listing-img' src={business.image} alt={business.name}></img></Link>
                  <Link  to={`/${business.id}`} > <p className="biz-link">{business.name}</p></Link>
                  <Link  to={`/${business.id}`} > <span className="stars">{getStars(business.id)}</span></Link>
                
            </div>
          </div>
         :
        <span></span>   
        }
      </>
                    
  );
};

export default SearchResults;