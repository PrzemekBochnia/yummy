import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


export default function Popular() {
    const ApiKey = 'dc6e88e60a504e8786ed9027f3f705df';

    const[popular,setPopular] = useState([])

    useEffect(()=>{
        getPopular()
    },[])

    const getPopular =async () =>{

        const check = localStorage.getItem("popular");

        if(check){
          setPopular(JSON.parse(check))
        }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${ApiKey}&number=12`);
          const data = await api.json()
          setPopular(data.recipes)
          localStorage.setItem("popular", JSON.stringify(data.recipes))
        }
      }   
  return (
    <div>
          <Wrapper>
            <h3>Popular</h3>
            <Splide options={{
              perPage:4,
              arrows:true,
              pagination:false,
              gap:"1rem"
            }}>
            {popular.map((recipe)=>{
              return(
                <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}></img>
                    <Gradient/>
                  </Link>
                </Card>
                </SplideSlide>
              )
            })}
            </Splide>
          </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3{
    text-align:center;
    margin-bottom:1rem;
  }
`;
const Card = styled.div`
  min-height: 15rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform: translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;