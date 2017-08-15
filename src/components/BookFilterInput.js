import React from 'react';

const SearchField = ({ setSearchFilter }) =>
  <input type="text" placeholder="Search..." onChange={setSearchFilter} />;

export default SearchField;
