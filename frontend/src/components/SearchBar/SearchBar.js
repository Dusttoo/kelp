import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();
  const [queryString, setQueryString] = useState(
    new URLSearchParams(history.location.search).get("q") ?? ""
  );

  const updateSearch = (e) => {
    setQueryString(e.target.value);
    if (e.target.value) {
      history.replace({
        pathname: "/",
        search: `?q=${e.target.value}`,
      });
    } else {
      history.replace({
        pathname: "",
      });
    }
  };

  return (
    <div>
      <input
        className="search"
        placeholder="Search for a business"
        type="search"
        value={queryString}
        onChange={updateSearch}
      />
    </div>
  );
};

export default SearchBar;
