import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Section>
            <Content>
                dd
            </Content>
        </Section>
    )
}

const Section = styled.section`
    background:url('./images/bg-header-desktop.svg') no-repeat;
    background-size:cover;
    background-position:center;
`
const Content = styled.div`
    background:var(--darkBg);
    opacity:0.4;
    height:20vh;
`

export default Header
