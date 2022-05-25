import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FullAdvert from '../advertComponents/FullAdvert/FullAdvert';
import Loading from '../components/Loading/Loading';
import Main from '../components/Main/Main';
import { fetchGet } from '../helpers/fetchFunctions';

const AdvertPage = () => {
  const [advertInfo, setAdvertInfo] = useState();
  const [loading, setLoading] = useState(true);

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
      {loading && <Loading />}
      {!loading && <FullAdvert adInfo={advertInfo} />}
    </Main>
  );
};

export default AdvertPage;
