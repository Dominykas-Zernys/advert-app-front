import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './AdvertsGrid.style';
import Advert from '../../advertComponents/Advert/Advert';

const AdvertsGrid = ({ adverts, searchValue, currentCategory }) => {
  const [advertsToShow, setAdvertsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);

  // Create page number array to render page numbers from
  function createPageNumberArr(advertsLength) {
    const numberOfPages = Math.ceil(advertsLength / 12);
    const pageArrIndexes = Array.from(Array(numberOfPages).keys());
    setPagesArray(pageArrIndexes.map((page) => page + 1));
  }

  // Reset the page after filtering or search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, currentCategory]);

  // Select the adverts to show on a page
  useEffect(() => {
    setAdvertsToShow(adverts.slice((currentPage - 1) * 12, 12 * currentPage));
    createPageNumberArr(adverts.length);
  }, [adverts, currentPage]);

  return (
    <>
      <S.Grid>
        {advertsToShow.map((ad) => (
          <Advert key={ad.id} adInfo={ad} />
        ))}
      </S.Grid>
      {adverts.length > 12 && (
        <S.NumbersWrapper
          className='page-numbers-wrapper'
          value={currentPage}
          onChange={(e) => {
            setCurrentPage(e.target.value);
          }}
        >
          {pagesArray.map((pageNum, i) =>
            i === 0 ? (
              <div key={pageNum}>
                <input id={`${pageNum}`} name='page-number' type='radio' value={pageNum} defaultChecked />
                <label htmlFor={`${pageNum}`}>{pageNum}</label>
              </div>
            ) : (
              <div key={pageNum}>
                <input id={`${pageNum}`} name='page-number' type='radio' value={pageNum} />
                <label htmlFor={`${pageNum}`}>{pageNum}</label>
              </div>
            )
          )}
        </S.NumbersWrapper>
      )}
    </>
  );
};

AdvertsGrid.propTypes = {
  adverts: PropTypes.arrayOf(
    PropTypes.shape({
      categoryId: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      imageSrc: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      styleId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchValue: PropTypes.string,
  currentCategory: PropTypes.number.isRequired,
};

export default AdvertsGrid;
