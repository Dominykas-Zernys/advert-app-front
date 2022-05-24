import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdvertsGrid from '../components/AdvertsGrid/AdvertsGrid';
import Container from '../components/Container/Container';
import Filter from '../components/Filter/Filter';
import FilterWrapper from '../components/FilterWrapper/FilterWrapper';
import Input from '../components/Input/Input';
import Loading from '../components/Loading/Loading';
import Main from '../components/Main/Main';
import Wrapper from '../components/Wrapper/Wrapper';
import { AuthContext } from '../helpers/AuthContext';
import { fetchGet } from '../helpers/fetchFunctions';
import Subtitle from '../UI/Subtitle/Subtitle';
import Text from '../UI/Text/Text';
import Title from '../UI/Title/Title';

const UserPage = () => {
  const [loading, setLoading] = useState(true);

  // Original fetched array
  const [adArray, setAdArray] = useState([]);

  // Array states after searching and filtering
  const [filteredAdArray, setFilteredAdArray] = useState([]);
  const [arrayToDisplay, setArrayToDisplay] = useState([]);

  // States for current search and category filter
  const [searchValue, setSearchValue] = useState('');
  const [currentCategory, setCurrentCategory] = useState(0);

  // fetching all adverts to display

  async function getAllAdverts() {
    const ads = await fetchGet('adverts/user-ads', localStorage.getItem('token'));
    if (ads.msg) {
      setAdArray(ads.msg);
      setFilteredAdArray(ads.msg);
      setLoading(false);
    }
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

  // Getting the username of user to display in page title

  const username = localStorage.getItem('username');

  // function to filter by category
  function handleFilter(categoryId) {
    setCurrentCategory(categoryId);
  }

  useEffect(() => {
    !Number(currentCategory)
      ? setArrayToDisplay(filteredAdArray)
      : setArrayToDisplay(filteredAdArray.filter((ad) => ad.category_id === Number(currentCategory)));
  }, [currentCategory, filteredAdArray]);

  return (
    <Main>
      <Container minHeight='4rem' width='60%'>
        <Title marginBottom='0'>Hello, {username}</Title>
      </Container>
      <Subtitle>Your adverts</Subtitle>
      <Text center={true} textIndent={false}>
        You have {adArray.length} adverts. If you want to post a new one, click <Link to='/create-advert'>here</Link>
      </Text>
      <FilterWrapper>
        <Filter handleCategoryChange={handleFilter} />
        <Input labelText='Search my adverts' type='text' inputValue={searchValue} setInputValue={setSearchValue} placeholder='search' />
      </FilterWrapper>
      {loading ? <Loading /> : <AdvertsGrid adverts={arrayToDisplay} />}
      {!loading && !adArray.length && (
        <Text textIndent={false} center={true}>
          No adverts found
        </Text>
      )}
    </Main>
  );
};

export default UserPage;
