import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <SHeader>
        <Link to="/">
        Yummy Recipes
        </Link>
        </SHeader>
  )
}
const SHeader = styled.div`
    width: 100%;
    height: 5rem;
    background: linear-gradient(to right, #c04848, #480048);
    border-radius: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: flex-start;
    font-size: 2rem;
    font-weight: bold;
    padding: 0rem 5rem;
    font-family: 'Square Peg', cursive;
    a{
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default Header