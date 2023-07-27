import { PropTypes } from "prop-types";
import { HorizontalWrapper ,Image,UserName, Date, Text,FlexWrapper,IconWrapper, FlexEndContainer} from "./GistCard";
import Octicon from 'react-octicon';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import moment from "moment";
import styled from "styled-components";


const  Modal = ({closeModal,id}) =>{
    const [data , setData] = useState([]);
    const AppData = useContext(AppContext);
    const { getGistById } = AppData;

    useEffect(()=>{
        const gist = getGistById(id);
        setData(gist[0]);
    },[id]);

    if(!data) return null;
    const { owner, description, created_at, updated_at, files,forks_url } = data;

    return(
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <HorizontalWrapper>
                 <Image  src={owner?.avatar_url} alt="profile"/>
                 <UserName>{owner?.login}</UserName>
               </HorizontalWrapper>
               <Text>{description} {description}</Text>
               <hr/>
                <Heading>Files</Heading>
                <HorizontalWrapper className="margin-left-20 flex-wrap">
                    {
                        files 
                        ?
                        Object.entries(files)?.map(([key, value])=>{
                         return(
                            <FlexWrapper key={key}>
                                <IconWrapper className="gistBlue-text"><Octicon name="file" fill="blue" /></IconWrapper>
                                <Text className="gistBlue-text remove-margin">{value.filename}</Text>
                            </FlexWrapper>
                         )
                        })
                        :
                        null
                    }
                    
                </HorizontalWrapper>

                <Heading>Forks</Heading>
                <FlexWrapper>
                    <IconWrapper className="gistBlue-text"><Octicon name="repo-forked" fill="blue" /></IconWrapper>
                    <Link className="gistBlue-text" href={forks_url} target="_blank">{forks_url}</Link>
                 </FlexWrapper>

                <Heading>Comments</Heading>
                <FlexWrapper>
                    <IconWrapper className="gistBlue-text"><Octicon name="repo-forked" fill="blue" /></IconWrapper>
                    <Link className="gistBlue-text" href={forks_url} target="_blank">{forks_url}</Link>
                 </FlexWrapper>

                <FlexEndContainer className="margin-vertical-20">
                  <Date><span className="font-medium">Created At: </span>{moment(created_at).format("MMM Do YYYY")}</Date>
                  <Date><span className="font-medium">Last Updated: </span>{moment(updated_at).format("MMM Do YYYY")}</Date>
                </FlexEndContainer>
            </div>
        </div>
    )
}

// type checking of props
Modal.propTypes = {
    closeModal : PropTypes.func,
    id: PropTypes.string
};


// sytled components
const Link = styled.a`
    font-size: 14px;
    text-decoration:none;
    word-break: break-word;
`

const Heading = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin:30px 0 10px 0;
    overflow-wrap: break-word;
    word-break: break-word;
`

export default Modal;