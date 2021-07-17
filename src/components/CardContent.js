import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {  setFilter,setFilterParam,callFilterParam, callJobData,setFilteredData, callFilteredData } from '../features/dataJob/jobSlice';


const CardContent = ({company,position,location,logo,contract,postedAt,languages}) => {
    const dispatch = useDispatch();
    const parameters = useSelector(callFilterParam);
    const jobData = useSelector(callJobData);
    const filteredjobData = useSelector(callFilteredData);

    const callSetFilter =(lang)=>{  
        dispatch(setFilter(true));
        dispatch(setFilterParam([...new Set([...parameters,lang])]));
        if(filteredjobData){
            const value = filteredjobData.filter((job)=>job.languages.includes(lang));
            dispatch(setFilteredData(value));
        }
        else{
            const value = jobData.filter((job)=>job.languages.includes(lang));
            dispatch(setFilteredData(value));
        }
        
    }
    return (
        <CardContainer>
            <CardContents>
                <ContentLeft>
                        <CardImg>
                            <img src={logo} alt="company's logo"/>
                        </CardImg>
                        <CardDeveloperInfo>
                            <Row1>
                                <span>{company}</span>
                                <span className='team-blue'>NEW!</span>
                                <span className='team-black'>FEATURED</span>
                            </Row1>
                            <Row2><h4>{position}</h4></Row2>
                            <hr/>
                            <Row3>
                                <ul>
                                    <li><span>{postedAt}</span></li>
                                    <li><span>&middot;</span></li>
                                    <li><span>{contract}</span></li>
                                    <li><span>&middot;</span></li>
                                    <li><span>{location}</span></li>
                                </ul>
                            </Row3>
                        </CardDeveloperInfo>
                </ContentLeft>
                <ContentRight>
                    <ul>
                        {languages.map((lang)=>(
                            <li key={lang} onClick={()=>callSetFilter(lang)}>{lang}</li>
                        ))}
                    </ul>
                </ContentRight>
            </CardContents>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    margin-top:50px;
    border-radius:7px;
    background:white;
    box-shadow:1px 2px 9px var(--blueOne);
    position:relative
    
`;
const CardContents = styled.div`
    padding:20px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width:768px){
        flex-direction:column;
        flex-wrap: wrap;
        padding:20px 20px;
    }

`;
const ContentLeft = styled.div`
    display:flex;
    flex-directiom:column;
    justify-content:space-between;
    // border:1px solid red;
    align-items:center;
    margin-right:20px;
    @media(max-width:768px){
        flex-direction:column;
        width:100%;
    }

`;
const CardImg = styled.div`
    margin-right:20px;
    // border:1px solid red;
  
    @media(max-width:768px){
        img{
            position:absolute;
            left:20px;
            top:-25px;
            width:50px;
        }
    }
`;
const CardDeveloperInfo = styled.div`
@media(max-width:768px){
    width:100%;
    margin-top:10px;
}
hr{
    visibility:hidden;
}
    @media(max-width:768px){
        hr{
            visibility:visible;
            border:0;
            border-top:1px solid hsl(180, 8%, 52%);
            width:100%;
        }
    }
   
`;
const ContentRight = styled.div`
    ul{
        list-style:none;
        display:flex;
        font-size:14px;
        padding:0;
        margin:0;
        flex-wrap: wrap;
        li{
            margin:0 20px 0 0;
            padding:8px;
            background:hsl(180, 31%, 95%);
            font-weight:bold;
            border-radius:3px;
            margin-top:5px;
            transition:all .2s ease-in-out;
            &:hover{
                background:var(--darkOne);
                cursor:pointer;
                color:white;
            }
        }
    }
    @media(max-width:768px){
        width:100%;
        margin-top:20px;
        ul{
            li{
                margin-top:10px;
            }
        }
     }
`;
const Row1 = styled.div`
     flex-wrap:wrap;
     display:flex;
    span{
        font-size:14px;
        margin-right:7px;
        font-weight:bold;
        &.team-blue{
            font-size:10px;
            color:white;
            padding:4px;
            background:var(--blueOne);
            border-radius:4px;
            &:hover{
                cursor:pointer;
            }
        }
        &.team-black{
            font-size:10px;
            padding:4px;
            color:white;
            background:var(--darkOne);
            border-radius:4px;
            &:hover{
                cursor:pointer;
            }
        }
    }
    @media(max-width:768px){
       margin-top:10px;
    }

    
`;
const Row2 = styled.div`
    h4{
        color:black;
        font-weight:700;
        font-size:18px;
        margin:15px 0;
    }
`;
const Row3 = styled.div`
    ul{
        padding:0;
        margin:0;
        list-style:none;
        display:flex;
        color:hsl(180, 8%, 52%);
        font-size:13px;
        li{
            margin-right:15px;
        }
    }
    @media(max-width:768px){
        margin-top:10px;
     }
`;

export default CardContent
