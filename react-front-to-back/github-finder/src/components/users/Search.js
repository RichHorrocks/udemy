import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

//class Search extends Component {
const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers } = githubContext;

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
