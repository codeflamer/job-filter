/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const FilterComponent = () => {
    return (
        <FilterContainer>
            <FilterContent>
                <ContentLeft>
                    <ul>
                        <li>Frontend <img src='/images/icon-remove.svg' /></li>
                        <li>CSS <img src='/images/icon-remove.svg' /></li>
                        <li>JavaScript <img src='/images/icon-remove.svg' /></li>
                    </ul>
                </ContentLeft>
                <ContentRight>
                    <a href='#'>Clear</a>
                </ContentRight>
            </FilterContent>
        </FilterContainer>
    )
}

const FilterContainer = styled.div`
    // border:1px solid blue;
    position:absolute;
    top:-180px;
    width:100%;
    padding:20px 40px;
    border-radius:7px;
    box-shadow:1px 2px 9px var(--blueOne);
    box-sizing:border-box;
    background:white;
    @media(max-width:768px){
        padding:15px 20px;
    }
`
const FilterContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const ContentLeft = styled.div`
    ul{
        list-style:none;
        display:flex;
        margin:0;
        padding:0;
        // border:1px solid red;
        margin-right:20px;
        flex-wrap:wrap;
        li{
            // border:1px solid red;
            margin-top:6px;
            border-radius:5px;
            margin-right:15px;
            padding-left:7px;
            display:flex;
            // display:block;
            align-items:center;
            background:hsl(180, 31%, 95%);
            font-weight:bold;
            img{
                margin-left:10px;
                background:var(--blueOne);
                padding:10px;
                border-top-right-radius:5px;
                border-bottom-right-radius:5px;
                transition:all 0.2s ease-in-out;
                &:hover{
                    background:var(--darkOne);
                    cursor:pointer;
                }
            }
        }
    }
`
const ContentRight = styled.div`
    a{
        
        transition:all 0.2s;
        text-decoration:none;
        font-weight:bold;
        &:hover{
            text-decoration:underline;
        }
    }
`

export default FilterComponent
