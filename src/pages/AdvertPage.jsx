import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FullAdvert from '../advertComponents/FullAdvert/FullAdvert';
import Loading from '../components/Loading/Loading';
import Main from '../components/Main/Main';
import { fetchGet } from '../helpers/fetchFunctions';
import PageButton from '../UI/PageButton/PageButton';

const AdvertPage = () => {
  const [advertInfo, setAdvertInfo] = useState();
  const [loading, setLoading] = useState(true);

  // hook for 'back to Home' button
  const navigate = useNavigate();

  // hook to get advert id from URL
  const { adId } = useParams();

  // Get the advert information

  async function getAdInfo() {
    const adInfo = await fetchGet(`adverts/${adId}`);
    setAdvertInfo(adInfo.msg);
    setLoading(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getAdInfo();
  }, []);

  return (
    <Main>
      <PageButton className='back-to-home' handleClick={() => navigate(-1)}>
        Back to Home
      </PageButton>
      {loading && <Loading />}
      {!loading && <FullAdvert adInfo={advertInfo} />}
    </Main>
  );
};

export default AdvertPage;
