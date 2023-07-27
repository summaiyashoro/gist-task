import styled from "styled-components";
import Octicon from 'react-octicon';
import moment from "moment/moment";
import { PropTypes } from "prop-types";


const GistCard = ({ gist , onClickView }) =>{
    if(!gist) return;
    const { id,owner, description, created_at, updated_at, files } = gist;
    return(
        <CardContainer>
           {/* header of gist card */}
           <CardHeaderWrapper>
               <HorizontalWrapper>
                 <Image  src={owner?.avatar_url} alt="profile"/>
                 <UserName>{owner?.login}</UserName>
               </HorizontalWrapper>

               <HorizontalWrapper className="flex-wrap">
                 <FlexWrapper>
                    <IconWrapper className="gistBlue-text"><Octicon name="code" fill="blue" /></IconWrapper>
                    <Text className="gistBlue-text">{`${files} ${files > 1 ? "Files" :"File"}`} </Text>
                 </FlexWrapper>
                 <FlexWrapper>
                    <IconWrapper className="gistBlue-text"><Octicon name="repo-forked" fill="blue" /></IconWrapper>
                    <Text className="gistBlue-text">Forks</Text>
                 </FlexWrapper>
                 <FlexWrapper>
                    <IconWrapper className="gistBlue-text"><Octicon name="comment" fill="blue" /></IconWrapper>
                    <Text className="gistBlue-text">Comments</Text>
                 </FlexWrapper>
                 <HorizontalWrapper>
                    <IconWrapper className="gistBlue-text"><Octicon name="star" fill="blue" /></IconWrapper>
                    <Text className="gistBlue-text">Stars</Text>
                 </HorizontalWrapper>
                <ViewButton className="gistBlue-bg" onClick={onClickView}>VIEW</ViewButton>

               </HorizontalWrapper>
           </CardHeaderWrapper>

            <div className="card-body">
                <Text>{description}</Text>
            </div>

            <FlexEndContainer>
                <Date><span className="font-medium">Created At: </span>{moment(created_at).format("MMM Do YYYY")}</Date>
                <Date><span className="font-medium">Last Updated: </span>{moment(updated_at).format("MMM Do YYYY")}</Date>
            </FlexEndContainer>
        </CardContainer>
    )
}

// type checking of props
GistCard.propTypes = {
    onClickView : PropTypes.func,
    gist: PropTypes.object
};

// styled components
const CardContainer = styled.div`   
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    padding: 10px 20px;
    margin-top:30px;
`

const CardHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 768px){
       flex-direction:column;
       align-items: baseline;
    }
`

const HorizontalWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Image = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);
    margin-right: 10px;
`

const UserName = styled.p`
    font-size: 16px;
    font-weight: 500;
    word-break: break-word;
`

const Text = styled.p`
    font-size: 14px;
    word-break: break-word;
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`
const IconWrapper = styled.div`
  margin:3px 3px 0 0;
`
const Date = styled.p`
    font-size: 12px;
    margin-right: 8px;
`

const ViewButton = styled.button`
    padding: 7px 18px;
    font-size: 12px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    color:white;
    font-weight: 500;
    margin-left:14px;
`

const FlexEndContainer = styled.div`
    display: flex;
    justify-content: end;
`

// exporting styled components so that they can be used anywhere in the project
export{
    ViewButton,
    Date,
    IconWrapper,
    FlexWrapper,
    Text,
    UserName,
    Image,
    HorizontalWrapper,
    FlexEndContainer
}

export default GistCard;