import React from 'react';
import styled from 'styled-components';
import CardContent from './CardContent';
import FilterComponent from './FilterComponent';


const BodyContent = () => {
    return (
        <Section>
            <Container>
                <Content1>
                    <FilterComponent/>
                </Content1>
                <Content2>
                    <ContentContainer>
                        <CardContent/>
                        <CardContent/>
                        <CardContent/>
                        <CardContent/>
                        <CardContent/>
                    </ContentContainer>
                </Content2>
            </Container>
            
        </Section>
    )
}

const Section = styled.section`
    // border:1px solid red;
    padding: 0 30px;
    // position:relative;
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
