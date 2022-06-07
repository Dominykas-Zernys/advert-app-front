import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchGet } from '../../helpers/fetchFunctions';
import FilterButton from '../../UI/FilterButton/FilterButton';
import * as Styled from './Filter.style';

const Filter = ({ handleCategoryChange }) => {
  // Get all categories from database
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCategories() {
    const cats = await fetchGet('categories');
    setCategories(cats.msg);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Styled.FilterWrap
      onChange={(e) => {
        handleCategoryChange(e.target.value);
      }}
    >
      <p>Select category:</p>
      <Styled.CategoriesWrap>
        {loading && <p>Loading...</p>}
        {!loading && categories.length && <FilterButton checkedBtn={true} labelText='All' id={0} />}
        {!loading && categories.length && categories.map((cat) => <FilterButton labelText={cat.name} id={cat.id} key={cat.id} />)}
      </Styled.CategoriesWrap>
    </Styled.FilterWrap>
  );
};

Filter.propTypes = {
  handleCategoryChange: PropTypes.func,
};

export default Filter;
