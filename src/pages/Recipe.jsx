import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function Recipe() {
    const ApiKey = 'dc6e88e60a504e8786ed9027f3f705df';
    let params = useParams();
    const [details, setDetails ] = useState()
    const [activeTab, setActiveTab] = useState('instructions')

    const fetchDetails = async() =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${ApiKey}`)
        const detailData = await data.json()
        setDetails(detailData)
        console.log(detailData);
    }
    useEffect(()=>{
        fetchDetails()
    },[params.name])
    console.log(details);
  return (
        <DetailWrapper
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}} 
        >
            <div>
                <h2>{details? details.title : null}</h2>
                <img src={details?details.image : null}/>
            </div>
                <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingridients' ? 'active' : ''} onClick={()=> setActiveTab('ingridients')}>Ingridients</Button>
                {activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: details? details.summary : null}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: details? details.instructions : null}}></h3>
                </div>
                )}
                {activeTab === 'ingridients' && (
                <ul>
                    {details ? details.extendedIngredients.map((ingredient)=>
                    <li>{ingredient.name}</li>
                    ) : null} 
                </ul>
                )}
                </Info>
        </DetailWrapper>
  )
}
const DetailWrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949,#313131);
        color: white;
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
    h2{
        margin-bottom: 2rem;
        text-align: center;
    }
    h3{
        padding: 2rem 0rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    `;
const Info = styled.div`
    max-width: 60%;
    padding: 0rem 2rem;
    /* background: green; */
`;



export default Recipe