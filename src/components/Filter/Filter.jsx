import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchGet } from '../../helpers/fetchFunctions';
import FilterButton from '../../UI/FilterButton/FilterButton';
import * as S from './Filter.style';

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
    <S.FilterWrap
      onChange={(e) => {
        handleCategoryChange(e.target.value);
      }}
    >
      <p>Select category:</p>
      <S.CategoriesWrap>
        {loading && <p>Loading...</p>}
        {!loading && categories.length && <FilterButton checkedBtn={true} labelText='All' id={0} />}
        {!loading && categories.length && categories.map((cat) => <FilterButton labelText={cat.name} id={cat.id} key={cat.id} />)}
      </S.CategoriesWrap>
    </S.FilterWrap>
  );
};

Filter.propTypes = {
  handleCategoryChange: PropTypes.func,
};

export default Filter;
