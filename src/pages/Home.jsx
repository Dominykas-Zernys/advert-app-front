import React, { useEffect, useState } from 'react';
import AdvertsGrid from '../components/AdvertsGrid/AdvertsGrid';
import Container from '../components/Container/Container';
import Filter from '../components/Filter/Filter';
import FilterWrapper from '../components/FilterWrapper/FilterWrapper';
import Input from '../components/Input/Input';
import Loading from '../components/Loading/Loading';
import Main from '../components/Main/Main';
import { fetchGet } from '../helpers/fetchFunctions';
import Subtitle from '../UI/Subtitle/Subtitle';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Original fetched array
  const [adArray, setAdArray] = useState([]);

  // Array states after searching and filtering
  const [filteredAdArray, setFilteredAdArray] = useState([]);
  const [arrayToDisplay, setArrayToDisplay] = useState([]);

  // States for current search and category filter
  const [searchValue, setSearchValue] = useState('');
  const [currentCategory, setCurrentCategory] = useState(0);

  // Fetching all adverts to display
  async function getAllAdverts() {
    const ads = await fetchGet('adverts');
    setAdArray(ads.msg);
    setFilteredAdArray(ads.msg);
    setLoading(false);
  }

  useEffect(() => {
    getAllAdverts();
  }, []);

  // UseEffect to handle search function
  useEffect(() => {
    setFilteredAdArray(
      adArray.filter((ad) => {
        if (ad.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return ad;
        }
      })
    );
  }, [searchValue]);

  // Function to filter by category
  function handleFilter(categoryId) {
    setCurrentCategory(categoryId);
  }

  useEffect(() => {
    !Number(currentCategory)
      ? setArrayToDisplay(filteredAdArray)
      : setArrayToDisplay(filteredAdArray.filter((ad) => ad.categoryId === Number(currentCategory)));
  }, [currentCategory, filteredAdArray]);

  return (
    <Main>
      <Container minHeight='4rem' width='60%'>
        <Title marginBottom='0'>Advertise Yourself!</Title>
      </Container>
      <Subtitle>A place to advertise and find all kinds of services!</Subtitle>
      <FilterWrapper>
        <Filter handleCategoryChange={handleFilter} />
        <Input labelText='Search adverts' type='text' inputValue={searchValue} setInputValue={setSearchValue} placeholder='search' />
      </FilterWrapper>
      {loading ? <Loading /> : <AdvertsGrid adverts={arrayToDisplay} searchValue={searchValue} currentCategory={currentCategory} />}
      {!loading && !arrayToDisplay.length && (
        <Text textIndent={false} center={true}>
          No adverts found
        </Text>
      )}
    </Main>
  );
};

export default Home;
