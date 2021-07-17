import React from 'react';
import styled from 'styled-components';
import CardContent from './CardContent';
import FilterComponent from './FilterComponent';
import { useSelector } from 'react-redux';
import { callFilter, callJobData ,callFilteredData} from '../features/dataJob/jobSlice';


const BodyContent = () => {
    const cardDetails = useSelector(useSelector(callFilter) ? callFilteredData : callJobData);
    // console.log(cardDetails);
    if (cardDetails){
        return (
            <Section>
                <Container>
                    <Content1>
                        <FilterComponent/>
                    </Content1>
                    <Content2>
                        <ContentContainer>
                            {cardDetails.map((card)=>(
                                <CardContent key={card.id} {...card} />
                            ))}
                        </ContentContainer>
                    </Content2>
                </Container>
                
            </Section>
        ) 
    }
    else{
        return(
            <Section>
                <Container>
                    <h3>Loading...</h3>
                </Container>
            </Section>
        )
    }
    
}

const Section = styled.section`
    // border:1px solid red;
    padding: 0 30px;
    // position:relative;
    margin-bottom:30px;
`;
const Container = styled.div`
    // border:1px solid blue;
    max-width:1290px;
    margin:0 auto;
`;
const ContentContainer = styled.div`
   margin-top:130px;
   @media(max-width:300px){
    margin-top:200px;
}
`;
const Content1 = styled.div`
    // border:1px solid green;
    position:relative;
`;
const Content2 = styled.div``;


export default BodyContent
