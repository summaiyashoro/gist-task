import React, { useContext } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { AppContext } from '../../context/AppContextProvider';

const Search = () => {
  const AppData = useContext(AppContext);
  
  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input placeholder="Search Gists for the username" onChange={AppData.FilterGistsByName}/>
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
  @media only screen and (max-width: 768px){
    width: 300px;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 15px;
  &:focus{
    outline: 0;
  }
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

export const MemoizedSearch = React.memo(Search);