import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Link, useParams } from 'react-router-dom';

function Cousine() {
    const ApiKey = 'dc6e88e60a504e8786ed9027f3f705df';

    const[cousine,setCousine] = useState([]);
    let params = useParams();
    
    const getCousine = async(name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&cuisine=${name}`)
        const recipes = await data.json();
        console.log(recipes);
        setCousine(recipes.results)
    }
    
    useEffect(()=>{
        getCousine(params.type)
        console.log(params.type);
    },[params.type])
  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}} 
    >
        {cousine.map((item)=>{
            return(
                <Card id={item.id}>
                    <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>    
                    </Link>
                </Card>
            )
        } )}
    </Grid>
  )
}
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img{
        width:100%;
        border-radius:2rem;
        /* opacity: 0.5; */
        /* background: rgba(0, 0, 0, 0.5); */

    }
    a{
        text-decoration: none
    }
    h4{
        text-align:center;
        padding: 1rem;
        font-weight: 900;
        color: white;
        position: relative;
        top: -20%;
    }
`;


export default Cousine