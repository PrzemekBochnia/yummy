import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Search() {

    const[input, setInput] = useState('');
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate(`searched/`+input)
    }


  return (
    <SForm onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e)=>setInput(e.target.value)} type='text' value={input}/>
        </div>
    </SForm>
  )
}

const SForm = styled.form`
    margin: 0rem 10rem;
    /* width: 100%; */
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949,#313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    @media only screen and (max-width: 768px) {
        margin: 0rem 2rem;
    }
`;

export default Search