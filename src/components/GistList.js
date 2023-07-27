import { useCallback, useContext, useState } from 'react';
import GistCard from './common/GistCard';
import Modal from './common/Modal';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContextProvider';

const GistList = () =>{
    const gistData = useContext(AppContext);
    const [showModal , setShowModal] = useState("");

    const closeModal = useCallback(()=>{
      setShowModal("");
    },[]);
    const openModal = useCallback((id)=>{
      setShowModal(id);
    },[]);


    if(!gistData) return null;

    const { isLoading, error, gists } = gistData;

    if(isLoading) return <Loader><div className="loader"></div></Loader>;
    
    if(error) return toast.error("Something went wrong");


    return(
        <div className='gist-wrapper'>
          {
            gists?.map(gist => {
              if(!gist) return null;
              const data = { 
                id:gist.id,
                owner:gist.owner, 
                description:gist.description, 
                created_at:gist.created_at, 
                updated_at:gist.updated_at, 
                files : gist?.files ? Object.keys(gist.files).length : []
              };
              return <GistCard key={gist.id} openModal={openModal} gist={data} onClickView={() => setShowModal(gist.id)}/>
            })
          }

        <Footer /> 

        { 
          showModal !== ""
            &&
            <Modal
              id={showModal}
              closeModal={closeModal}
            />
        }
        </div>
    )
}

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Footer = styled.div`
  margin-top:100px;
`

export default GistList;