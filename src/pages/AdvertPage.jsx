import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonsFlexWrap from '../advertComponents/ButtonsFlexWrap/ButtonsFlexWrap';
import FullAdvert from '../advertComponents/FullAdvert/FullAdvert';
import Loading from '../components/Loading/Loading';
import Main from '../components/Main/Main';
import { fetchDelete, fetchGet } from '../helpers/fetchFunctions';
import PageButton from '../UI/PageButton/PageButton';
import Title from '../UI/Title/Title';

const AdvertPage = () => {
  const [advertInfo, setAdvertInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [noAdFound, setNoAdFound] = useState(false);

  // States for delete button
  const [advertBelongsToUser, setAdvertBelongsToUser] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [deleteFail, setDeleteFail] = useState(false);

  // hook for 'back to Home' button
  const navigate = useNavigate();

  // hook to get advert id from URL
  const { adId } = useParams();

  // Functions to delete advert
  function deleteAd() {
    setDeleteFail(false);
    setDeleteInProgress(true);
  }

  function cancelDelete() {
    setDeleteInProgress(false);
  }

  async function comfirmDelete() {
    const adDeleted = await fetchDelete(`adverts/${advertInfo.id}`, localStorage.getItem('token'));
    if (adDeleted.success) {
      navigate('../');
    } else {
      setDeleteInProgress(false);
      setDeleteFail(true);
    }
  }

  // Get the advert information
  async function getAdInfo() {
    const adInfo = await fetchGet(`adverts/${adId}`, localStorage.getItem('token'));
    if (adInfo.success) {
      setAdvertInfo(adInfo.msg);
      setLoading(false);
      setAdvertBelongsToUser(adInfo.msg.belongsToUser);
    } else {
      setLoading(false);
      setNoAdFound(true);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getAdInfo();
  }, []);

  return (
    <Main>
      <ButtonsFlexWrap>
        <PageButton className='small-button' handleClick={() => navigate(-1)}>
          Back to Home
        </PageButton>
        {!deleteInProgress && advertBelongsToUser && (
          <PageButton handleClick={deleteAd} className='delete-btn'>
            Delete Advert
          </PageButton>
        )}
        {deleteInProgress && (
          <div className='delete-confirm'>
            <p>Delete advert?</p>
            <PageButton className='delete-btn' handleClick={comfirmDelete}>
              Yes
            </PageButton>
            <PageButton className='small-button' handleClick={cancelDelete}>
              No
            </PageButton>
          </div>
        )}
        {deleteFail && <span className='error-text'>Something went wrong</span>}
      </ButtonsFlexWrap>
      {loading && <Loading />}
      {!loading && advertInfo && <FullAdvert adInfo={advertInfo} />}
      {!loading && noAdFound && <Title>No ad found</Title>}
    </Main>
  );
};

export default AdvertPage;
